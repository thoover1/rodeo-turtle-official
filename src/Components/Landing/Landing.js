import React, {useState, useEffect} from "react";
import "./Landing.scss";
import AboutLanding from "./LandingComponents/AboutLanding/AboutLanding";
import GalleryLanding from "./LandingComponents/GalleryLanding/GalleryLanding";
import CarouselLanding from "./LandingComponents/CarouselLanding/CarouselLanding";
import Typist from "react-typist";

const Landing = () => {
  const [count, setCount] = useState(true);

    useEffect(() => {
    setCount(true);
  }, [count]);

  return (
    <div className="landing-page">
      <div className="landing-main">
        <CarouselLanding />
        <h2>Rodeo Turtle</h2>
        {count ? (
          // include 'onTypingDone={() => setCount(false)}' after avgTypingDelay to make infite typing loop
        <Typist className='typing' avgTypingDelay={80} >
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
        <i class="fas fa-arrow-down"></i>
      </div>
      <AboutLanding />
      <GalleryLanding />
    </div>
  );
}

export default Landing;