import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-contents">
          <div className="header-left">
            <NavLink to="/">
              <img className="header-logo" src={logo} alt="logo" />
            </NavLink>
          </div>
          <span className="header-right">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              {/* <i class="fas fa-shopping-cart"></i> */}
            </ul>
          </span>
        </div>
      </div>
    );
  }
}
