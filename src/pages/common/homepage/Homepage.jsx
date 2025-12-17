import React from "react";
import "../../../style/homepage.css";
import TopSection from "./ui/TopSection.jsx";
import MiddleSection from "./ui/MiddleSection.jsx";
import Footer from "./ui/Footer.jsx";
import ParallaxLanding from "./parallax/ParallaxLanding.jsx";

function Homepage() {
  return (
    <div className="flex flex-col w-full h-full">
    <ParallaxLanding />
    </div>
  );
}

export default Homepage;
