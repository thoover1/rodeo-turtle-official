import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="top header-main">
        <div className="header-contents">
          <div className="header-top-contents">
            <span className="header-left">
              <NavLink to="/">
                <img className="header-logo" src={logo} alt="logo" />
              </NavLink>
            </span>
            <nav className="header-right">
              {/* <ul>
                <p>
                  Call Now: <a href="tel:5555555555">555-555-5555</a>
                </p>
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Turtle Spurs</li>
                <a className="contact-nav" href="mailto:johnny@rodeoturtle.com">
                Email
                </a>
                {/* <i class="fas fa-shopping-cart"></i> 
              </ul> */}
              {/* use below option if wanting 'contact us' page */}
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li className="goods">
                  Goods & Gear
                  {/* <i class="fas fa-chevron-down"></i> */}
                  <i className="fas fa-caret-down"></i>
                </li>
                <li>Gallery</li>
                <li>Turtle Spurs</li>
                <li>Contact Us</li>
                {/* <i class="fas fa-shopping-cart"></i> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
