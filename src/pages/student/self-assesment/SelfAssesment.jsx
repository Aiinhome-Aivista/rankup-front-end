import React, { useState } from "react";
// Sub-components
import TopicsMaterials from "./ui/TopicsMaterials";
import Configuration from "./ui/Configuration";
import AISummary from "./ui/AISummary";

const SelfAssesment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // State
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState([
    { name: "Algebra", code: "ALG" },
    { name: "Calculus", code: "CAL" }
  ]);
  const [difficulty, setDifficulty] = useState("intermediate"); // beginner, intermediate, advanced
  const [assessmentTypes, setAssessmentTypes] = useState(["Multiple Choice"]);
  const [numQuestions, setNumQuestions] = useState(15);
  const [timeLimit, setTimeLimit] = useState("30 Minutes");

  // Mock Data
  const subjects = [
    { name: "Mathematics", code: "MAT" },
    { name: "Physics", code: "PHY" },
    { name: "Chemistry", code: "CHE" },
  ];

  const topics = [
    { name: "Algebra", code: "ALG" },
    { name: "Calculus", code: "CAL" },
    { name: "Geometry", code: "GEO" },
    { name: "Statistics", code: "STA" },
    { name: "Trigonometry", code: "TRI" },
  ];

  const timeOptions = [
    "15 Minutes", "30 Minutes", "45 Minutes", "60 Minutes", "90 Minutes"
  ];

  const header = (
    <div className="flex justify-between items-center mb-8 mt-5" >
      <div className="">
        <h1 className="text-xl font-bold text-[#514CF1]">
          Self-Assessment
        </h1>
        <p className="text-[#A1AEF2] text-sm mt-1">
          Configure your personalized AI study session. Select your topics and difficulty to target your weak points effectively.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          className="text-[#514CF1] font-bold bg-[#514CF10D] border border-[#514CF105] hover:bg-[#514CF105] text-sm rounded-full px-4 py-2"

        >
          Save Draft
        </button>
        <button
          className="bg-[#514CF1] border-none hover:bg-[#403BC0] text-white font-bold text-sm rounded-full px-4 py-2"
        >
          Publish
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-[#F8F9FA]">
      <div className="flex-1 pl-14 pr-6 bg-white">
        {header}

        <div className="">
          <div className="flex border-b border-[#514CF10D] mb-6">
            {["General Details", "Question Building", "Preview Test"].map(
              (tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 transition-colors duration-200 border-b-2 ${
                    activeIndex === index
                      ? "text-[#514CF1] border-[#514CF1] font-bold"
                      : "text-[#514CF180] border-transparent hover:text-[#514CF1] font-bold"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {activeIndex === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <TopicsMaterials
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                  selectedTopics={selectedTopics}
                  setSelectedTopics={setSelectedTopics}
                  subjects={subjects}
                  topics={topics}
                />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <Configuration
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                  assessmentTypes={assessmentTypes}
                  setAssessmentTypes={setAssessmentTypes}
                  numQuestions={numQuestions}
                  setNumQuestions={setNumQuestions}
                  timeLimit={timeLimit}
                  setTimeLimit={setTimeLimit}
                  timeOptions={timeOptions}
                />

                <AISummary
                  subject={selectedSubject}
                  topics={selectedTopics}
                  difficulty={difficulty}
                  numQuestions={numQuestions}
                  duration={timeLimit}
                />
              </div>
            </div>
          )}
          {activeIndex === 1 && (
            <p className="p-4">Question Building Content (AI Auto-generated)</p>
          )}
          {activeIndex === 2 && <p className="p-4">Preview Test Content</p>}
        </div>
      </div>
    </div>
  );
};

export default SelfAssesment;