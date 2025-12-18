import React from "react";
import studentFace from "../../../../assets/student_face_2.svg"

function StudentPerformance() {
  return (
    <div className="bg-[#514CF105] rounded-2xl p-4 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center text-white">
          <studentFace/>
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
