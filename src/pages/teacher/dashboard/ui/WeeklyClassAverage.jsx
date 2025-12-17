import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "M", value: 40 },
  { name: "T", value: 65 },
  { name: "W", value: 35 },
  { name: "T", value: 55 },
  { name: "F", value: 45 },
  { name: "S", value: 75 },
];

function WeeklyClassAverage() {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col h-36 md:h-40 lg:h-44">
      <div className="mb-2">
        <h3 className="text-[#514BF2] font-semibold text-sm">
          Weekly Class Average
        </h3>
      </div>

      <div className="flex-1 w-full h-full -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#514BF2" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#514BF2" stopOpacity={0} />
              </linearGradient>
            </defs>
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
              cursor={{
                stroke: "#514BF2",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#514BF2"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeeklyClassAverage;
