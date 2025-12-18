import React, { useState, useEffect } from "react";
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
import ThemeToggle from "../ThemeToggle";

function Navbar() {
  const navigate = useNavigate();
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false);
        setIsFeaturesOpen(false); // Close features menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

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
    <div className="fixed top-0 left-0 w-full z-55 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          absolute left-1/2 -translate-x-1/2
          bg-app-text rounded-b-4xl rounded-t-none px-6 py-3 
          border-5 border-app-bg border-t-0 shadow-lg shadow-app-text/50
          backdrop-blur-lg
          transition-all duration-500 ease-in-out overflow-hidden 
          ${isFeaturesOpen ? "max-h-[400px]" : "max-h-[65px]"}
          ${isVisible ? "top-0 opacity-100" : "-top-32 opacity-0"}
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
            <div className="hidden md:flex items-center gap-6 text-app-text-muted font-medium text-sm">
              <button
                onMouseEnter={() => setIsFeaturesOpen(true)}
                className="flex items-center gap-1 text-app-text-primary cursor-pointer transition-colors outline-none hover:text-app-text-primary/80"
              >
                Features
                {isFeaturesOpen ? (
                  <KeyboardArrowUp fontSize="small" />
                ) : (
                  <KeyboardArrowDown fontSize="small" />
                )}
              </button>
              <button className="flex items-center gap-1 text-app-text-primary cursor-pointer transition-colors hover:text-app-text-primary/80">
                Curriculum <KeyboardArrowDown fontSize="small" />
              </button>
              <button className="flex items-center gap-1 text-app-text-primary cursor-pointer transition-colors hover:text-app-text-primary/80">
                Resources <KeyboardArrowDown fontSize="small" />
              </button>
              <button className="flex items-center gap-1 text-app-text-primary cursor-pointer transition-colors hover:text-app-text-primary/80">
                Company <KeyboardArrowDown fontSize="small" />
              </button>
              <button className="flex items-center gap-1 text-app-text-primary cursor-pointer transition-colors hover:text-app-text-primary/80">
                Plans <KeyboardArrowDown fontSize="small" />
              </button>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 cursor-pointer rounded-xl text-brand-primary font-semibold bg-brand-white hover:bg-muted transition-all active:scale-95 shadow-md border border-border hover:shadow-lg">
              {/* <Tour fontSize="small" /> */}
              <img src={followTheSigns} alt="" />
              Take a Tour
            </button>
            <ThemeToggle className="h-6 w-6" />
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 px-3 py-1.5 cursor-pointer rounded-xl bg-app-primary text-app-white font-semibold hover:bg-app-hover transition-all active:scale-95 shadow-md hover:shadow-lg"
            >
              <Person fontSize="small" />
              Sign In
            </button>
          </div>
        </div>

        {/* Expanded Content: Features Grid */}
        <div
          className={`
          mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 pb-2
          transition-opacity duration-500 delay-100
          ${isFeaturesOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className="group relative flex items-start gap-4 p-2 rounded-2xl cursor-pointer transition-all duration-500"
            >
              {/* Expanding Background Layer */}
              <div
                className={`
                  absolute bg-app-primary/20 border border-app-primary transition-all duration-500 ease-in-out z-0
                  ${
                    activeFeature === feature.id
                      ? "top-0 left-0 w-full h-full rounded-2xl opacity-100"
                      : "top-2 left-2 w-[2.75rem] h-[2.75rem] rounded-xl opacity-100 group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:rounded-2xl"
                  }
                `}
              />

              {/* Icon Container (Transparent now, sits on top) */}
              <div
                className={`
                relative z-10 p-2.5 rounded-xl transition-all duration-500
                ${
                  activeFeature === feature.id
                    ? "text-brand-primary"
                    : "text-brand-primary"
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
                      ? "text-brand-primary"
                      : "text-brand-dark group-hover:text-brand-primary"
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
                      ? "text-brand-primary"
                      : "text-brand-dark group-hover:text-brand-primary"
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
