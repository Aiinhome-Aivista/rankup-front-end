import React, { useState } from "react";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Create,
  Grade,
  Assignment,
  Send,
  Analytics,
  IntegrationInstructions,
  MonitorHeart,
  AutoAwesome,
  Person,
  Tour,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/icons/main-logo.svg";
import followTheSigns from "../../assets/icons/follow_the_signs.svg";
import inkPen from "../../assets/icons/ink_pen.svg";
import starRateHalf from "../../assets/icons/star_rate_half.svg";
import noteStack from "../../assets/icons/note_stack.svg";
import package2 from "../../assets/icons/package_2.svg";
import equalizer from "../../assets/icons/equalizer.svg";
import webhook from "../../assets/icons/webhook.svg";
import eyeTracking from "../../assets/icons/eye_tracking.svg";
import hotelClass from "../../assets/icons/hotel_class.svg";

function Navbar() {
  const navigate = useNavigate();
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("");

  const features = [
    {
      id: "Create",
      title: "Create",
      desc: "Reach Interactive Assessments",
      icon: inkPen,
    },
    {
      id: "Grade",
      title: "Grade",
      desc: "Grading Made Easier",
      icon: starRateHalf,
    },
    {
      id: "Paper Mode",
      title: "Paper Mode",
      desc: "Digitize Paper Assesments",
      icon: noteStack,
    },
    {
      id: "Deliver",
      title: "Deliver",
      desc: "Secure and Flexible",
      icon: package2,
    },
    {
      id: "Analyse",
      title: "Analyse",
      desc: "Actionable Insights",
      icon: equalizer,
    },
    {
      id: "Integrations",
      title: "Integrations",
      desc: "Use Your Go-To Tools",
      icon: webhook,
    },
    {
      id: "Monitor",
      title: "Monitor",
      desc: "Real-time Progress",
      icon: eyeTracking,
    },
    {
      id: "AI Assistant",
      title: "AI Assistant",
      desc: "Your Teaching Assistant",
      icon: hotelClass,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          absolute top-0 left-1/2 -translate-x-1/2
          bg-[#A2AEF2]/70 rounded-b-4xl rounded-t-none px-6 py-3 
          border-5 border-white border-t-0 shadow-lg shadow-[#514CF180]
          backdrop-blur-lg
          transition-all duration-500 ease-in-out overflow-hidden 
          ${isFeaturesOpen ? "max-h-[400px]" : "max-h-[65px]"}
          w-[calc(100%-2rem)] max-w-5xl
          z-50
        `}
        onMouseLeave={() => setIsFeaturesOpen(false)}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between h-10">
          {/* Left: Logo & Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            {/* Logo */}
            <img
              src={mainLogo}
              alt="RankUp Logo"
              className="w-10 h-10 object-contain"
            />

            {/* Links */}
            <div className="hidden md:flex items-center gap-6 text-[#5c6b9f] font-medium text-sm">
              <button
                onMouseEnter={() => setIsFeaturesOpen(true)}
                className="flex items-center gap-1 text-[#514BF2] cursor-pointer transition-colors outline-none"
              >
                Features
                {isFeaturesOpen ? (
                  <KeyboardArrowUp fontSize="small" />
                ) : (
                  <KeyboardArrowDown fontSize="small" />
                )}
              </button>
              <button className="flex items-center gap-1 text-[#514BF2] cursor-pointer transition-colors">
                Curriculum <KeyboardArrowDown fontSize="small" />
              </button>
              <button className="flex items-center gap-1 text-[#514BF2] cursor-pointer transition-colors">
                Resources <KeyboardArrowDown fontSize="small" />
              </button>
              <button className="flex items-center gap-1 text-[#514BF2] cursor-pointer transition-colors">
                Company <KeyboardArrowDown fontSize="small" />
              </button>
              <button className="flex items-center gap-1 text-[#514BF2] cursor-pointer transition-colors">
                Plans <KeyboardArrowDown fontSize="small" />
              </button>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 cursor-pointer rounded-xl text-[#4f46e5] font-semibold bg-gray-50 hover:bg-gray-200 transition-all active:scale-95 shadow-md border border-transparent hover:shadow-lg">
              {/* <Tour fontSize="small" /> */}
              <img src={followTheSigns} alt="" />
              Take a Tour
            </button>
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 px-3 py-1.5 cursor-pointer rounded-xl bg-[#514BF2] text-white font-semibold hover:bg-[#4338ca] transition-all active:scale-95 shadow-md hover:shadow-lg"
            >
              <Person fontSize="small" />
              Sign In
            </button>
          </div>
        </div>

        {/* Expanded Content: Features Grid */}
        <div
          className={`
          mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4
          transition-opacity duration-500 delay-100
          ${isFeaturesOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className="group relative flex items-start gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-500"
            >
              {/* Expanding Background Layer */}
              <div
                className={`
                  absolute bg-[#514CF133] border border-[#514CF1] transition-all duration-500 ease-in-out z-0
                  ${
                    activeFeature === feature.id
                      ? "top-0 left-0 w-full h-full rounded-2xl opacity-100"
                      : "top-3 left-3 w-[2.75rem] h-[2.75rem] rounded-xl opacity-100 group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:rounded-2xl"
                  }
                `}
              />

              {/* Icon Container (Transparent now, sits on top) */}
              <div
                className={`
                relative z-10 p-2.5 rounded-xl transition-all duration-500
                ${
                  activeFeature === feature.id
                    ? "text-[#514CF1]"
                    : "text-[#4f46e5]"
                }
              `}
              >
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 transition-colors duration-300">
                <h3
                  className={`
                  font-bold text-sm mb-0.5 transition-colors
                  ${
                    activeFeature === feature.id
                      ? "text-[#514CF1]"
                      : "text-[#1C1B1F] group-hover:text-[#4f46e5]"
                  }
                `}
                >
                  {feature.title}
                </h3>
                <p
                  className={`
                  text-xs font-medium transition-colors
                  ${
                    activeFeature === feature.id
                      ? "text-[#514CF1]"
                      : "text-[#1C1B1F] group-hover:text-[#4f46e5]"
                  }
                `}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
