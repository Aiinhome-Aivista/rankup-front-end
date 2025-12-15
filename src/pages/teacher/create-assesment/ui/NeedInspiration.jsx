import React from "react";
import { Button } from "primereact/button";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const NeedInspiration = () => {
  return (
    <div className="bg-[#514CF105] p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4 text-[#514CF1] font-semibold">
        <HelpOutlineIcon className="text-lg" />
        <span>Need Inspiration</span>
      </div>
      <p className="text-xs text-gray-400 mb-6 leading-relaxed">
        Browse the question bank for case studies and past exam questions.
        Explore a wide range of practice materials to strengthen your
        preparation.
      </p>
      <Button
        label="Open Question Bank"
        icon={<MenuBookIcon className="mr-2" />}
        className="w-full bg-[#514CF133]! text-[#514CF1] border-none hover:bg-[#D0D7FF] py-3 rounded-lg font-medium"
        rounded
      />
    </div>
  );
};

export default NeedInspiration;
