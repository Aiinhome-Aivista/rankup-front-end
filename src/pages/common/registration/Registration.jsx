import React, { useState } from "react";
import vector2 from "../../../assets/Vector-2-login.svg";
import vector3 from "../../../assets/Vector-3-login.svg";
import vector4 from "../../../assets/Vector-4-login.svg";
import vector5 from "../../../assets/Vector-5-login.svg";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Slider from "@mui/material/Slider";
import { Dropdown } from "primereact/dropdown";

const Registration = () => {
  const [activeTab, setActiveTab] = useState("individual");
  const [instituteStudents, setInstituteStudents] = useState(100);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedInstituteType, setSelectedInstituteType] = useState(null);

  const roles = [
    { label: "Student", value: "student" },
    { label: "Teacher", value: "teacher" },
    { label: "Other", value: "other" },
  ];

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const instituteTypes = [
    { label: "School", value: "school" },
    { label: "College", value: "college" },
    { label: "University", value: "university" },
    { label: "Coaching Center", value: "coaching" },
  ];

  const handleSliderChange = (event, newValue) => {
    setInstituteStudents(newValue);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#A1AEF2] font-sans">
      {/* Top Left Branding */}
      <div className="absolute top-8 left-10 z-20 text-white text-xl font-bold tracking-wide">
        <span className="opacity-80">Ai</span>inhome |{" "}
        <span className="opacity-80">IG</span>
      </div>

      {/* Wave Background */}
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-110 left-0 w-full z-5 overflow-hidden">
          <img src={vector5} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute top-40 left-0 w-[120%] z-3">
          <img src={vector3} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute top-15 -left-1 w-full z-2">
          <img src={vector2} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute top-40 left-4 w-[110%] z-4">
          <img src={vector4} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* Registration Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-lg lg:max-w-xl px-4 py-8">
        <div className="backdrop-blur-lg bg-white/10 border border-white rounded-3xl p-8 shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar">
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="text-3xl font-bold mb-2">Register</h1>
            <p className="text-sm md:text-base opacity-90 mb-6 font-light">
              Customize Every View. Empower Every Decision.
            </p>

            {/* Tab Switcher */}
            <div className="flex bg-white/20 rounded-lg p-1 mb-8">
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all duration-300 ${
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
                className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all duration-300 ${
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
            <div className="w-90 space-y-4">
              {activeTab === "individual" ? (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative text-left">
                    <label className="block text-xs mb-1 ml-1 font-bold opacity-90">
                      I am a...
                    </label>
                    <Dropdown
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.value)}
                      options={roles}
                      optionLabel="label"
                      placeholder="Select your role"
                      className="w-full text-left"
                      pt={{
                        root: {
                          className:
                            "!bg-white/5 !border !border-white/20 !rounded-xl overflow-hidden",
                        },
                        input: {
                          className:
                            "!text-white p-3 !placeholder-gray-200 font-sans",
                        },
                        trigger: {
                          className:
                            "!text-white/70 w-12 flex items-center justify-center",
                        },
                        panel: {
                          className:
                            "!bg-white/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl",
                        },
                        item: {
                          className:
                            "hover:bg-indigo-50 text-gray-800 p-2 text-sm",
                        },
                      }}
                    />
                  </div>
                  <div className="relative text-left">
                    <Dropdown
                      value={selectedGender}
                      onChange={(e) => setSelectedGender(e.value)}
                      options={genders}
                      optionLabel="label"
                      placeholder="Select your gender"
                      className="w-full text-left"
                      pt={{
                        root: {
                          className:
                            "!bg-white/5 !border !border-white/20 !rounded-xl overflow-hidden",
                        },
                        input: {
                          className:
                            "!text-white p-3 !placeholder-gray-200 font-sans",
                        },
                        trigger: {
                          className:
                            "!text-white/70 w-12 flex items-center justify-center",
                        },
                        panel: {
                          className:
                            "!bg-white/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl",
                        },
                        item: {
                          className:
                            "hover:bg-indigo-50 text-gray-800 p-2 text-sm",
                        },
                      }}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <button className="w-full py-3 mt-4 bg-white/80 hover:bg-white text-indigo-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                    Create Account
                  </button>
                </>
              ) : (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Institute Name"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Institute Website"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative text-left">
                    <Dropdown
                      value={selectedInstituteType}
                      onChange={(e) => setSelectedInstituteType(e.value)}
                      options={instituteTypes}
                      optionLabel="label"
                      placeholder="Institute Type"
                      className="w-full text-left"
                      pt={{
                        root: {
                          className:
                            "!bg-white/5 !border !border-white/20 !rounded-xl overflow-hidden",
                        },
                        input: {
                          className:
                            "!text-white p-3 !placeholder-gray-200 font-sans",
                        },
                        trigger: {
                          className:
                            "!text-white/70 w-12 flex items-center justify-center",
                        },
                        panel: {
                          className:
                            "!bg-white/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl",
                        },
                        item: {
                          className:
                            "hover:bg-indigo-50 text-gray-800 p-2 text-sm",
                        },
                      }}
                    />
                  </div>

                  {/* Slider Section */}
                  <div className="px-1 py-1">
                    <div className="flex justify-between text-xs text-white opacity-90 mb-2">
                      <span>Number of Students</span>
                      <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">
                        {instituteStudents}+ Students
                      </span>
                    </div>
                    <Slider
                      size="small"
                      defaultValue={100}
                      min={0}
                      max={5000}
                      step={50}
                      value={instituteStudents}
                      onChange={handleSliderChange}
                      sx={{
                        color: "white",
                        "& .MuiSlider-thumb": {
                          backgroundColor: "white",
                        },
                        "& .MuiSlider-rail": {
                          opacity: 0.3,
                          backgroundColor: "white",
                        },
                      }}
                    />
                    <div className="flex justify-between text-[10px] text-white/60 -mt-1">
                      <span>&lt;100</span>
                      <span>1,000</span>
                      <span>2,500</span>
                      <span>5,000+</span>
                    </div>
                  </div>

                  {/* Administrator Divider */}
                  <div className="relative flex py-2 items-center">
                    <div className="grow border-t border-white/20"></div>
                    <span className="shrink-0 mx-4 text-white p-1 text-xs font-bold uppercase tracking-widest opacity-80">
                      Administrator
                    </span>
                    <div className="grow border-t border-white/20"></div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Admin Full Name"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Admin Email"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="phone"
                      placeholder="Admin Phone"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Admin Password"
                      className="w-full px-5 py-3 bg-transparent border! border-[#D9D9D9]! rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300"
                    />
                  </div>

                  <button className="w-full py-3 mt-4 bg-white/80 hover:bg-white text-indigo-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                    Register Institute
                  </button>
                </>
              )}

              <div className="mt-6 text-xs md:text-sm text-center opacity-80">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-bold text-[#514CF1] hover:underline"
                >
                  Login here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
