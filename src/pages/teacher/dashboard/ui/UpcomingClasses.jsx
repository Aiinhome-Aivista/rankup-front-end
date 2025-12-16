import React from "react";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";

function UpcomingClasses() {
  const classes = [
    { id: "7A", time: "10:00", subject: "Mathematics", active: true },
    { id: "8B", time: "12:30", subject: "Science", active: false },
    { id: "6C", time: "14:00", subject: "Physics", active: false },
  ];

  return (
    <div className="bg-[#514BF2] rounded-3xl p-6 text-white w-full h-[200px] relative overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 z-10">
        <h3 className="font-semibold text-lg">Upcoming Classes | Today</h3>
        <div className="flex gap-2">
          <ChevronLeft
            size={20}
            className="cursor-pointer opacity-70 hover:opacity-100"
          />
          <ChevronRight
            size={20}
            className="cursor-pointer opacity-70 hover:opacity-100"
          />
        </div>
      </div>

      {/* Content - Timeline */}
      <div className="flex-1 flex items-center justify-between px-2 z-10">
        <Sun className="opacity-50" size={24} />

        {classes.map((cls, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 transition-all duration-300 ${
              cls.active ? "scale-110" : "opacity-60 scale-90"
            }`}
          >
            <div
              className={`
                            w-20 h-20 rounded-2xl flex flex-col justify-center items-center backdrop-blur-sm
                            ${
                              cls.active
                                ? "bg-white/20 border-2 border-white/30 shadow-lg"
                                : "bg-white/5 border border-white/10"
                            }
                        `}
            >
              <span className="text-xl font-bold">{cls.id}</span>
              <span className="text-[10px] font-medium">{cls.time}</span>
              <span className="text-[9px] uppercase tracking-wide opacity-80">
                {cls.subject}
              </span>
            </div>
          </div>
        ))}

        <Moon className="opacity-50" size={24} />
      </div>

      {/* Bottom Progress/Time indicator */}
      <div className="mt-4 flex items-center justify-center z-10">
        <div className="bg-white/20 px-4 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/10">
          10:00
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 rounded-full blur-[60px] opacity-50"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-[60px] opacity-30"></div>
    </div>
  );
}

export default UpcomingClasses;
