import { Nav } from "react-bootstrap";

export const NavLinkItem = ({ icon, title, active = false, badge, badgeLabel = "", ...props }) => {
    return (
        <Nav.Link href="#" className="px-xl-3 px-xxl-4" {...props}>
            <div className={`d-flex align-items-center nav-elem ${active ? "text-linkedin-blue" : ""}`}>
                <div className="position-relative">
                    {icon && <span className="d-inline-block nav-elem__icon">{icon}</span>}
                    {badge && (
                        <>
                            <span className="nav-elem__icon__badge position-absolute top-0 bg-linkedin-blue rounded-circle">
                                <span className="visually-hidden">{badgeLabel}</span>
                            </span>
                        </>
                    )}
                </div>
                <span className="d-inline-block nav-elem__title text-gray-800 fs-sm letter-space-1">{title}</span>
            </div>
        </Nav.Link>
    );
};
