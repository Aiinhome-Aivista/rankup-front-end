import React from "react";
import codingImage from "../../../../assets/coding-a-website.svg";
import studying from "../../../../assets/student-studying.svg";
import fun from "../../../../assets/having-fun.svg";
import WaveBackground from "./WaveBackground";
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PublicIcon from '@mui/icons-material/Public';
import SpaIcon from '@mui/icons-material/Spa';

function TopSection() {
  return (
    <div className="relative w-full min-h-[140vh] bg-gradient-to-b from-purple-50 to-blue-50 overflow-hidden font-sans">
      {/* Main Content Container */}
      <div className="container mx-auto pt-32 pb-60 text-center relative z-10">

        {/* Typography */}
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-4 max-w-4xl mx-auto leading-tight">
          Nest Generation Assessment <br /> Platform For Every School
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16">
          Empower educator, engage students, and improve learning outcomes
        </p>

        {/* Floating Illustrations */}
        {/* Coding Girl - Left */}
        <div className="absolute left-10 top-32 hidden lg:block w-64 opacity-90 hover:scale-105 transition-transform duration-500">
          <img src={codingImage} alt="Design and code" className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Student Studying - Top Right */}
        <div className="absolute right-10 top-10 hidden lg:block w-72 opacity-90 hover:scale-105 transition-transform duration-500">
          <img src={studying} alt="Student studying" className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Having Fun - Mid Right (Lower) */}
        <div className="absolute right-20 top-96 hidden lg:block w-64 opacity-90 hover:scale-105 transition-transform duration-500">
          <img src={fun} alt="Students having fun" className="w-full h-auto drop-shadow-lg" />
        </div>
      </div>

      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <WaveBackground />
      </div>
    </div>
  );
}

export default TopSection;
