import React from "react";
import { NavLink } from "react-router-dom";
import "./GalleryLanding.scss";

export default function GalleryLanding() {
  return (
    <div className="landing-gallery">
      <h1>Gallery</h1>
      <section>
        <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <img src="https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/227577/pexels-photo-227577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <img src="https://images.pexels.com/photos/313773/pexels-photo-313773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <img src="https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/227577/pexels-photo-227577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </section>
      <NavLink to="/gallery">
        <p>More From Our Gallery</p>
      </NavLink>
    </div>
  );
}
