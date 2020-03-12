import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutLanding.scss";

export default function AboutLanding() {
  return (
    <div className="landing-about">
      <section>
        <h3>About Us</h3>
        <p>
          We like rodeos and turtles and metal and wood and trucks and beer
          other stuff that I'm just trying to fill the page with. We have dogs
          and a newborn. We are here to serve you. My turtles spurs are the bomb
          and you know you want them. Enough words now. Buy my shit.
        </p>
        <p>
          We like rodeos and turtles and metal and wood and trucks and beer
          other stuff that I'm just trying to fill the page with. We have dogs
          and a newborn. We are here to serve you. My turtles spurs are the bomb
          and you know you want them. Enough words now. Buy my shit.
        </p>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <h4>Learn more</h4>
        </NavLink>
      </section>
      <img src="http://www.indywrestlers.net/indynet/wp-content/uploads/2011/06/Johnny-Meadows.jpg" />
    </div>
  );
}
