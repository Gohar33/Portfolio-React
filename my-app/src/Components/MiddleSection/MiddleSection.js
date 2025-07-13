import React from "react";
import Cards from "../Cards";
import About from "../About/About";
import Skills from "../Skills";

import "./MiddleSection.css";

export default function MiddleSection() {
  return (
    <div className="middle-part-container">
      <h2 className="title" id="about">
        a bit <span className="color">about</span> me
      </h2>
      <About />
      <Skills />
      <Cards />
    </div>
  );
}
