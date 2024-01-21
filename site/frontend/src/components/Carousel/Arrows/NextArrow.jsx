export default function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px", zIndex: "1", top: "60%" }}
            onClick={onClick}
        />
    );
}