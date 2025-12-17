import React, { useState } from "react";
import Faceicon from "../../assets/icons/face_2.svg";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const mainNavItems = [
    { id: "dashboard", icon: "bento", label: "Dashboard" },
    { id: "assessment", icon: "assignment", label: "Assessment" },
    { id: "classes", icon: "table_restaurant", label: "Classes" },
    { id: "student", icon: "face", label: "Student" },
    { id: "analytics", icon: "area_chart", label: "Analytics" },
  ];

  const collapsedNavItems = [
    { id: "student", icon: "face" },
    { id: "classes", icon: "table_restaurant" },
    { id: "dashboard", icon: "bento" },
    { id: "addnotes", icon: "note_add" },
    { id: "assessment", icon: "assignment" },
    { id: "persons", icon: "person_add" },
    { id: "analytics", icon: "area_chart" },
    { id: "library", icon: "library_add" },
    { id: "favorites", icon: "star" },
  ];

  return (
    <>
      {/* Container for both sidebars - slides together */}
      <div
        className={`fixed left-0 top-0 h-screen z-50 transition-transform duration-300 ease-in-out flex ${
          isExpanded ? "translate-x-0" : "-translate-x-80"
        }`}
      >
        {/* Main Expanded Sidebar */}
        <div className="w-80 h-full bg-[#514CF133] backdrop-blur-2xl">
          <div className="h-full flex flex-col ">
            {/* User Profile Section */}
            <div className="flex items-center gap-3 p-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-icons text-white  border-4 border-white rounded-full ">
                  person
                </span>
              </div>
              <div>
                <h3 className="text-white font-extrabold">Dr. Anna Viteret</h3>
                <p className="text-white text-xs font-medium">
                  ZEMS world Academy, DUBAI
                </p>
              </div>
            </div>

            <div className="w-full border-t border-white" />

            {/* Navigation Grid */}
            <div className="flex flex-col gap-4 flex-1 p-6">
              {/* First Row - 2 cards */}
              <div className="grid grid-cols-2 gap-4">
                {mainNavItems.slice(0, 2).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[100px] cursor-pointer 
                      ${
                        activeItem === item.id
                          ? "bg-[#514CF133] text-[#514CF1]  border border-[#514CF1]  shadow-[0_5px_10px_2px_rgba(81,76,241,0.2)]"
                          : "bg-[#514CF133] text-white hover:bg-[#514CF133] border border-[#514CF1]"
                      }
                    `}
                  >
                    <span className="material-icons text-4xl">{item.icon}</span>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Second Row - 2 cards */}
              <div className="grid grid-cols-2 gap-4">
                {mainNavItems.slice(2, 4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[100px] cursor-pointer
                      ${
                        activeItem === item.id
                          ? "bg-[#514CF133] text-[#514CF1] drop-shadow-lg border border-[#514CF1]"
                          : "bg-[#514CF133] text-white hover:bg-[#514CF133] border border-[#514CF1]"
                      }   
                    `}
                  >
                    <span className="material-icons text-4xl">{item.icon}</span>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Third Row - Single card */}
              <div className="grid grid-cols-2 gap-4">
                {mainNavItems.slice(4, 5).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`
                    relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[100px]
                    ${
                      activeItem === item.id
                        ? "bg-[#514CF133] text-[#514CF1] drop-shadow-lg border border-[#514CF1]"
                        : "bg-[#514CF133] text-white hover:bg-[#514CF133] border border-[#514CF1]"
                    }
                  `}
                  >
                    <span className="material-icons text-4xl">{item.icon}</span>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collapsed Sidebar - Attached to right edge of expanded sidebar */}
        <div className="absolute -right-9 top-1/2 -translate-y-1/2 w-9">
          <div className="bg-[#514CF133] backdrop-blur-2xl rounded-r-4xl shadow-lg">
            {/* Toggle Button / Logo */}
            <button
              onClick={toggleSidebar}
              className="flex items-center justify-center w-full mb-2"
            >
              {/* <div className="w-8 h-8  rounded-full flex items-center justify-center text-[#797CF1] text-sm font-bold shadow-md hover:scale-110 transition-transform">
                                <img src={Faceicon} alt="" />
                            </div> */}
            </button>

            {/* Navigation Icons */}
            <div className="flex flex-col gap-1.5">
              {collapsedNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.id);
                    if (!isExpanded) setIsExpanded(true);
                  }}
                  className="relative w-9 h-10 mx-auto flex items-center justify-center"
                >
                  {/* LEFT PILL INDICATOR */}
                  {activeItem === item.id && (
                    <span className="absolute -left-2 w-6 h-1 bg-[#5046E5] rotate-90 rounded-br-[10px] rounded-tl-[10px] z-0" />
                  )}

                  {/* ICON */}
                  <span
                    className={`relative z-10 material-icons text-base ${
                      activeItem === item.id
                        ? "text-[#5046E5]"
                        : "text-[#7C7CFF] hover:text-[#5046E5]"
                    }`}
                  >
                    {item.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/10 z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Sidebar;
