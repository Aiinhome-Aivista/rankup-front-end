import React, { useState } from "react";

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeItem, setActiveItem] = useState("dashboard");

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    const mainNavItems = [
        { id: "dashboard", icon: "dashboard", label: "Dashboard" },
        { id: "assessment", icon: "assignment", label: "Assessment" },
        { id: "classes", icon: "table_restaurant", label: "Classes" },
        { id: "student", icon: "school", label: "Student" },
        { id: "analytics", icon: "analytics", label: "Analytics" },
    ];

    const collapsedNavItems = [
        { id: "dashboard", icon: "dashboard" },
        { id: "classes", icon: "table_restaurant" },
        { id: "assessment", icon: "assignment" },
        { id: "reports", icon: "description" },
        { id: "student", icon: "person" },
        { id: "settings", icon: "settings" },
        { id: "favorites", icon: "star" },
    ];

    return (
        <>
            {/* Container for both sidebars - slides together */}
            <div
                className={`fixed left-0 top-0 h-screen z-50 transition-transform duration-300 ease-in-out flex ${isExpanded ? 'translate-x-0' : '-translate-x-80'
                    }`}
            >
                {/* Main Expanded Sidebar */}
                <div className="w-80 h-full bg-[#EBEAFF] shadow-2xl">
                    <div className="h-full flex flex-col p-6">
                        {/* User Profile Section */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#5046E5] flex items-center justify-center">
                                <span className="material-icons text-white text-2xl">person</span>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-bold text-base leading-tight">Dr. Anna Viteret</h3>
                                <p className="text-gray-600 text-xs">ZEMS world Academy, DUBAI</p>
                            </div>
                        </div>

                        {/* Navigation Grid */}
                        <div className="flex flex-col gap-4 flex-1">
                            {/* First Row - 2 cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {mainNavItems.slice(0, 2).map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveItem(item.id)}
                                        className={`
                      relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[100px]
                      ${activeItem === item.id
                                                ? "bg-[#5046E5] text-white shadow-lg"
                                                : "bg-white/80 text-[#5046E5] hover:bg-white border border-purple-200"
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
                      relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[100px]
                      ${activeItem === item.id
                                                ? "bg-[#5046E5] text-white shadow-lg"
                                                : "bg-white/80 text-[#5046E5] hover:bg-white border border-purple-200"
                                            }
                    `}
                                    >
                                        <span className="material-icons text-4xl">{item.icon}</span>
                                        <span className="font-semibold text-sm">{item.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Third Row - Single card */}
                            {mainNavItems.slice(4, 5).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveItem(item.id)}
                                    className={`
                    relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[100px]
                    ${activeItem === item.id
                                            ? "bg-[#5046E5] text-white shadow-lg"
                                            : "bg-white/80 text-[#5046E5] hover:bg-white border border-purple-200"
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

                {/* Collapsed Sidebar - Attached to right edge of expanded sidebar */}
                <div className="absolute -right-14 top-1/2 -translate-y-1/2 w-14">
                    <div className="bg-[#EBEAFF] rounded-r-[35px] py-3 shadow-lg">
                        {/* Toggle Button / Logo */}
                        <button
                            onClick={toggleSidebar}
                            className="flex items-center justify-center w-full mb-2"
                        >
                            <div className="w-8 h-8 bg-[#5046E5] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md hover:scale-110 transition-transform">
                                R
                            </div>
                        </button>

                        {/* Navigation Icons */}
                        <div className="flex flex-col gap-1.5 px-1.5">
                            {collapsedNavItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveItem(item.id);
                                        if (!isExpanded) setIsExpanded(true);
                                    }}
                                    className={`
                    flex items-center justify-center transition-all duration-200 w-10 h-10 rounded-lg mx-auto
                    ${activeItem === item.id
                                            ? "bg-[#5046E5] text-white"
                                            : "text-[#7C7CFF] hover:text-[#5046E5]"
                                        }
                  `}
                                >
                                    <span className="material-icons text-base">{item.icon}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay to close sidebar when clicking outside */}
            {isExpanded && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}

export default Sidebar;
