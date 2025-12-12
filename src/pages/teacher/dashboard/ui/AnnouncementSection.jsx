import React from "react";
import { ArrowRight } from "lucide-react";

const announcements = [
  {
    title: "Annual Sports Meeting",
    desc: "Registration for the inter-house football tournament closes this Friday...",
    date: "Dec 28th",
    color: "bg-[#514BF2]", // Purple/Blue
    icon: "🏆",
  },
  {
    title: "Cultural Festival 'Harmony'",
    desc: "Preparations for the annual cultural fest are underway. Submit your class entries by...",
    date: "Dec 31st",
    color: "bg-blue-500", // Blue
    icon: "🎪",
  },
  {
    title: "Staff Monthly Meeting",
    desc: "Mandatory staff meeting in the main auditorium at 2:00 PM. Agenda includes...",
    date: "Jan 05th",
    color: "bg-indigo-400",
    icon: "👥",
  },
];

function AnnouncementCard({ item }) {
  return (
    <div className="min-w-[170px] bg-[#F7F8FF] rounded-xl p-2.5 flex flex-col gap-1.5 relative overflow-hidden group hover:shadow-md transition-all">
      {/* Header Image/Banner Area */}
      <div className="flex justify-between items-start">
        <div
          className={`w-6 h-6 rounded-lg ${item.color} flex items-center justify-center text-[10px] text-white shadow-sm`}
        >
          {item.icon}
        </div>
        <div
          className={`
                    absolute -top-3 -right-3 w-14 h-14 rounded-full opacity-10 ${item.color}
                 `}
        ></div>
        <span className="bg-white/90 backdrop-blur-sm px-1 py-0.5 rounded text-[7px] font-bold text-[#514BF2] z-10 shadow-sm border border-gray-100">
          {item.date}
        </span>
      </div>

      <div className="mt-1">
        <h4 className="font-bold text-[#514BF2] text-[10px] mb-0.5 line-clamp-1">
          {item.title}
        </h4>
        <p className="text-gray-500 text-[8px] leading-tight line-clamp-2">
          {item.desc}
        </p>
      </div>

      <div className="flex items-center gap-1 text-[#514BF2] text-[8px] font-bold cursor-pointer mt-auto opacity-80 hover:opacity-100 transition-opacity">
        DETAILS
        <ArrowRight size={8} />
      </div>
    </div>
  );
}

function AnnouncementSection() {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <h3 className="text-[#514BF2] font-semibold text-sm mb-4">
        Announcement
      </h3>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {announcements.map((item, index) => (
          <AnnouncementCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AnnouncementSection;
