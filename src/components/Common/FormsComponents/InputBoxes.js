import { cloneElement, isValidElement } from "react";
import throttle from "../../../utils/functions/optimisationFunctions";

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
    inputClasses = "",
    classes = "",
    placeHolder = "",
    flushed = false,
    icon,
    iconProps = {},
    ...props
}) => {
    return (
        <div className={`position-relative input-icon-box ${classes}`}>
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
                classes={`${inputClasses} input-icon-box__input`}
            />
        </div>
    );
};

export const TextArea = ({
    placeHolder = "",
    label = "",
    inputClasses = "",
    labelClasses = "",
    hideScrollBar = true,
    onChangeHandler,
    hideBorder = false,
    autResize = true,
    delay = 200,
    ...props
}) => {
    let styleClasses = hideScrollBar ? `${inputClasses} hide-scrollbar ` : ` ${inputClasses}`;
    styleClasses = hideBorder ? `${styleClasses} border-0 outline-none` : styleClasses;

    const throttleFunc = throttle((e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }, delay);

    const addOnInput = autResize ? { onInput: throttleFunc } : {};

    return (
        <>
            {label && <label className={labelClasses}>Password</label>}
            <textarea
                className={`w-100 resize-inherit ${styleClasses}`}
                placeholder={placeHolder}
                onChange={onChangeHandler}
                {...addOnInput}
            />
        </>
    );
};

export default InputBoxWithIcon;
