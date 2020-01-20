import React from "react";
import landingBackground from "../../assets/Plasma-Cutter_5";
import "./Landing.scss";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-main">
        <img src={landingBackground}></img>
        <h2>Rodeo Turtle, LLC</h2>
        {/* <h1>HOWDY HOWDY LETS GET ROWDY!</h1> */}
      </div>
      <div className="landing-about">
        <section>
          <h3>About Us</h3>
          <p>
            We like rodeos and turtles and metal and wood and trucks and beer
            other stuff that I'm just trying to fill the page with. We have dogs
            and a newborn. We are here to serve you. My turtles spurs are the
            bomb and you know you want them. Enough words now. Buy my shit.
          </p>
          {/* <br /> */}
          <p>
            We like rodeos and turtles and metal and wood and trucks and beer
            other stuff that I'm just trying to fill the page with. We have dogs
            and a newborn. We are here to serve you. My turtles spurs are the
            bomb and you know you want them. Enough words now. Buy my shit.
          </p>

          <a href="/about">Learn more</a>
        </section>
        <img src="http://www.indywrestlers.net/indynet/wp-content/uploads/2011/06/Johnny-Meadows.jpg" />
      </div>
    </div>
  );
}
