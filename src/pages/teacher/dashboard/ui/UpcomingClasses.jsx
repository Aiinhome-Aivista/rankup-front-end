import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";

function UpcomingClasses() {
  const [startIndex, setStartIndex] = useState(0);

  const classes = [
    { id: "7A", time: "10:00", subject: "Mathematics", active: true },
    { id: "8B", time: "12:30", subject: "Science", active: false },
    { id: "6C", time: "14:00", subject: "Physics", active: false },
    { id: "1C", time: "16:00", subject: "Biology", active: false },
    { id: "9C", time: "16:00", subject: "Computer Science", active: false },
  ];

  const visibleClasses = classes.slice(startIndex, startIndex + 3);
  const activeClass = classes.find((cls) => cls.active);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 3 < classes.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="relative bg-[#514CF1] rounded-3xl p-4 text-white w-full h-36 md:h-40 lg:h-44 relative overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center z-10">
        <h3 className="font-bold text-sm">Upcoming Classes | Today</h3>
        <div className="flex gap-2 text-[#A1AEF2]">
          <ChevronLeft
            size={20}
            className={`cursor-pointer transition-opacity ${
              startIndex === 0 ? "opacity-40 cursor-not-allowed" : "opacity-80 hover:opacity-90"
            }`}
            onClick={handlePrev}
          />
          <ChevronRight
            size={20}
            className={`cursor-pointer transition-opacity ${
              startIndex + 3 >= classes.length
                ? "opacity-40 cursor-not-allowed"
                : "opacity-80 hover:opacity-90"
            }`}
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Content - Timeline */}
      <div className="flex-1 flex items-center justify-between px-2 z-10">
        <Sun className="opacity-50" size={25} fill="currentColor" />

        {visibleClasses.map((cls) => (
          <div
            key={cls.id}
            className="flex flex-col items-center gap-2 transition-all duration-300"
          >
            <div
              className={`w-18 h-18 rounded-2xl flex flex-col justify-center items-center backdrop-blur-sm ${
                cls.active
                  ? "bg-[#A1AEF2B2] text-[#FFFFFF]"
                  : "bg-[#FFFFFF0D] text-[#FFFFFF80]"
              }`}
            >
              <span className="text-xs font-bold pb-1">{cls.id}</span>
              <span className="text-[0.5rem] font-bold">{cls.time}</span>
              <span className="text-[0.5rem] font-bold w-full truncate text-center px-1">
                {cls.subject}
              </span>
            </div>
          </div>
        ))}

        <Moon
          className="opacity-50 text-[#A1AEF2]"
          size={25}
          fill="currentColor"
        />
      </div>

      {/* Bottom Progress/Time indicator */}
      <div className="flex items-center justify-center z-10">
        <div className="opacity-0">blank</div>
      </div>
      <div className="absolute bottom-0 bg-[#A1AEF2B2] translate-x-7.5 text-xs text-white text-center rounded-t-2xl z-10 w-24 py-1">
        {activeClass ? activeClass.time : "--:--"}
      </div>
    </div>
  );
}

export default UpcomingClasses;
