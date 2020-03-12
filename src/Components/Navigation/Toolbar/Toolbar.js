import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.scss";
import Logo from "../../../assets/logo.png";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { NavLink } from "react-router-dom";

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle click={props.drawerToggleClick} />
    <div className="img-holder">
      <NavLink to="/">
        <img src={Logo} alt="RodeoTurtle" />
      </NavLink>
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
