import React from "react";
import codingImage from "../../../../assets/coding-a-website.svg";
import studying from "../../../../assets/student-studying.svg";
import fun from "../../../../assets/having-fun.svg";
import wavyGraphic from "../../../../assets/home-wave.svg";

function TopSection() {
  return (
    <div className="flex flex-col">
      <section className="flex justify-between items-center">
        <img src={codingImage} alt="coding a website" />
        <div className="flex flex-col">
          <h1>Nest Generation Assessment Platform For Every School</h1>
          <p>
            Empower educator, engage students, and improve learning outcomes
          </p>
        </div>
        <div className="flex flex-col items-between">
          <img src={studying} alt="student studying" />
          <img src={fun} alt="having fun" />
        </div>
      </section>
      <section className="wave-bg h-20"></section>
    </div>
  );
}

export default TopSection;
