import React, { useState } from "react";
import Aux from "../Auxillary/Auxillary";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import "./AppLayout.scss";

const AppLayout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <Aux>
      <Toolbar drawerToggleClick={sideDrawerToggleHandler} />
      <SideDrawer
        closed={sideDrawerClosedHandler}
        open={sideDrawerIsVisible}
        drawerToggleClick={sideDrawerToggleHandler}
      />
      <main className="main">{props.children}</main>
    </Aux>
  );
};

export default AppLayout;
