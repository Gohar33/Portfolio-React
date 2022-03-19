import React from "react";
import Navigation from "./Navigation";
import Title from "./Title";
// import Image from "./Image";

import "./UpperPart.css";

export default function UpperPart() {
  return (
    <div className="upper-part-container w-100">
      <Navigation />
      {/* <div className="d-flex justify-content-evenly mb-3 mt-3 size-direction"> */}
      <div>
        {/* <Image /> */}
        <Title />
      </div>
    </div>
  );
}
