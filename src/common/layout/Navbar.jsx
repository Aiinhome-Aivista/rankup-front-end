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

function Navbar() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("");

  const features = [
    {
      id: "Create",
      title: "Create",
      desc: "Reach Interactive Assessments",
      icon: "ink_pen.svg",
    },
    {
      id: "Grade",
      title: "Grade",
      desc: "Grading Made Easier",
      icon: "star_rate_half.svg",
    },
    {
      id: "Paper Mode",
      title: "Paper Mode",
      desc: "Digitize Paper Assesments",
      icon: "note_stack.svg",
    },
    {
      id: "Deliver",
      title: "Deliver",
      desc: "Secure and Flexible",
      icon: "package_2.svg",
    },
    {
      id: "Analyse",
      title: "Analyse",
      desc: "Actionable Insights",
      icon: "equalizer.svg",
    },
    {
      id: "Integrations",
      title: "Integrations",
      desc: "Use Your Go-To Tools",
      icon: "webhook.svg",
    },
    {
      id: "Monitor",
      title: "Monitor",
      desc: "Real-time Progress",
      icon: "eye_tracking.svg",
    },
    {
      id: "AI Assistant",
      title: "AI Assistant",
      desc: "Your Teaching Assistant",
      icon: "hotel_class.svg",
    },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          absolute top-0 left-1/2 -translate-x-1/2
          bg-[#A2AEF2] rounded-b-4xl rounded-t-none px-6 py-5 shadow-lg 
          border-8 border-white border-t-0
          transition-all duration-500 ease-in-out overflow-hidden 
          ${isFeaturesOpen ? "max-h-[500px]" : "max-h-[90px]"}
          w-[calc(100%-2rem)] max-w-5xl
          z-50
        `}
        onMouseLeave={() => setIsFeaturesOpen(false)}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between h-12">
          {/* Left: Logo & Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <img
              src="/main-logo.svg"
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
            <button className="hidden md:flex items-center gap-2 px-4 py-2 cursor-pointer rounded-xl text-[#4f46e5] font-semibold bg-gray-50 hover:bg-gray-200 transition-all active:scale-95 shadow-md border border-transparent hover:shadow-lg">
              {/* <Tour fontSize="small" /> */}
              <img src="/follow_the_signs.svg" alt="" />
              Take a Tour
            </button>
            <button className="flex items-center gap-2 px-5 py-2 cursor-pointer rounded-xl bg-[#514BF2] text-white font-semibold hover:bg-[#4338ca] transition-all active:scale-95 shadow-md hover:shadow-lg">
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
              className={`
                group flex items-start gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300
                ${
                  activeFeature === feature.id
                    ? "bg-[#514CF133] border border-[#514CF1] shadow-lg "
                    : "hover:bg-[#514CF133] border hover:border-[#514CF1] border-transparent "
                }
              `}
            >
              <div
                className={`
                p-2.5 rounded-xl transition-colors duration-300
                ${
                  activeFeature === feature.id
                    ? "text-[#514CF1] "
                    : "bg-[#514CF133] text-[#4f46e5] border border-[#514CF1] shadow-md group-hover:bg-transparent group-hover:shadow-none group-hover:border-transparent"
                }
              `}
              >
                {/* {React.cloneElement(feature.icon, { fontSize: "medium" })} */}
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
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
