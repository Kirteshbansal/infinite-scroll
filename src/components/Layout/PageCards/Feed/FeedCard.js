import React from "react";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import ShadowCard, { BsCard } from "../../../Common/Cards/Cards";
import Img, { CustomImage } from "../../../Common/ImageComponents";
import InlineIconWithText from "../../../Common/Misc/IconTextComponents";
import ClickButton, { IconClickButton } from "../../../Common/FormsComponents/Buttons";
import "../../../../assets/css/feed-card-styles.css";

const FeedCard = React.forwardRef((props, ref) => {
    const { data } = props;
    return (
        <ShadowCard className="feed-card" ref={ref}>
            <BsCard.Body className="p-sm-4 feed-card__body">
                <div className="d-flex">
                    <CustomImage
                        src={data?.user.profile_image.medium}
                        roundedCircle
                        classes="feed-card__avatar align-self-center"
                    />
                    <div className="feed-card__user-details align-self-center mx-2 text-truncate flex-fill">
                        <p className="mb-0 letter-space-1 fw-600">{data?.user.name}</p>
                        <span className="text-gray-500 fs-xs">{data?.created_at}</span>
                    </div>
                    <div className="feed-card__actions flex-shrink-1 text-nowrap">
                        <IconClickButton
                            icon={<MoreHorizOutlinedIcon className="text-gray-500" variant="none" />}
                            classes="bg-transparent outline-none shadow-none p-0 feed-card__actions-icon ms-auto d-block"
                            onClickHandler={() => console.log("clicked")}
                        />
                        <span className="text-gray-500 mb-0 fs-xs">10 min ago</span>
                    </div>
                </div>
                <Img classes="w-100 my-3" src={data?.urls.regular} lazy={true} />
                <div className="d-flex align-items-center">
                    <ClickButton
                        variant="none"
                        classes="bg-transparent outline-none shadow-none"
                        title={
                            <InlineIconWithText
                                icon={
                                    Math.random() * 5 > 2 ? (
                                        <FavoriteBorderOutlinedIcon className="text-gray-500" />
                                    ) : (
                                        <FavoriteOutlinedIcon className="text-red-600" />
                                    )
                                }
                                text={Math.ceil(Math.random() * 99)}
                                iconClasses="fs-5"
                                textClasses="fs-sm ms-1 text-gray-500"
                            />
                        }
                        onClickHandler={() => console.log("Liked")}
                    />
                    <ClickButton
                        variant="none"
                        classes="bg-transparent outline-none shadow-none"
                        title={
                            <InlineIconWithText
                                icon={<ChatBubbleOutlineOutlinedIcon />}
                                text={Math.ceil(Math.random() * 40)}
                                containerClasses="mx-3"
                                iconClasses="fs-5 text-gray-500"
                                textClasses="fs-sm ms-1 text-gray-500"
                            />
                        }
                        onClickHandler={() => console.log("Commented")}
                    />
                    <ClickButton
                        variant="none"
                        classes="bg-transparent outline-none shadow-none"
                        title={
                            <InlineIconWithText
                                icon={<ShareOutlinedIcon />}
                                text="Share"
                                iconClasses="fs-5 text-gray-500"
                                textClasses="fs-sm ms-1 text-gray-500"
                            />
                        }
                        onClickHandler={() => console.log("Shared")}
                    />
                </div>
            </BsCard.Body>
        </ShadowCard>
    );
});

export default FeedCard;
