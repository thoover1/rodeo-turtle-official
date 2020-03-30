import React from "react";
import "./Landing.scss";
import AboutLanding from "./LandingComponents/AboutLanding/AboutLanding";
import GalleryLanding from "./LandingComponents/GalleryLanding/GalleryLanding";
import CarouselLanding from "./LandingComponents/CarouselLanding/CarouselLanding";

// const title = 'Rodeo Turtle';
// let i = 0;

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-main">
        <CarouselLanding />
        <h2>Rodeo Turtle</h2>
        <i class="fas fa-arrow-down"></i>
      </div>
      <AboutLanding />
      <GalleryLanding />
    </div>
  );
}
