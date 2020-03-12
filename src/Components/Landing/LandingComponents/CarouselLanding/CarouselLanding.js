import React, { useState } from "react";
import landingBackground from "../../../../assets/Plasma-Cutter_5";
import landingBackground2 from "../../../../assets/landingBackground2.jpg";
import landingBackground3 from "../../../../assets/landingBackground3.jpg";
import landingBackground4 from "../../../../assets/landingBackground4.jpg";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import "./CarouselLanding.scss";

export default function CarouselLanding() {
  return (
    <Carousel
      // arrows
      autoPlay={3000}
      animationSpeed={2000}
      infinite
      className="BrainhubCarousel"
    >
      <img className="CLImages" src={landingBackground} />
      <img className="CLImages" src={landingBackground3} />
      <img className="CLImages" src={landingBackground2} />
      <img className="CLImages" src={landingBackground4} />
      {/* <img src={imageThree} /> */}
      {/* <Dots /> */}
    </Carousel>
    // <div className="CarouselLanding">
    //   <img ClassName="CLImages" src={landingBackground}></img>
    //   <img ClassName="CLImages" src={landingBackground2}></img>
    // </div>
  );
}
