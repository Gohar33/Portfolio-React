import React from "react";
import Cards from "./Cards";
import About from "./About";
import Skills from "./Skills";

import "./MiddlePart.css";

export default function MiddlePart() {
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
