import "./UpperPart.css";

export default function Image() {
  return (
    <div>
      <div className="dot"></div>
      <div className="dot-1"></div>
      <div>
        <img
          src="https://www.codeart.dk/globalassets/photos/gohar_photo.jpg?w=1200"
          alt="girl"
          className="img-fluid rounded-circle w-50 "
        />
      </div>
      <div className="dot-1"></div>
      <div className="dot-direction">
        <div className="dot-2"></div>
        <div className="dot-1"></div>
      </div>
    </div>
  );
}
