import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "../../assets/css/main-layout-styles.css";

const MainLayout = ({
    fluid = true,
    leftSideBar,
    rightSideBar,
    children,
    containerClasses = "",
    leftSideBarSticky = false,
    rightSideBarSticky = false,
    ...props
}) => {
    return (
        <ErrorBoundary>
            <Container fluid={fluid} className={`bg-gray-100 pt-4 pt-sm-5 main-layout px-xl-5 ${containerClasses}`}>
                <Row>
                    <Col className="d-none d-lg-block ps-xl-0" lg="3">
                        {leftSideBar}
                    </Col>
                    <Col className="" xs lg="6">
                        {children}
                    </Col>
                    <Col className="d-none d-lg-block pe-xl-0" lg="3">
                        {rightSideBar}
                    </Col>
                </Row>
            </Container>
        </ErrorBoundary>
    );
};

export default MainLayout;
