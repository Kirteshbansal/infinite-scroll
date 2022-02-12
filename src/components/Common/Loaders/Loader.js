import Spinner from "react-bootstrap/Spinner";

const Loader = ({ type = "border", size = "sm", isCentered = true, classes = "", margin = "m-3" }) => {
    return (
        <div
            className={`d-flex align-items-center ${
                isCentered ? "justify-content-center" : "justify-content-start"
            } ${classes} ${margin}`}
        >
            <Spinner animation={type} size={size} />
            <span className={`d-inline-block mx-2 ${size === "sm" ? "fs-sm" : "fs-4"}`}>Loading...</span>
        </div>
    );
};

export default Loader;
