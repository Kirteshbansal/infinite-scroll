import Button from "react-bootstrap/Button";

const ClickButton = ({
    variant = "primary",
    title,
    size = "md",
    isDisabled = false,
    loading,
    loadingText = "Processing...",
    styles = {},
    width = "",
    height = "",
    classes = "",
    onClickHandler,
    isRounded = true,
    ...props
}) => {
    const classList = isRounded ? `${classes} rounded-pill` : classes;
    return (
        <Button
            variant={variant}
            size={size}
            disabled={isDisabled || loading}
            style={styles}
            className={classList}
            onClick={(e) => onClickHandler(e)}
        >
            {loading ? loadingText : title}
        </Button>
    );
};

export const IconClickButton = ({
    variant = "none",
    icon,
    size = "md",
    isDisabled = false,
    styles = {},
    width = "",
    height = "",
    classes = "",
    onClickHandler,
    isRounded = true,
    ...props
}) => {
    const classList = `${isRounded ? `${classes} rounded-circle` : classes} max-w-content max-h-content icon-btn-sm-p`;
    return (
        <Button
            variant={variant}
            size={size}
            disabled={isDisabled}
            style={styles}
            className={classList}
            onClick={(e) => onClickHandler(e)}
        >
            {icon}
        </Button>
    );
};

export default ClickButton;
