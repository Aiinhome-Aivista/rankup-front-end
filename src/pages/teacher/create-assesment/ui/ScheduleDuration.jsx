import React from "react";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ScheduleDuration = ({
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  endDate,
  setEndDate,
  endTime,
  setEndTime,
  duration,
  setDuration,
}) => {
  return (
    <div className="bg-[#514CF105] p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-6 text-[#514CF1] font-semibold">
        <AccessTimeIcon className="text-lg" />
        <span>Schedule & Duration</span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#514CF1]">
              Start Date
            </label>
            <Calendar
              value={startDate}
              onChange={(e) => setStartDate(e.value)}
              placeholder="DD/MM/YYYY"
              showIcon
              className="w-full text-sm"
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg",
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#514CF1]">
              Start Time
            </label>
            <Calendar
              value={startTime}
              onChange={(e) => setStartTime(e.value)}
              timeOnly
              placeholder="HH:MM"
              showIcon
              className="w-full text-sm"
              icon={() => <AccessTimeIcon className="text-gray-400" />}
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg",
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#514CF1]">
              End Date
            </label>
            <Calendar
              value={endDate}
              onChange={(e) => setEndDate(e.value)}
              placeholder="DD/MM/YYYY"
              showIcon
              className="w-full text-sm"
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg",
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#514CF1]">
              End Time
            </label>
            <Calendar
              value={endTime}
              onChange={(e) => setEndTime(e.value)}
              timeOnly
              placeholder="HH:MM"
              showIcon
              className="w-full text-sm"
              icon={() => <AccessTimeIcon className="text-gray-400" />}
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg",
                },
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-[#514CF1]">
            Duration Limit
          </label>
          <div className="flex gap-4">
            <InputNumber
              value={duration}
              onValueChange={(e) => setDuration(e.value)}
              className="w-24"
              inputStyle={{ width: "6rem" }}
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg text-center",
                },
              }}
            />
            <Dropdown
              options={[{ label: "Minutes", value: "min" }]}
              value="min"
              className="flex-1 bg-gray-50 border-gray-200 rounded-lg"
              pt={{ input: { className: "p-2.5 text-sm" } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDuration;
