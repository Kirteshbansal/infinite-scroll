import { cloneElement, isValidElement } from "react";
export const InputBox = ({
    val,
    label = "",
    type = "text",
    onChangeHandler,
    styles = {},
    classes = "",
    placeHolder = "",
    flushed = false,
    ...props
}) => {
    return (
        <>
            {label && <label>{label}</label>}
            <input
                value={val}
                onChange={onChangeHandler}
                type={type}
                placeholder={placeHolder}
                style={styles}
                className={`${classes} ${flushed ? "input-flushed" : ""}`.trim()}
            />
        </>
    );
};

export const InputBoxWithIcon = ({
    val,
    label = "",
    type = "text",
    onChangeHandler,
    styles = {},
    classes = "",
    placeHolder = "",
    flushed = false,
    icon,
    iconProps = {},
    ...props
}) => {
    return (
        <div className="position-relative input-icon-box">
            <span>
                {isValidElement(icon)
                    ? cloneElement(icon, {
                          ...iconProps,
                          className: `${iconProps.className} position-absolute input-icon-box__icon`,
                      })
                    : null}
            </span>
            <InputBox
                val={val}
                onChangeHandler={onChangeHandler}
                type={type}
                placeholder={placeHolder}
                style={styles}
                flushed={flushed}
                classes={`${classes} input-icon-box__input`}
            />
        </div>
    );
};

export default InputBoxWithIcon;
