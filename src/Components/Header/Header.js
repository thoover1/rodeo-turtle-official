import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = props => {
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
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li className="goods">
                Goods & Gear
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
};

export default Header;
