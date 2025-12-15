import React from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import DescriptionIcon from "@mui/icons-material/Description";

const AssessmentInformation = ({
  title,
  setTitle,
  selectedClass,
  setSelectedClass,
  selectedSubject,
  setSelectedSubject,
  instructions,
  setInstructions,
  classes,
  subjects,
}) => {
  return (
    <div className="bg-[#514CF105] p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-6 text-[#514CF1] font-semibold">
        <DescriptionIcon className="text-lg" />
        <span>Assessment Information</span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#514CF1]">
            Assessment Title
          </label>
          <InputText
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Mid-Term Physics Assessment 2024"
            className="w-full p-3 text-sm border-gray-200 bg-gray-50 focus:border-[#514CF1] focus:ring-0 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#514CF1]">
              Class
            </label>
            <Dropdown
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.value)}
              options={classes}
              optionLabel="name"
              placeholder="Select Class"
              className="w-full border-gray-200 bg-gray-50 rounded-lg"
              pt={{
                root: { className: "items-center" },
                input: { className: "p-3 text-sm" },
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#514CF1]">
              Subject
            </label>
            <Dropdown
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.value)}
              options={subjects}
              optionLabel="name"
              placeholder="Select Subject"
              className="w-full border-gray-200 bg-gray-50 rounded-lg"
              pt={{
                root: { className: "items-center" },
                input: { className: "p-3 text-sm" },
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#514CF1]">
            Instruction for Students
          </label>
          <Editor
            value={instructions}
            onTextChange={(e) => setInstructions(e.htmlValue)}
            style={{
              height: "120px",
            }}
            placeholder="e.g. Mid-Term Physics Assessment 2024"
            headerTemplate={
              <span className="ql-formats">
                <button className="ql-bold text-[#514CF1]!"></button>
                <button className="ql-italic text-[#514CF1]!"></button>
                <button
                  className="ql-list text-[#514CF1]!"
                  value="ordered"
                ></button>
                <button className="ql-link text-[#514CF1]"></button>
              </span>
            }
            className="custom-quill-editor"
            pt={{
              content: { className: "bg-white rounded-b-lg border-none" }, // Slightly blueish white for content background matching image
              toolbar: {
                className:
                  "bg-[#E0E7FF] border-none rounded-t-lg text-[#514CF1]",
              },
            }}
          />
          {/* <style>{`
            .p-editor-toolbar .ql-formats button svg .ql-stroke {
              stroke: #514cf1 !important;
            }
            .p-editor-toolbar .ql-formats button svg .ql-fill {
              fill: #514cf1 !important;
            }
            .p-editor-content .ql-editor.ql-blank::before {
                color: #514cf1;
                font-style: normal;
                opacity: 0.6;
            }
          `}</style> */}
        </div>
      </div>
    </div>
  );
};

export default AssessmentInformation;
