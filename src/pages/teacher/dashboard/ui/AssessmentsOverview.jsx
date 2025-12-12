import React from "react";
import { Eye, Edit2, Share2 } from "lucide-react";

const assessments = [
  {
    title: "Mid Term Maths",
    class: "7A",
    status: "Ongoing",
    attempts: "28/35",
    action: "view",
  },
  {
    title: "Chapter 5 test",
    class: "8B",
    status: "Draft",
    attempts: "—",
    action: "edit",
  },
  {
    title: "Science Quiz",
    class: "6C",
    status: "Completed",
    attempts: "30/30",
    action: "share",
  },
];

function AssessmentsOverview() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col flex-1">
      <h3 className="text-[#514BF2] font-semibold text-sm mb-6">
        Assessments Overview
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#A2AEF2] text-[10px] uppercase font-semibold tracking-wider">
              <th className="pb-4 font-medium">Assessment Title</th>
              <th className="pb-4 font-medium">Class</th>
              <th className="pb-4 font-medium">Status</th>
              <th className="pb-4 font-medium text-center">Attempts</th>
              <th className="pb-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {assessments.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-50 last:border-none group hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 text-[#514BF2] font-medium">
                  {item.title}
                </td>
                <td className="py-4 text-gray-500">{item.class}</td>
                <td className="py-4">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full
                                    ${
                                      item.status === "Ongoing"
                                        ? "bg-blue-50 text-blue-500"
                                        : ""
                                    }
                                    ${
                                      item.status === "Draft"
                                        ? "bg-gray-100 text-gray-400"
                                        : ""
                                    }
                                    ${
                                      item.status === "Completed"
                                        ? "bg-green-50 text-green-500"
                                        : ""
                                    }
                                `}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 text-center text-gray-500">
                  {item.attempts}
                </td>
                <td className="py-4 flex justify-end">
                  <button className="text-[#514BF2] hover:bg-[#F3F4FF] p-1.5 rounded-lg transition-colors">
                    {item.action === "view" && <Eye size={16} />}
                    {item.action === "edit" && <Edit2 size={16} />}
                    {item.action === "share" && <Share2 size={16} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssessmentsOverview;
