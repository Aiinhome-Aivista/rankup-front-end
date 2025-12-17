import React from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";
import DescriptionIcon from "@mui/icons-material/Description";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const TopicsMaterials = ({
    selectedSubject,
    setSelectedSubject,
    selectedTopics,
    setSelectedTopics,
    subjects,
    topics,
}) => {
    const emptyTemplate = () => {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#514CF1] transition-colors cursor-pointer w-full">
                <CloudUploadIcon
                    style={{ fontSize: "3rem", color: "#514CF1", opacity: 0.6 }}
                />
                <p className="mt-4 mb-2 text-sm text-gray-600 font-medium">
                    Click to upload notes or past papers
                </p>
                <p className="text-xs text-gray-400">Supported: PDF, DOCX, TXT (Max 10MB)</p>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Topics & Materials Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6 text-[#514CF1] font-semibold">
                    <DescriptionIcon className="text-lg" />
                    <span>Topics & Materials</span>
                </div>

                <div className="flex flex-col gap-6">
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
                            className="w-full border-gray-200 bg-gray-50 rounded-lg focus:border-[#514CF1] focus:ring-0"
                            pt={{
                                input: { className: "p-3 text-sm" },
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#514CF1]">
                            Topics (Multi-select)
                        </label>
                        <MultiSelect
                            value={selectedTopics}
                            onChange={(e) => setSelectedTopics(e.value)}
                            options={topics}
                            optionLabel="name"
                            placeholder="Select Topics"
                            display="chip"
                            className="w-full border-gray-200 bg-gray-50 rounded-lg focus:border-[#514CF1] focus:ring-0"
                            pt={{
                                label: { className: "p-3 text-sm" },
                                token: { className: "bg-[#E0E7FF] text-[#514CF1]" },
                            }}
                        />
                        <div className="flex gap-2 mt-1">
                            <span className="text-xs font-semibold text-[#514CF1]">Popular:</span>
                            <span className="text-xs text-[#514CF1] cursor-pointer hover:underline">+ Geometry</span>
                            <span className="text-xs text-[#514CF1] cursor-pointer hover:underline">+ Statistics</span>
                            <span className="text-xs text-[#514CF1] cursor-pointer hover:underline">+ Trigonometry</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reference Materials Section */}
            <div>
                <div className="flex items-center gap-2 mb-2 text-[#514CF1] font-semibold">
                    <span className="text-sm">Reference Materials (Optional)</span>
                </div>
                <div className="bg-white rounded-2xl w-full">
                    <FileUpload
                        name="demo[]"
                        url={"/api/upload"}
                        mode="basic"
                        accept="image/*,application/pdf"
                        maxFileSize={10000000}
                        onSelect={(e) => console.log(e)}
                        chooseLabel="Click to upload notes or past papers"
                        className="w-full custom-file-upload-basic hidden"
                    />
                    {/* Custom visual implementation because standard FileUpload is hard to style exactly like the big dropzone without 'advanced' mode which has header. 
                Using the emptyTemplate trick on 'advanced' mode is better but needs careful css.
                For now, I will use a simple div that looks like the dropzone.
            */}
                    <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-[#514CF1] transition-colors cursor-pointer w-full">
                        <CloudUploadIcon
                            style={{ fontSize: "2rem", color: "#514CF1" }}
                            className="mb-3"
                        />
                        <p className="text-[#514CF1] font-medium text-sm">
                            Click to upload notes or past papers
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Supported: PDF, DOCX, TXT (Max 10MB)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicsMaterials;
