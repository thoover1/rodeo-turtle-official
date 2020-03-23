import React from "react";
// import Logo from "../../assets/logo.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-title">
        <h1>HOWDY HOWDY LET'S GET ROWDY!</h1>
      </div>
      <div className="footer-contents">
        {/* <div className="footer-logo">
          <img src={Logo} alt="" />
        </div> */}
        <div className="footer-info">
          <ul>
            <li>
              <h1>Hours of Operation</h1>
            </li>
            <li>
              <h3>Monday - Friday:</h3>
            </li>
            <li>
              <h3>9:00AM - 5:00PM</h3>
            </li>
          </ul>
          <ul>
            <li>
              <h1>Location</h1>
            </li>
            <li>
              <h3>Windsor, CO</h3>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <ul>
            <li>
              <h1>Contact Us</h1>
            </li>
            <li>
              <h2>Rodeo Turtle, LLC</h2>
            </li>
            <li>
              <h3>Tel: (xxx) xxx-xxxx</h3>
            </li>
            <li>
              <h3>info@rodeoturtle.com</h3>
            </li>
          </ul>
          <h1>Follow Us</h1>
          <div className="media-icons">
            <a href="">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="">
              <i className="fab fa-youtube-square"></i>
            </a>
            <a href="">
              <i className="fab fa-pinterest-square"></i>
            </a>
          </div>
        </div>
        <div className="footer-newsletter">
          <h1>Newsletter</h1>
          <form>
            <h3>
              Stay up to date with all things Rodeo Turtle with updates sent
              directly to your inbox
            </h3>
            <div className="footer-form">
              <input placeholder="Enter your email address" />
              <button>SUBSCRIBE</button>
            </div>
          </form>
        </div>
        <a href="#top" className="footer-right">
          <div className="speech-bubble-ds">
            <p>
              <strong>Back to Top</strong>
            </p>
            <div className="speech-bubble-ds-arrow"></div>
          </div>
          <img src="https://pngimage.net/wp-content/uploads/2018/06/red-beard-png-.png" />
        </a>
      </div>
    </div>
  );
}
