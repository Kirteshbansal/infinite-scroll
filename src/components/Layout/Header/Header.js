import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import GridOnOutlined from "@material-ui/icons/GridOnOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import SearchIcon from "@material-ui/icons/Search";

import { CustomImage } from "../../Common/ImageComponents";
import { logoUnFilled, profileImage } from "../../../assets/images/images";
import { NavLinkItem } from "./HeaderUtils";
import { InputBoxWithIcon } from "../../Common/FormsComponents/InputBoxes";

import "../../../assets/css/header-styles.css";

const Header = () => {
    const [searchVal, setSearchVal] = useState("");

    return (
        <Navbar
            collapseOnSelect
            sticky="top"
            expand="lg"
            bg="white"
            variant="light"
            className="px-3 px-lg-4 px-xl-5 py-3 shadow-sm"
        >
            <Container fluid>
                <Navbar.Toggle aria-controls="nav-menu" />
                <Navbar.Brand href="#" className="mr-lg-5">
                    <CustomImage
                        src={logoUnFilled}
                        width="35"
                        height="35"
                        classes="d-inline-block align-top"
                        alt="linkedin logo"
                    />
                </Navbar.Brand>
                <div className="order-lg-last position-relative nav-avatar cursor-pointer">
                    <CustomImage
                        src={profileImage}
                        height="45"
                        width="45"
                        roundedCircle={true}
                        classes="nav-avatar__img"
                    />
                    <ArrowDropDownCircleIcon
                        color="primary"
                        fontSize="small"
                        className="position-absolute nav-avatar_dropdown-icon rounded-circle"
                    />
                </div>
                <Navbar.Collapse id="nav-menu" className="mt-3 mt-lg-0 justify-content-lg-around">
                    <InputBoxWithIcon
                        val={searchVal}
                        onChangeHandler={(e) => setSearchVal(e.target.value)}
                        classes="max-lg-w50 ms-lg-auto ms-xxl-4 me-lg-3 ps-xl-5 me-xl-4"
                        placeHolder="Search"
                        flushed
                        icon={<SearchIcon />}
                    />
                    <div className="d-flex flex-column flex-lg-row me-xl-auto">
                        <NavLinkItem
                            icon={<HomeOutlinedIcon className="nav-elem__icon-el nav-elem__icon-el--fs-l" />}
                            title="Home"
                            active
                            tabIndex="0"
                        />
                        <NavLinkItem icon={<PeopleAltOutlinedIcon className="nav-elem__icon-el " />} title="Network" />
                        <NavLinkItem
                            icon={<ChatBubbleOutlineRoundedIcon className="nav-elem__icon-el" />}
                            title="Messaging"
                            tabIndex="1"
                        />
                        <NavLinkItem
                            icon={
                                <NotificationsNoneOutlinedIcon className="nav-elem__icon-el nav-elem__icon-el--fs-l" />
                            }
                            title="Notifications"
                            tabIndex="2"
                            badge
                            badgeLabel="Alerts"
                        />
                        <NavLinkItem
                            icon={<WorkOutlineOutlinedIcon className="nav-elem__icon-el " />}
                            title="Jobs"
                            tabIndex="3"
                        />
                        <NavLinkItem
                            icon={<GridOnOutlined className="nav-elem__icon-el" />}
                            title="Home"
                            tabIndex="4"
                        />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
