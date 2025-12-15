import React, { useState } from "react";
import { Plus, Bell, ChevronRight, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RVector from "../../assets/R-Vector.svg";

function Header() {
  const [isNotificationsExpanded, setIsNotificationsExpanded] = useState(false);

  return (
    <div className="w-full h-20 flex justify-between items-center px-8 py-3 bg-[#514CF105]">
      {/* Left Side: Logo and Title */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full flex justify-center items-center">
          <img
            src={RVector}
            alt="Rank Up Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1
          className="text-2xl text-gray-800 font-medium"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Rank Up Academy
        </h1>
      </div>

      {/* Right Side: Actions and Profile */}
      <div className="flex items-center gap-6">
        {/* Create Assessment Button */}
        <button
          className="flex items-center gap-2 bg-[#514CF1] font-semibold text-white px-4 py-2
                   ring-6 ring-[#D9D9D9] rounded-full
                   hover:bg-[#514CF1] transition-colors cursor-pointer"
        >
          <Plus
            size={20}
            className="rounded-full border border-white font-semibold"
          />
          <span className="font-medium text-sm">Create Assessment</span>
        </button>

        {/* Notifications / Status Bar */}
        <div
          className="flex items-center gap-3 bg-[#D9D9D9] px-4 py-3 rounded-full cursor-pointer hover:bg-[#D9D9D9] transition-colors h-12"
          onClick={() => setIsNotificationsExpanded(!isNotificationsExpanded)}
        >
          <Bell size={20} className="text-gray-600" />

          <AnimatePresence mode="wait">
            {isNotificationsExpanded && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-1.5 px-2 border-l border-gray-300 ml-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex justify-center items-center text-[10px] text-white font-bold">
                    05
                  </div>
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex justify-center items-center text-[10px] text-gray-800 font-bold">
                    12
                  </div>
                  <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex justify-center items-center text-[10px] text-gray-600 font-bold">
                    17
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <ChevronRight
            size={18}
            className={`text-gray-500 transition-transform duration-300 ${
              isNotificationsExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Profile Icon */}
        <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition-colors">
          <User size={24} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Header;
