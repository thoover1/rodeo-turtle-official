import React from "react";
import landingBackground from "../../assets/Plasma-Cutter_5";
import "./Landing.scss";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-main">
        <img src={landingBackground}></img>
        <h2>Rodeo Turtle, LLC</h2>
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

      <div className="landing-gallery">
        <h1>Gallery</h1>
        <section>
          <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <img src="https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/227577/pexels-photo-227577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <img src="https://images.pexels.com/photos/313773/pexels-photo-313773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <img src="https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img src="https://images.pexels.com/photos/227577/pexels-photo-227577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </section>

        <a>More From Our Gallery</a>
      </div>
    </div>
  );
}
