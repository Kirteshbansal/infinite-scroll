import Image from "react-bootstrap/Image";

const Img = ({ src, width, height, classes = "", alt = "", lazy = false, ...props }) => {
    return (
        <img src={src} width={width} height={height} className={classes} alt={alt} loading={lazy ? "lazy" : "eager"} />
    );
};

export const CustomImage = ({
    src,
    width,
    height,
    classes = "",
    alt = "",
    rounded = false,
    roundedCircle = false,
    thumbnail = false,
    fluid = false,
    ...props
}) => {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            className={classes}
            alt={alt}
            rounded={rounded}
            roundedCircle={roundedCircle}
            fluid={fluid}
            thumbnail={thumbnail}
        />
    );
};

export default Img;
