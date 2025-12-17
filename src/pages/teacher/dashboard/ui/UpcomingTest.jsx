import React from "react";
import { ArrowRight } from "lucide-react";

function UpcomingTest() {
  return (
    <div className="bg-[#514CF105] text-[#514BF2] rounded-2xl p-4 h-36 md:h-40 lg:h-44 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center flex-1">
        <span className=" text-4xl font-bold mb-2">03</span>
        <span className="font-bold text-sm">Upcoming Test</span>
      </div>

      <div className="flex justify-between items-center pt-4">
        <div className="flex flex-col">
          <span className="font-bold text-xs leading-none">
            07
          </span>
          <span className="text-xs">Review Pending</span>
        </div>
        <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:scale-105">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

export default UpcomingTest;
