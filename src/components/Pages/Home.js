import { useReducer, useEffect, useCallback, useRef } from "react";

import MainLayout from "../Layout/MainLayout";
import PeopleRecommendationCard from "../Layout/PageCards/PeopleRecommendationCard";
import recommendationData from "../../data/recommendationData";
import CreatePostCard from "../Layout/PageCards/Feed/CreatePostCard";
import ProfileCard from "../Layout/PageCards/User/ProfileCard";
import profileData from "../../data/profileData";
import FeedCard from "../Layout/PageCards/Feed/FeedCard";
import { fetchFeedData } from "../../api/services/feedServices";
import fetchDataStateEnum, { changePage, hasMoreData } from "../../utils/models/dataHandling";
import Loader from "../Common/Loaders/Loader";
import { somethingWentWrong, feedEnd } from "../../utils/messages";
import TextMessage from "../Common/Messages/TextMessage";

const initialState = { loading: false, data: [], error: false, page: 1, hasMore: false };

const reducer = (state, action) => {
    switch (action.type) {
        case fetchDataStateEnum.pending:
            return { ...state, loading: true, error: false };
        case fetchDataStateEnum.fulfilled:
            return { ...state, loading: false, data: [...state.data, ...action.payload] };
        case fetchDataStateEnum.rejected:
            return { ...state, loading: false, error: true };
        case changePage:
            return { ...state, page: ++state.page };
        case hasMoreData:
            return { ...state, hasMore: action.payload };
        default:
            return state;
    }
};

const Home = ({ ...props }) => {
    let observer = useRef(null);
    const [state, dispatch] = useReducer(reducer, initialState);

    let lastFeedCardRef = useCallback(
        (node) => {
            if (state.loading) return;
            if (observer.current) observer.current.disconnect();
            console.log(observer.current);
            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && state.hasMore) {
                        dispatch({ type: changePage });
                    }
                },
                { threshold: 0.1 }
            );
            if (node) {
                observer.current.observe(node);
            }
        },
        [state.loading, state.hasMore]
    );

    useEffect(() => {
        const fetchData = async (pageNum) => {
            try {
                dispatch({ type: fetchDataStateEnum.pending });
                const res = await fetchFeedData(pageNum);
                if (res.data.length === 0) {
                    dispatch({ type: hasMoreData, payload: false });
                }
                dispatch({ type: fetchDataStateEnum.fulfilled, payload: res.data });
                dispatch({ type: hasMoreData, payload: true });
            } catch (error) {
                dispatch({ type: fetchDataStateEnum.rejected });
            }
        };
        fetchData(state.page);
    }, [state.page]);

    return (
        <MainLayout
            rightSideBar={<PeopleRecommendationCard data={recommendationData} cardClasses="position-sticky top-22" />}
            leftSideBar={<ProfileCard data={profileData} cardClasses="position-sticky top-22" />}
        >
            <div className="d-grid gap-3 mx-md-3 mx-lg-0 mx-xl-2 mx-xxl-3 pb-3 feed-list">
                <CreatePostCard />
                {state.data.length > 0 &&
                    state.data.map((e, i) => {
                        if (state.data.length === i + 1) {
                            return <FeedCard ref={lastFeedCardRef} key={i + 1} data={e} />;
                        } else {
                            return <FeedCard key={i + 1} data={e} />;
                        }
                    })}
                {state.loading && <Loader />}
                {!state.loading && state.error && <TextMessage text={somethingWentWrong} />}
                {!state.loading && !state.error && !state.hasMore && <TextMessage text={feedEnd} />}
            </div>
        </MainLayout>
    );
};

export default Home;
