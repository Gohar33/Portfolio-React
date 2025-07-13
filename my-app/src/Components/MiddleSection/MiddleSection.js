import React from "react";
import Cards from "../Cards/Cards";
import About from "../About/About";
import Skills from "../Skills/Skills";

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
