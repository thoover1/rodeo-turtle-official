import React from "react";
import crane from "../../assets/Crane.jpg";
// import YouTube from 'react-youtube';
import "./TurtleSpurs.scss";

// const opts = {
//     height: '390',
//     width: '640',
//     playerVars: { https://www.youtube.com/watch?v=Wsm3WuOgSmc autoplay: 1}
//   };

export default function TurtleSpurs() {
  return (
    <div className="TurtleSpurs">
      <div className="banner">
        <h1>Patented Turtle Spurs</h1>
      </div>
      <div className="needless">
        <img src={crane} />
        <p>Why rent or buy a crane when you could easily use a Turtle Spur?</p>
      </div>
      <div className="description">
        <h3>See our Turtle Spur in Action!</h3>
        <iframe
          width="80%"
          height="600px"
          allowfullscreen="0"
          src="https://www.youtube.com/embed/Wsm3WuOgSmc?controls=1?autoplay=1?rel=0"
        ></iframe>
      </div>
      <div className="reasons">
        <div className="list-of-reasons">
          <h3>Why Turtle Spurs?</h3>
          <ul>
            <li>Reason 1</li>
            <li>Reason 2</li>
            <li>Reason 3</li>
            <li>Reason 4</li>
            <li>Reason 5</li>
          </ul>
          <p>
            What Are you Waiting For?!?! An invitation??!?! Buy some Turtle
            Spurs ya dingus!!!
          </p>
        </div>
      </div>
    </div>
  );
}
