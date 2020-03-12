import React from "react";
import Logo from "../../../assets/logo.png";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary/Auxillary";
import "./SideDrawer.scss";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <Backdrop
        show={props.open}
        click={(props.closed, props.drawerToggleClick)}
      />
      <div
        className={attachedClasses.join(" ")}
        onClick={(props.closed, props.drawerToggleClick)}
      >
        <img src={Logo} alt="" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
