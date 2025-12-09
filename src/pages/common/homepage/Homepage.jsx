import React from "react";
import "../../../style/homepage.css";
import TopSection from "./ui/TopSection.jsx";
import MiddleSection from "./ui/MiddleSection.jsx";

function Homepage() {
  return (
    <div className="flex flex-col w-full h-full">
      <section className="bg-[#514CF133]">
        <TopSection />
      </section>
      <section>
        <MiddleSection />
      </section>
      <footer></footer>
    </div>
  );
}

export default Homepage;
