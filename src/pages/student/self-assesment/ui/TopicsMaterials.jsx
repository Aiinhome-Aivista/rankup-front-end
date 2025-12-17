import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { FileUpload } from "primereact/fileupload";
import { Slider } from "primereact/slider";
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

const TopicsMaterials = ({
    selectedSubject,
    setSelectedSubject,
    selectedTopics,
    setSelectedTopics,
    subjects,
    topics,
}) => {
    const [weights, setWeights] = useState({});
    const handleTopicsChange = (e) => {
        const newTopics = e.value;
        setSelectedTopics(newTopics);

        const newWeights = { ...weights };
        let weightsChanged = false;

        newTopics.forEach((topic) => {
            if (newWeights[topic.code] === undefined) {
                newWeights[topic.code] = 50;
                weightsChanged = true;
            }
        });

        if (weightsChanged) {
            setWeights(newWeights);
        }
    };

    const handleTopicRemove = (topic) => {
        const updatedTopics = selectedTopics.filter((t) => t.code !== topic.code);
        setSelectedTopics(updatedTopics);
    };

    const handleWeightChange = (code, value) => {
        setWeights({ ...weights, [code]: value });
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Topics & Materials Section */}
            <div className="bg-[#514CF105] p-6 rounded-2xl border border-[#514CF10D]">
                <div className="flex items-center gap-2 mb-6 text-[#514CF1] font-bold">
                    <EditDocumentIcon className="text-lg" />
                    <span>Topics & Materials</span>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#514CF1]">
                            Subject
                        </label>
                        <Dropdown
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.value)}
                            options={subjects}
                            optionLabel="name"
                            placeholder="Mathematics"
                            className="w-full border-gray-200 bg-gray-50 rounded-lg focus:border-[#514CF1] focus:ring-0 text-[#514CF180] font-bold"
                            pt={{
                                input: { className: "p-3 text-sm text-[#514CF180]" },
                            }}
                        />
                    </div>

                    {/* Topics */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#514CF1]">
                            Topics (Multi-select)
                        </label>

                        {/* MultiSelect Component */}
                        <div className="w-full">
                            <MultiSelect
                                value={selectedTopics}
                                onChange={handleTopicsChange}
                                options={topics}
                                optionLabel="name"
                                placeholder="search for more topics"
                                display="chip"
                                filter
                                className="w-full border-gray-200 bg-gray-50 rounded-lg focus:border-[#514CF1]"
                                pt={{
                                    root: { className: "w-full border border-gray-200 bg-gray-50 rounded-lg" },
                                    label: { className: "p-3 text-sm text-[#514CF180]" },
                                    token: { className: "bg-[#514CF1] text-white" },
                                    removeTokenIcon: { className: "ml-2 text-white" },
                                    item: { className: "text-sm p-3 hover:bg-[#514CF10D]" },
                                    header: { className: "p-3 bg-gray-50 border-b border-gray-100" }
                                }}
                            />
                        </div>

                        {/* Popular Tags */}
                        <div className="flex gap-2 mt-2">
                            <span className="text-xs font-bold text-[#514CF1]">Popular</span>
                            <span className="text-xs text-[#514CF1] bg-[#514CF110] px-2 py-0.5 rounded cursor-pointer hover:bg-[#514CF120]">+ Geometry</span>
                            <span className="text-xs text-[#514CF1] bg-[#514CF110] px-2 py-0.5 rounded cursor-pointer hover:bg-[#514CF120]">+ Statistics</span>
                            <span className="text-xs text-[#514CF1] bg-[#514CF110] px-2 py-0.5 rounded cursor-pointer hover:bg-[#514CF120]">+ Trigonometry</span>
                        </div>
                    </div>

                    {selectedTopics && selectedTopics.length > 0 && (
                        <div className="mt-2">
                            <label className="text-sm font-bold text-[#514CF1] mb-4 block">
                                Weighting
                            </label>
                            <div className="flex flex-col gap-3">
                                {selectedTopics.map((topic) => (
                                    <div key={topic.code} className="bg-[#514CF105] p-4 rounded-xl flex flex-col gap-3 relative group">
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <CloseIcon
                                                className="text-[#514CF180] hover:text-[#514CF1] cursor-pointer"
                                                style={{ fontSize: '16px' }}
                                                onClick={() => handleTopicRemove(topic)}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-[#514CF1]">{topic.name}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-[#514CF160] font-mono w-8">05%</span>
                                            <Slider
                                                value={weights[topic.code] || 50}
                                                onChange={(e) => handleWeightChange(topic.code, e.value)}
                                                className="flex-1"
                                                pt={{
                                                    range: { className: "bg-[#514CF1]" },
                                                    handle: { className: "bg-[#514CF1] border-2 border-white shadow-sm" }
                                                }}
                                            />
                                            <span className="text-xs text-[#514CF160] font-mono w-8 text-right">100%</span>
                                        </div>
                                        <div className="flex justify-end -mt-1">
                                            <span className="text-xs font-bold text-[#514CF1]">{weights[topic.code] || 50}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Reference Materials Section */}
            <div>
                <div className="flex items-center text-[#514CF1]">
                    <span className="text-sm font-bold">Reference Materials <span className="text-[#514CF180]">(Optional)</span></span>
                </div>
                <p className="text-[#A1AEF2] text-xs mb-2">Add questions manually or use AI tools.</p>
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
                    <div className="flex flex-col items-center justify-center p-12 text-center bg-[#514CF105] rounded-xl border-2 border-dashed border-[#514CF10D] hover:border-[#514CF1] transition-colors cursor-pointer w-full">
                        <CloudUploadIcon
                            style={{ fontSize: "2rem", color: "#514CF1" }}
                            className="mb-3"
                        />
                        <p className="text-[#514CF1] font-regular text-lg">
                            Click to upload notes or past papers
                        </p>
                        <p className="text-xs text-[#A1AEF2] mt-1">Supported: PDF, DOCX, TXT (Max 10MB)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicsMaterials;
