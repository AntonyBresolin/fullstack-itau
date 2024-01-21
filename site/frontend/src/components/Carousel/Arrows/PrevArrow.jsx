export default function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ ...style, display: "block", zIndex: "1", left: "10px", top: "60%" }}

            onClick={onClick}
        />
    );
}