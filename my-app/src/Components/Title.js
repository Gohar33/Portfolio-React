import React from "react";
import "./UpperPart.css";

function Title() {
  return (
    <div>
      <div className="dot-direction">
        <div className="dot-3"></div>
      </div>

      <div className="dot-1"></div>
      <div className="dot-direction">
        <div className="dot-1"></div>
      </div>
      <div className="col-md-12 d-flex flex-row flex-wrap pb-5 pt-5">
        <div className="col-sm-5 d-flex justify-content-center">
          <img
            src="https://www.codeart.dk/globalassets/photos/gohar_photo.jpg?w=1200"
            alt="girl"
            className="image-fluid rounded-circle w-50 h-100 ms-5"
          />
        </div>
        <div className="col-sm-7 d-flex flex-column justify-content-center mb-5">
          <h1 className=" d-flex justify-content-center mt-5">
            Gohar Vardanyan
          </h1>
          <p className="hello mt-3 d-flex justify-content-center">
            Hello, I’m Gohar, Frontend Engineer with flair for UX/UI
          </p>
        </div>
      </div>
      <div className="dot-direction">
        <div className="dot-2"></div>
      </div>
      <div className="dot-direction">
        <div className="dot-1"></div>

        <div className="dot-3"></div>
      </div>

      {/* <div className="dot-direction">
        <div className="dot-2"></div>
        <div className="dot-1"></div>
      </div> */}
      <div className="dot-direction">
        <div className="dot-1"></div>
      </div>
    </div>
  );
}

export default Title;
