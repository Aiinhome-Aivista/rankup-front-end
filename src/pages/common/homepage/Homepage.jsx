import React, { useLayoutEffect } from "react";
import "../../../style/homepage.css";
import TopSection from "./ui/TopSection.jsx";
import MiddleSection from "./ui/MiddleSection.jsx";
import Footer from "./ui/Footer.jsx";
import ParallaxLanding from "./parallax/ParallaxLanding.jsx";

function Homepage() {
  useLayoutEffect(() => {
    // Multi-stage scroll to top to override any scroll restoration

    // Stage 1: Immediate scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Stage 2: Use requestAnimationFrame for next paint cycle
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    // Stage 3: Delayed fallback
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);

    // Stage 4: Additional safety net
    const timeoutId2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <ParallaxLanding />
    </div>
  );
}

export default Homepage;
