import React from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Slider } from "primereact/slider";
import SettingsIcon from "@mui/icons-material/Settings";

const TestSettings = ({
  randomize,
  setRandomize,
  antiCheat,
  setAntiCheat,
  attempts,
  setAttempts,
}) => {
  return (
    <div className="bg-[#514CF105] p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-6 text-[#514CF1] font-semibold">
        <SettingsIcon className="text-lg" />
        <span>Test Settings</span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#514CF1]">
            Randomize Questions
          </span>
          <InputSwitch
            checked={randomize}
            onChange={(e) => setRandomize(e.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#514CF1]">
            Anti-cheat Mode
          </span>
          <InputSwitch
            checked={antiCheat}
            onChange={(e) => setAntiCheat(e.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-[#514CF1]">Allowed Attempts</span>
            <span className="bg-gray-100 px-2 rounded text-gray-600 font-bold">
              {attempts}
            </span>
          </div>
          <Slider
            value={attempts}
            onChange={(e) => setAttempts(e.value)}
            min={1}
            max={10}
            className="w-full"
            pt={{
              range: { className: "bg-[#514CF1]" },
              handle: { className: "bg-[#514CF1] ring-2 ring-[#514CF150]" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestSettings;
