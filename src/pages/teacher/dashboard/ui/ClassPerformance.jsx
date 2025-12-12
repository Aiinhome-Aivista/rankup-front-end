import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "M", value: 40 },
  { name: "T", value: 55 },
  { name: "W", value: 15 },
  { name: "T", value: 65, active: true },
  { name: "F", value: 35 },
  { name: "S", value: 50 },
  { name: "S", value: 80 },
];

function ClassPerformance() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-[280px]">
      <h3 className="text-[#514BF2] font-semibold text-sm mb-2">
        Class Performance
      </h3>

      <div className="flex-1 w-full h-full -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={32}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0AEC0", fontSize: 10 }}
              dy={10}
            />
            <YAxis hide domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey="value" radius={[20, 20, 20, 20]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.active ? "#514BF2" : "#F3F4F6"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ClassPerformance;
