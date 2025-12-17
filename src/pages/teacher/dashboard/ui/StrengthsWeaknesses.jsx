import React from "react";
import { PieChart, Pie, LabelList, Cell, ResponsiveContainer } from "recharts";

function RadialProgress({ value, label, color, remainingColor }) {
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
              innerRadius={14}
              outerRadius={20}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              <Cell key="completed" fill={color} cornerRadius={8} />
              <Cell key="remaining" fill={remainingColor} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <span className="text-xs text-[#514BF2] font-medium">
        {label}
      </span>
    </div>
  );
}

function StrengthsWeaknesses() {
  return (
    <div className="bg-[#514CF105] text-[#514BF2] rounded-3xl p-4 h-36 md:h-40 lg:h-44 flex flex-col justify-between">
      <h3 className="font-bold text-sm">Strengths & Weaknesses Heatmap</h3>

      <div className="flex justify-between items-center px-6">
        <RadialProgress value={20} label="Algebra" color="#D9D9D9" remainingColor="#D9D9D980" />{" "}
        {/* Low - Gray/Light */}
        <RadialProgress value={70} label="Fractions" color="#A1AEF2" remainingColor="#A1AEF226" />{" "}
        {/* Medium - Light Blue */}
        <RadialProgress value={85} label="Force & Motion" color="#514CF1" remainingColor="#DFE0FC" />{" "}
        {/* High - Dark Blue */}
      </div>

      <div className="flex justify-center gap-4 text-xs text-[#514BF2]">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]"></div> Low
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#A1AEF2]"></div> Medium
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#514CF1]"></div> High
        </div>
      </div>
    </div>
  );
}

export default StrengthsWeaknesses;
