import ListGroup from "react-bootstrap/ListGroup";
import Add from "@material-ui/icons/Add";

import { CustomImage } from "../../Common/ImageComponents";
import { noRecommendations } from "../../../utils/messages";
import { IconClickButton } from "../../Common/FormsComponents/Buttons";
import ShadowCard, { BsCard } from "../../Common/Cards/Cards";
import TextMessage from "../../Common/Messages/TextMessage";

const PeopleRecommendationCard = ({ data = [], cardClasses = "", ...props }) => {
    return (
        <ShadowCard classes={cardClasses}>
            <BsCard.Header className="bg-transparent fs-5 fw-500 px-4 py-3">People you may know</BsCard.Header>
            <ListGroup variant="flush">
                {data.length > 0 ? (
                    data.map((e) => (
                        <ListGroup.Item key={e.id} className="p-4">
                            <RecommendedPeopleCard {...e} />
                        </ListGroup.Item>
                    ))
                ) : (
                    <TextMessage text={noRecommendations} />
                )}
            </ListGroup>
        </ShadowCard>
    );
};

const RecommendedPeopleCard = ({ name, description, profile_image, ...props }) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <CustomImage roundedCircle src={profile_image.medium} />
            <div className="d-flex justify-content-center flex-column flex-fill mx-2">
                <p className="fw-600 fs-md mb-0">{name}</p>
                <p className="fs-xs mb-0 text-secondary">{description}</p>
            </div>
            <IconClickButton
                onClickHandler={() => console.log(`Added ${name}`)}
                icon={<Add className="text-linkedin-blue fs-md ml-auto" />}
                size="sm"
                classes="bg-gray-200 outline-none shadow-none"
                variant="none"
            />
        </div>
    );
};

export default PeopleRecommendationCard;
