import React from "react";
import landingBackground from "../../assets/Plasma-Cutter_5";
import "./Landing.scss";

export default function Landing() {
  return (
    <div className="landing-page">
      <img src={landingBackground} className="landing-background"></img>
      <h1>HOWDY HOWDY LETS GET ROWDY!</h1>
    </div>
  );
}
