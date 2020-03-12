import React from "react";
import "./Landing.scss";
import AboutLanding from "./LandingComponents/AboutLanding/AboutLanding";
import GalleryLanding from "./LandingComponents/GalleryLanding/GalleryLanding";
import CarouselLanding from "./LandingComponents/CarouselLanding/CarouselLanding";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-main">
        <CarouselLanding />
        {/* <h2>Rodeo Turtle</h2> */}
      </div>
      <AboutLanding />
      <GalleryLanding />
    </div>
  );
}
