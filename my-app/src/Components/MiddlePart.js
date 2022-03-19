import React from "react";
import Cards from "./Cards";
import About from "./About";
import Skills from "./Skills";

import "./MiddlePart.css";

export default function MiddlePart() {
  return (
    <div className="middle-part-container">
      <h2 className="mt-5 mb-5 title">About</h2>
      <About />
      <Skills />
      <Cards />
    </div>
  );
}
