import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.scss";

const navigationItems = props => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/about">About Us</NavigationItem>
    <NavigationItem link="/gear">
      Goods & Gear <i className="fas fa-caret-down"></i>
    </NavigationItem>
    <NavigationItem link="/gallery">Gallery</NavigationItem>
    <NavigationItem link="/turtlespurs">Turtle Spurs</NavigationItem>
    <NavigationItem link="/contact">Contact Us</NavigationItem>
  </ul>
);

export default navigationItems;
