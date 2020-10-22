import React from "react";
import bgImg from "../images/plant-691971_1280.jpg";

//FIXME: want a way to do classnames thats not ternaries...
const BackgroundImage = ({ slant }) => (
  <>
    <img
      src={bgImg}
      className={`bg ${slant ? "slant" : ""}`}
      alt="background containing ivy vines growing over a wall"
    />

    {/* Fix page legibility for browsers without clip-path */}
    {slant && <div id="clipless"></div>}
  </>
);

export default BackgroundImage;
