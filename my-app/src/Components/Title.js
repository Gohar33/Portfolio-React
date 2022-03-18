import React from "react";
import "./UpperPart.css";

function Title() {
  return (
    <div>
      <div className="dot-direction">
        <div className="dot-3"></div>
        <div className="dot-1"></div>
      </div>
      <div className="dot-1"></div>
      <div className="ggg">
        <div>
          <img
            src="https://www.codeart.dk/globalassets/photos/gohar_photo.jpg?w=1200"
            alt="girl"
            // className="img-fluid rounded-circle w-50 "
            className=" rounded-circle "
          />
        </div>
        <div>
          <h1>Gohar Vardanyan</h1>
          <p className="hello">
            Hello, I’m Gohar, Frontent Developer with flair for UX/UI
          </p>
        </div>
      </div>
      <div className="dot-1"></div>
      <div className="dot-2"></div>
      <div className="dot-direction">
        <div className="dot-1"></div>
        <div className="dot-2"></div>
      </div>
      <div className="dot-direction">
        <div className="dot-3"></div>
        <div className="dot-1"></div>
      </div>
    </div>
  );
}

export default Title;
