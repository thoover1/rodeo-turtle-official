import React from "react";
import location from "../../assets/location.png";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="container">
        <div className="contact-left">
          <div className="contact-title">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-info-page">
            <h3>
              Thank you for your interest in Rodeo Turtle. Please provide your
              contact details by completing this form and one of our
              representatives will be in touch with you.
            </h3>
          </div>
          <div className="contact-lines-page">
            <h3>(xxx) xxx - xxxx</h3>
            <h3>info@rodeoturtle.com</h3>
          </div>
          <div className="contact-hours-page">
            <h2>Hours of Operation</h2>
            <h3>Monday - Friday:</h3>
            <h3>9:00AM - 5:00PM</h3>
          </div>
          <img src={location} />
        </div>
        <div className="contact-right">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input
              type="tel"
              placeholder="Phone Number (Format: 123-456-7890)"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <input type="text" placeholder="Reason For Contacting" required />
            {/* <input
              className="message-field"
              type="text"
              placeholder="Type Your Message Here..."
              required
            /> */}
            <textarea
              className="message-field"
              placeholder="Type Your Message Here..."
              required
              autoFocus
            ></textarea>
            <button>Fire Away!</button>
          </form>
        </div>
      </div>
    </div>
  );
}
