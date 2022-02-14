import React from "react";
import Card from "react-bootstrap/Card";

const ShadowCard = React.forwardRef(({ children, classes = "", ...props }, ref) => {
    return (
        <Card className={`border-0 shadow ${classes}`} ref={ref}>
            {children}
        </Card>
    );
});

export { Card as BsCard };
export default ShadowCard;
