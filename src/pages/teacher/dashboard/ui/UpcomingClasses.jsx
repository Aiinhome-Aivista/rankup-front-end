import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SunIcon = ({ className, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41zm1.41-12.37c-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41z" />
  </svg>
);

const MoonIcon = ({ className, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
  </svg>
);

function UpcomingClasses() {
  const classes = [
    { id: "7A", time: "10:00", subject: "Mathematics", active: true },
    { id: "8B", time: "12:30", subject: "Science", active: false },
    { id: "6C", time: "14:00", subject: "Physics", active: false },
  ];

  return (
    <div className="bg-[#514CF1] rounded-2xl p-4 text-white w-full h-36 md:h-40 lg:h-44 relative overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 z-10">
        <h3 className="font-bold text-sm">Upcoming Classes | Today</h3>
        <div className="flex gap-2">
          <ChevronLeft
            size={20}
            className="cursor-pointer opacity-80 hover:opacity-90"
          />
          <ChevronRight
            size={20}
            className="cursor-pointer opacity-80 hover:opacity-90"
          />
        </div>
      </div>

      {/* Content - Timeline */}
      <div className="flex-1 flex items-center justify-between px-2 z-10">
        <SunIcon className="opacity-50" size={16} />

        {classes.map((cls, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 transition-all duration-300 ${
              cls.active ? "scale-110" : "opacity-60 scale-90"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-2xl flex flex-col justify-center items-center backdrop-blur-sm ${
                cls.active
                  ? "bg-white/20 border-2 border-white/30 shadow-lg"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              <span className="text-base font-bold">{cls.id}</span>
              <span className="text-[8px] font-medium">{cls.time}</span>
              <span className="text-[7px] uppercase tracking-wide opacity-80">
                {cls.subject}
              </span>
            </div>
          </div>
        ))}

        <MoonIcon className="opacity-50" size={16} />
      </div>

      {/* Bottom Progress/Time indicator */}
      <div className="mt-4 flex items-center justify-center z-10">
        <div className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-medium backdrop-blur-md border border-white/10">
          10:00
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500 rounded-full blur-[30px] opacity-50"></div>
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full blur-[30px] opacity-30"></div>
    </div>
  );
}

export default UpcomingClasses;
