import React from "react";
import { Checkbox } from "primereact/checkbox";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const Configuration = ({
    difficulty,
    setDifficulty,
    assessmentTypes,
    setAssessmentTypes, // Array of strings e.g. ['Multiple Choice']
    numQuestions,
    setNumQuestions,
    timeLimit,
    setTimeLimit,
    timeOptions
}) => {

    const difficulties = [
        { name: "Beginner", desc: "Core concepts & basics", value: "beginner", icon: BarChartIcon },
        { name: "Intermediate", desc: "Application & logic", value: "intermediate", icon: SignalCellularAltIcon },
        { name: "Advanced", desc: "Complex problems", value: "advanced", icon: TrendingUpIcon },
    ];

    const onAssessmentTypeChange = (e) => {
        let _assessmentTypes = [...assessmentTypes];

        if (e.checked)
            _assessmentTypes.push(e.value);
        else
            _assessmentTypes.splice(_assessmentTypes.indexOf(e.value), 1);

        setAssessmentTypes(_assessmentTypes);
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
            <div className="flex items-center gap-2 mb-6 text-[#514CF1] font-semibold">
                <SettingsIcon className="text-lg" />
                <span>Configuration</span>
            </div>

            <div className="flex flex-col gap-8">
                {/* Difficulty Level */}
                <div>
                    <label className="text-sm font-semibold text-[#514CF1] block mb-3">
                        Difficulty Level
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                        {difficulties.map((item) => {
                            const Icon = item.icon;
                            const isSelected = difficulty === item.value;
                            return (
                                <div
                                    key={item.value}
                                    onClick={() => setDifficulty(item.value)}
                                    className={`
                                cursor-pointer flex flex-col items-center justify-center p-3 rounded-xl border transition-all text-center
                                ${isSelected
                                            ? 'bg-[#514CF105] border-[#514CF1] text-[#514CF1]'
                                            : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-[#514CF180]'}
                            `}
                                >
                                    <Icon className={`mb-2 ${isSelected ? 'text-[#514CF1]' : 'text-gray-400'}`} />
                                    <span className="text-xs font-bold">{item.name}</span>
                                    <span className="text-[10px] opacity-70 mt-1">{item.desc}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Assessment Type */}
                <div>
                    <label className="text-sm font-semibold text-[#514CF1] block mb-3">
                        Assessment Type
                    </label>
                    <div className="flex gap-6">
                        <div className="flex align-items-center">
                            <Checkbox inputId="cb1" value="Multiple Choice" onChange={onAssessmentTypeChange} checked={assessmentTypes.includes('Multiple Choice')}
                                pt={{
                                    box: { className: assessmentTypes.includes('Multiple Choice') ? 'bg-[#514CF1] border-[#514CF1]' : '' }
                                }}
                            />
                            <label htmlFor="cb1" className="ml-2 text-sm text-gray-600">Multiple Choice</label>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="cb2" value="Short Answers" onChange={onAssessmentTypeChange} checked={assessmentTypes.includes('Short Answers')}
                                pt={{
                                    box: { className: assessmentTypes.includes('Short Answers') ? 'bg-[#514CF1] border-[#514CF1]' : '' }
                                }}
                            />
                            <label htmlFor="cb2" className="ml-2 text-sm text-gray-600">Short Answers</label>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="cb3" value="True/False" onChange={onAssessmentTypeChange} checked={assessmentTypes.includes('True/False')}
                                pt={{
                                    box: { className: assessmentTypes.includes('True/False') ? 'bg-[#514CF1] border-[#514CF1]' : '' }
                                }}
                            />
                            <label htmlFor="cb3" className="ml-2 text-sm text-gray-600">True/False</label>
                        </div>
                    </div>
                </div>

                {/* Number of Questions */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-[#514CF1]">
                            Number of Questions
                        </label>
                        <span className="text-[#514CF1] font-bold bg-[#514CF110] px-2 py-1 rounded text-xs">{numQuestions}</span>
                    </div>
                    <Slider
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.value)}
                        min={5}
                        max={50}
                        className="w-full"
                        pt={{
                            range: { className: "bg-[#514CF1]" },
                            handle: { className: "bg-[#514CF1] ring-2 ring-[#514CF150]" },
                        }}
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>5</span>
                        <span>50</span>
                    </div>
                </div>

                {/* Time Limit */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#514CF1]">
                        Time Limit(Optional)
                    </label>
                    <Dropdown
                        value={timeLimit}
                        onChange={(e) => setTimeLimit(e.value)}
                        options={timeOptions}
                        placeholder="Select Duration"
                        className="w-full border-gray-200 bg-gray-50 rounded-lg focus:border-[#514CF1] focus:ring-0"
                        pt={{
                            input: { className: "p-3 text-sm" },
                        }}
                    />
                </div>

            </div>
        </div>
    );
};

export default Configuration;
