import React from "react";

/*
FIXME: Liquid stuff
{% assign background_format = "" %}
{% unless page.layout == "home" %}
	{% assign background_format = "slant" %}
{% endunless %}
*/

import bgImg from "../images/plant-691971_1280.jpg";

const BackgroundImage = ({ format = "" }) => (
  <img
    src={bgImg}
    className={`bg ${format}`}
    alt="background containing ivy vines growing over a wall"
  />
);

/*
{% unless page.layout == "home" %}
	<!-- Fix page legibility for browsers without clip-path -->
	<div id="clipless"></div>
{% endunless %}
*/

export default BackgroundImage;
