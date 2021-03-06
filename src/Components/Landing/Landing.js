import React, { useState, useEffect } from "react";
import "./Landing.scss";
import AboutLanding from "./LandingComponents/AboutLanding/AboutLanding";
import GalleryLanding from "./LandingComponents/GalleryLanding/GalleryLanding";
import CarouselLanding from "./LandingComponents/CarouselLanding/CarouselLanding";
import Typist from "react-typist";

const Landing = () => {
  const [count, setCount] = useState(0);
  const [arrow, setArrow] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCount(1);
    }, 1000);
    setTimeout(() => {
      setArrow(<i class="fas fa-arrow-down"></i>);
    }, 4500);
    // setCount(true);
  }, [count]);

  return (
    <div className="landing-page">
      <div className="landing-main">
        <CarouselLanding />
        <h2>Rodeo Turtle</h2>
        {count ? (
          // include 'onTypingDone={() => setCount(false)}' after avgTypingDelay to make infite typing loop
          <Typist
            className="typing"
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: -1000 }}
            avgTypingDelay={100}
          >
            <span> Home of the Turtle Spur</span>
            {/* include content below to edit text as an animation */}
            {/* <Typist.Backspace count={11} delay={800} />
          <span>Custom Metal Design</span>
          <Typist.Backspace count={11} delay={800} />
          <span>Custom Wood Design</span> */}
          </Typist>
        ) : (
          ""
        )}
        {arrow}
      </div>
      <AboutLanding />
      <GalleryLanding />
    </div>
  );
};

export default Landing;
