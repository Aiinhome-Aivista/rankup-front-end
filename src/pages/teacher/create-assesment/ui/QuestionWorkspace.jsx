import React from "react";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { Button } from "primereact/button";
import AddIcon from "@mui/icons-material/Add";
import SubjectIcon from "@mui/icons-material/Subject";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";

const QuestionWorkspace = ({
  aiTopic,
  setAiTopic,
  difficulty,
  setDifficulty,
  numQuestions,
  setNumQuestions,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-800 font-semibold">Question Workspace</h3>
          <p className="text-xs text-gray-500">
            Add questions manually or use AI tools.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            label="Add MCQ"
            icon={<AddIcon className="mr-2" />}
            className="p-button-text bg-[#E0E7FF]! text-[#514CF1] text-sm py-2 px-3 hover:bg-[#E0E7FF]"
            rounded
          />
          <Button
            label="Add Subjective"
            icon={<SubjectIcon className="mr-2" />}
            className="p-button-text bg-[#E0E7FF]! text-[#514CF1] text-sm py-2 px-3 hover:bg-[#E0E7FF]"
            rounded
          />
          <Button
            label="Upload PDF"
            icon={<PictureAsPdfIcon className="mr-2" />}
            className="p-button-text bg-[#E0E7FF]! text-[#514CF1] text-sm py-2 px-3 hover:bg-[#E0E7FF]"
            rounded
          />
        </div>
      </div>

      {/* AI Generator Card */}
      <div className="bg-[#514CF105] p-6 rounded-2xl shadow-sm border border-pink-100 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-6 text-[#514CF1] font-semibold">
          <StarIcon className="text-lg" />
          <span>AI Questions Generator</span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#514CF1]">
              Topic or Concept
            </label>
            <InputText
              value={aiTopic}
              onChange={(e) => setAiTopic(e.target.value)}
              placeholder="e.g. Newton's Laws of Motion"
              className="w-full p-3 text-sm border-gray-200 bg-gray-50 focus:border-[#514CF1] focus:ring-0 rounded-lg"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="flex-1 w-full flex flex-col gap-2">
              <div className="flex justify-between text-xs text-blue-300 font-medium tracking-wider mb-2">
                <span>EASY</span>
                <span className="text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                  Medium
                </span>
                <span>HARD</span>
              </div>
              <Slider
                value={difficulty}
                onChange={(e) => setDifficulty(e.value)}
                className="w-full"
              />
              <div className="text-xs text-gray-400 mt-1 font-medium">
                Difficult Level
              </div>
            </div>
            <div className="flex-1 w-full">
              <label className="text-sm font-semibold text-[#514CF1] mb-2 block">
                Number of Questions
              </label>
              <div className="flex gap-2 ">
                {[5, 10, 15, 20].map((num) => (
                  <button
                    key={num}
                    onClick={() => setNumQuestions(num)}
                    className={`flex-1 py-2 text-sm cursor-pointer rounded-full border ${
                      numQuestions === num
                        ? "bg-[#514CF1] text-white border-[#514CF1]"
                        : "bg-white text-gray-500 border-gray-200 hover:border-[#514CF1]"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <Button
              label="Replace Current"
              className="flex-1 bg-[#FFFFFF]! text-[#514CF180]! border! border-[#514CF11A]! hover:bg-gray-50 p-3 text-sm rounded-full"
              rounded
            />
            <Button
              className="flex-1 justify-center bg-[#514CF1] border-none hover:bg-[#403BC0] p-3 text-sm rounded-full"
              rounded
            >
              <div className="flex items-center gap-2">
                <BoltIcon />
                <span>Generate & Append</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionWorkspace;
