import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function RadialProgress({ value, label, color }) {
  const data = [
    { name: "Completed", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="h-12 w-12 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={10}
              outerRadius={14}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              <Cell key="completed" fill={color} cornerRadius={8} />
              <Cell key="remaining" fill="#E2E8F0" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <span className="text-[10px] text-gray-500 font-medium mt-1">
        {label}
      </span>
    </div>
  );
}

function StrengthsWeaknesses() {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 h-36 md:h-40 lg:h-44 flex flex-col">
      <h3 className="text-[#514BF2] font-semibold text-sm mb-6">
        Strengths & Weaknesses Heatmap
      </h3>

      <div className="flex justify-between items-center px-2">
        <RadialProgress value={20} label="Algebra" color="#E2E8F0" />{" "}
        {/* Low - Gray/Light */}
        <RadialProgress value={70} label="Fractions" color="#A2AEF2" />{" "}
        {/* Medium - Light Blue */}
        <RadialProgress
          value={85}
          label="Force & Motion"
          color="#514BF2"
        />{" "}
        {/* High - Dark Blue */}
      </div>

      <div className="flex justify-center gap-4 mt-auto text-[10px] text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></div> Low
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#A2AEF2]"></div> Medium
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#514BF2]"></div> High
        </div>
      </div>
    </div>
  );
}

export default StrengthsWeaknesses;
