import React, { useState, useInterval } from "react";
import landingBackground from "../../../../assets/Plasma-Cutter_5";
import landingBackground2 from "../../../../assets/landingBackground2.jpg";
import landingBackground3 from "../../../../assets/landingBackground3.jpg";
import landingBackground4 from "../../../../assets/landingBackground4.jpg";
// import Carousel, { Dots } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import "./CarouselLanding.scss";

// can eventually link this to pull from API so images can constantly be uploaded (e.g. AWS S3 bucket, etc.)
const imageReel = [landingBackground, landingBackground2, landingBackground3, landingBackground4]

const CarouselLanding = () => {
  let [images, setImages] = useState(imageReel)

// use this method to iterate through imageReel to change background image via infinite loop
  // useInterval(() => {

  // }, 1000)

  return (
    // <Carousel
    //   // arrows
    //   autoPlay={5000}
    //   animationSpeed={2000}
    //   infinite
    //   // stopAutoPlayOnHover
    //   // dots
    //   className="BrainhubCarousel"
    // >
    //   <img className="CLImages" src={landingBackground} />
    //   <img className="CLImages" src={landingBackground3} />
    //   <img className="CLImages" src={landingBackground2} />
    //   <img className="CLImages" src={landingBackground4} />
    //   {/* <img src={imageThree} /> */}
    //   {/* <Dots /> */}
    // </Carousel>
    <div className="CarouselLanding">
      {/* <img ClassName="CLImages" src={landingBackground}></img> */}
      {/* <img ClassName="CLImages" src={landingBackground2}></img> */}
    </div>
  );
}

export default CarouselLanding;
