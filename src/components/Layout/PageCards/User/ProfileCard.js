import BorderColorOutlined from "@material-ui/icons/BorderColorOutlined";
import InsertLinkOutlined from "@material-ui/icons/InsertLinkOutlined";

import ShadowCard, { BsCard } from "../../../Common/Cards/Cards";
import { CustomImage } from "../../../Common/ImageComponents";
import { freeAccessWithPremium } from "../../../../utils/messages";
import ClickButton, { IconClickButton } from "../../../Common/FormsComponents/Buttons";

const ProfileCard = ({ cardClasses = "", data = {}, ...props }) => {
    return (
        <ShadowCard classes={cardClasses}>
            <BsCard.Body className="d-flex justify-content-center flex-column px-4 pt-5 position-relative">
                <IconClickButton
                    icon={<BorderColorOutlined className="text-gray-400" />}
                    onClickHandler={() => console.log("edit")}
                    variant="none"
                    classes="outline-none shadow-none position-absolute top-0 end-0 me-4 mt-4"
                />
                <CustomImage src={data.profile_image?.large} roundedCircle classes="d-block mx-auto shadow-sm" />
                <h5 className="text-center letter-space-1 mt-3">{data.name}</h5>
                <p className="text-gray-500 fs-sm letter-space-1 text-center">{data.description}</p>
                <BsCard.Link href="#" className="d-inline-block text-truncate text-decoration-none mb-3">
                    <InsertLinkOutlined className="rotate-135deg text-linkedin-blue fs-5 align-text-top me-2" />
                    <span className="text-gray-500">{data.social.linkedin}</span>
                </BsCard.Link>
            </BsCard.Body>
            <BsCard.Body className="px-0 text-center">
                <div className="border-top border-bottom d-flex mb-5">
                    <ProfileCardDataBlock val={data.connections} title="Connections" classes="border-end" />
                    <ProfileCardDataBlock val={data.views} title="Views" classes="border-end" />
                </div>
                <p className="text-gray-500 letter-space-1 fs-xs px-2">{freeAccessWithPremium}</p>
                <ClickButton
                    title="UPGRADE TO PREMIUM"
                    classes="py-3 px-4 shadow-none bg-gray-200 fs-xs fw-500 letter-space-1 text-linkedin-blue mb-4"
                    variant="none"
                    onClickHandler={() => console.log("upgraded")}
                />
            </BsCard.Body>
        </ShadowCard>
    );
};

const ProfileCardDataBlock = ({ title, val, classes = "" }) => {
    return (
        <div className={`${classes} w-50 py-3 px-2`}>
            <strong className="fs-4">{val}</strong>
            <p className="mb-0 text-gray-500">{title}</p>
        </div>
    );
};

export default ProfileCard;
