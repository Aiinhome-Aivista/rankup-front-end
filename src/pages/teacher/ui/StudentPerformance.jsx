import React from "react";

function StudentPerformance() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#514BF2] rounded-full flex items-center justify-center text-white">
          {/* Use an emoji or icon for the robot face */}
          <span className="text-sm">🤖</span>
        </div>
        <h3 className="text-[#514BF2] font-semibold text-sm">
          Student Performance
        </h3>
      </div>

      <div>
        <div className="text-[#514BF2] text-4xl font-bold">76%</div>
        <div className="text-[#514BF2] text-xs font-medium">Average Score</div>
        <div className="text-gray-400 text-[10px]">This Week</div>
      </div>

      <div className="space-y-4">
        <div>
          <span className="text-[#514BF2] text-sm font-semibold block mb-1">
            Strength
          </span>
          <p className="text-gray-500 text-sm">Algebra, Light</p>
        </div>
        <div>
          <span className="text-[#514BF2] text-sm font-semibold block mb-1">
            Weak Areas
          </span>
          <p className="text-gray-500 text-sm">Fractions</p>
        </div>
      </div>
    </div>
  );
}

export default StudentPerformance;
