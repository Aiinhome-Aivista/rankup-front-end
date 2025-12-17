import React from "react";
import { ArrowRight } from "lucide-react";

function UpcomingTest() {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 h-36 md:h-40 lg:h-44 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center flex-1">
        <span className="text-[#514BF2] text-5xl font-bold mb-2">03</span>
        <span className="text-gray-500 font-medium text-sm">Upcoming Test</span>
      </div>

      <div className="flex justify-between items-center border-t border-gray-100 pt-4">
        <div className="flex flex-col">
          <span className="text-[#514BF2] font-bold text-lg leading-none">
            07
          </span>
          <span className="text-gray-400 text-[10px]">Review Pending</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#F3F4FF] flex items-center justify-center text-[#514BF2] cursor-pointer hover:bg-[#E0E7FF] transition-colors">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

export default UpcomingTest;
