import { cloneElement, isValidElement } from "react";

const InlineIconWithText = ({ icon, text, containerClasses = "", iconClasses = "", textClasses = "" }) => {
    return (
        <span className={`d-flex align-items-center ${containerClasses}`}>
            {isValidElement(icon)
                ? cloneElement(icon, {
                      ...icon.props,
                      className: `${icon.props.className} ${iconClasses}`,
                  })
                : null}
            <span className={textClasses}>{text}</span>
        </span>
    );
};

export default InlineIconWithText;
