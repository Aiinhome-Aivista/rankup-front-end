import React, { useState } from "react";
import vector2 from "../../../assets/Vector-2-login.svg";
import vector3 from "../../../assets/Vector-3-login.svg";
import vector4 from "../../../assets/Vector-4-login.svg";
import vector5 from "../../../assets/Vector-5-login.svg";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import IndividualRegistration from "./ui/IndividualRegistration";
import InstituteRegistration from "./ui/InstituteRegistration";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#A1AEF2] font-sans">
      {/* Top Left Branding */}
      <div className="absolute top-8 left-10 z-20 text-white text-xl font-bold tracking-wide">
        <span className="opacity-80">Ai</span>inhome |{" "}
        <span className="opacity-80">IG</span>
      </div>

      {/* Wave Background */}
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-95 left-0 w-full z-5 overflow-hidden">
          <img src={vector5} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute top-40 left-0 w-[120%] z-3">
          <img src={vector3} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute top-30 -left-1 w-full z-2">
          <img src={vector2} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute top-60 left-4 w-[110%] z-4">
          <img src={vector4} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* Registration Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-lg lg:max-w-xl px-4 py-8">
        <div className="backdrop-blur-lg bg-white/10 border border-white rounded-3xl p-8 shadow-2xl ">
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="text-3xl font-bold mb-2">Register</h1>
            <p className="text-sm md:text-base opacity-90 mb-6 font-light">
              Customize Every View. Empower Every Decision.
            </p>

            {/* Tab Switcher */}
            <div className="flex bg-white/20 rounded-lg p-1 mb-8">
              <button
                className={`flex items-center gap-2 cursor-pointer px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === "individual"
                    ? "bg-white/80 text-indigo-900 shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("individual")}
              >
                <PersonIcon fontSize="small" />
                <span className="font-semibold text-sm">Individual</span>
              </button>
              <button
                className={`flex items-center gap-2 cursor-pointer px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === "institute"
                    ? "bg-white/80 text-indigo-900 shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("institute")}
              >
                <ApartmentIcon fontSize="small" />
                <span className="font-semibold text-sm">Institute</span>
              </button>
            </div>

            {/* Forms */}
            <div className="w-90 space-y-4 overflow-y-auto max-h-[50vh] custom-scrollbar">
              {activeTab === "individual" ? (
                <IndividualRegistration />
              ) : (
                <InstituteRegistration />
              )}

              <div className="mt-6 text-xs md:text-sm text-center opacity-80">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="font-bold text-[#514CF1] cursor-pointer hover:underline"
                >
                  Login here
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
