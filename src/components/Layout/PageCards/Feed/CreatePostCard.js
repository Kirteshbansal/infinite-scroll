import SendIcon from "@material-ui/icons/Send";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import ReceiptRounded from "@material-ui/icons/ReceiptRounded";

import ShadowCard, { BsCard } from "../../../Common/Cards/Cards";
import { TextArea } from "../../../Common/FormsComponents/InputBoxes";
import ClickButton, { IconClickButton } from "../../../Common/FormsComponents/Buttons";
import InlineIconWithText from "../../../Common/Misc/IconTextComponents";

const CreatePostCard = (props) => {
    return (
        <ShadowCard>
            <BsCard.Header className="bg-transparent pt-4 ps-xl-4">
                <TextArea
                    hideBorder
                    placeHolder="Write here. Add images or a video for visual impact."
                    inputClasses="fs-sm letter-space-1"
                />
            </BsCard.Header>
            <BsCard.Body className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    <ClickButton
                        variant="none"
                        classes="bg-transparent outline-none shadow-none"
                        title={
                            <InlineIconWithText
                                icon={<ReceiptRounded />}
                                iconClasses="me-1 text-gray-500"
                                text="Article"
                                textClasses="letter-space-1 fs-sm fw-normal d-none d-sm-inline-block"
                            />
                        }
                        onClickHandler={() => console.log("article")}
                    />
                    <ClickButton
                        variant="none"
                        classes="bg-transparent outline-none shadow-none"
                        title={
                            <InlineIconWithText
                                icon={<CameraAltOutlinedIcon />}
                                iconClasses="me-1 text-gray-500"
                                text="Image"
                                textClasses="letter-space-1 fs-sm fw-normal d-none d-sm-inline-block"
                            />
                        }
                        onClickHandler={() => console.log("Image")}
                    />
                    <ClickButton
                        variant="none"
                        classes="bg-transparent outline-none shadow-none"
                        onClickHandler={() => console.log("video")}
                        title={
                            <InlineIconWithText
                                icon={<VideocamOutlinedIcon />}
                                iconClasses="me-1 fs-3_5xl text-gray-500"
                                text="Video"
                                textClasses="letter-space-1 fs-sm fw-normal d-none d-sm-inline-block"
                            />
                        }
                    />
                </div>
                <IconClickButton
                    icon={<SendIcon className="text-primary fs-3" variant="none" />}
                    classes="bg-transparent outline-none shadow-none"
                    onClickHandler={() => console.log("clicked")}
                />
            </BsCard.Body>
        </ShadowCard>
    );
};

export default CreatePostCard;
