import React, { useState } from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import Header from "../../../common/layout/Header";

// Sub-components
import AssessmentInformation from "./ui/AssessmentInformation";
import QuestionWorkspace from "./ui/QuestionWorkspace";
import ScheduleDuration from "./ui/ScheduleDuration";
import TestSettings from "./ui/TestSettings";
import NeedInspiration from "./ui/NeedInspiration";

const CreateAssesment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [duration, setDuration] = useState(60);
  const [randomize, setRandomize] = useState(true);
  const [antiCheat, setAntiCheat] = useState(true);
  const [attempts, setAttempts] = useState(1);
  const [aiTopic, setAiTopic] = useState("");
  const [difficulty, setDifficulty] = useState(50);
  const [numQuestions, setNumQuestions] = useState(5);

  const classes = [
    { name: "Class 10 A", code: "10A" },
    { name: "Class 10 B", code: "10B" },
  ];
  const subjects = [
    { name: "Physics", code: "PHY" },
    { name: "Maths", code: "MAT" },
  ];

  const header = (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-[#514CF1]">
          Create New Assessment
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Configure details, build questions, and publish your test.
        </p>
      </div>
      <div className="flex gap-3">
        <Button
          label="Save Draft"
          className="p-button-text text-[#514CF1] bg-[#E0E7FF]! border border-[#514CF105] hover:bg-[#514CF105]"
          style={{ color: "#514CF1", background: "white" }}
          rounded
        />
        <Button
          label="Publish"
          className="bg-[#514CF1] border-none hover:bg-[#403BC0] "
          rounded
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-[#F8F9FA]">
      <Header />
      <div className="flex-1 overflow-y-auto p-8 font-sans bg-white">
        {header}

        <div className="card">
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            className="custom-tabview"
            pt={{
              nav: {
                className:
                  "border-b border-gray-200 mb-6 bg-transparent w-full",
              },
              ink: { className: "bg-[#514CF1]" },
            }}
          >
            <TabPanel
              header="General Details"
              headerClassName={
                activeIndex === 0
                  ? "!text-[#514CF1] font-medium"
                  : "!text-[#514CF180] font-medium"
              }
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-3 flex flex-col gap-8">
                  <AssessmentInformation
                    title={title}
                    setTitle={setTitle}
                    selectedClass={selectedClass}
                    setSelectedClass={setSelectedClass}
                    selectedSubject={selectedSubject}
                    setSelectedSubject={setSelectedSubject}
                    instructions={instructions}
                    setInstructions={setInstructions}
                    classes={classes}
                    subjects={subjects}
                  />

                  <QuestionWorkspace
                    aiTopic={aiTopic}
                    setAiTopic={setAiTopic}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    numQuestions={numQuestions}
                    setNumQuestions={setNumQuestions}
                  />
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <ScheduleDuration
                    startDate={startDate}
                    setStartDate={setStartDate}
                    startTime={startTime}
                    setStartTime={setStartTime}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    endTime={endTime}
                    setEndTime={setEndTime}
                    duration={duration}
                    setDuration={setDuration}
                  />

                  <div className="grid grid-cols-2 gap-6">
                    <TestSettings
                      randomize={randomize}
                      setRandomize={setRandomize}
                      antiCheat={antiCheat}
                      setAntiCheat={setAntiCheat}
                      attempts={attempts}
                      setAttempts={setAttempts}
                    />

                    <NeedInspiration />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel
              header="Question Building"
              headerClassName={
                activeIndex === 1
                  ? "!text-[#514CF1] font-medium"
                  : "!text-[#514CF180] font-medium"
              }
            >
              <p className="p-4">Question Building Content</p>
            </TabPanel>
            <TabPanel
              header="Preview Test"
              headerClassName={
                activeIndex === 2
                  ? "!text-[#514CF1] font-medium"
                  : "!text-[#514CF180] font-medium"
              }
            >
              <p className="p-4">Preview Test Content</p>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default CreateAssesment;
