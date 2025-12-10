import React from "react";
import "../../../style/homepage.css";
import TopSection from "./ui/TopSection.jsx";
import MiddleSection from "./ui/MiddleSection.jsx";
import TopMiddleSection from "./ui/TopMiddleSection.jsx";
import Footer from "./ui/Footer.jsx";

function Homepage() {
  return (
    <div className="flex flex-col w-full h-full">
      <section className="bg-[#514CF133]">
        <TopSection />
      </section>
      <section>
        <TopMiddleSection />
      </section>
      <section>
        <MiddleSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Homepage;
