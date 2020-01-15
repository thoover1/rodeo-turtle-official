import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-contents">
          <div className="header-top-contents">
            <span className="header-left">
              <NavLink to="/">
                <img className="header-logo" src={logo} alt="logo" />
              </NavLink>
            </span>
            <nav className="header-right">
              <ul>
                <p>
                  Call Now: <a href="tel:3077608328">555-555-5555</a>
                </p>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Gallery</li>
                <li className="contact-nav">Email</li>
                {/* <i class="fas fa-shopping-cart"></i> */}
              </ul>
            </nav>
          </div>
          <div className="header-middle-contents">
            <span className="middle-contents">
              <h1>Rodeo Turtle, LLC</h1>
              <br />
              <br />
              <br />
              <h3>Premier Personalized And</h3>
              <br />
              <h3>Custom Metal Design</h3>
              {/* <br />
              <br />
              <br />
              <br />
              <br />
              <h3 className="header-spurs">Commercial Grade Turtle Spurs</h3> */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
