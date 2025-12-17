import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { ProgressBar } from 'primereact/progressbar';

const AISummary = ({
    subject,
    topics,
    difficulty,
    numQuestions,
    duration
}) => {
    return (
        <div className="bg-[#514CF1] pt-4 px-4 pb-2 rounded-2xl text-white relative overflow-hidden h-full">
         

            <div className="flex items-center gap-2 mb-6 relative z-10">
                <AutoAwesomeIcon className="text-yellow-300" />
                <span className="font-semibold text-lg">AI Summary</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-6 relative z-10">
                <div>
                    <p className="opacity-70 text-xs mb-1">Subject</p>
                    <p className="font-medium">{subject ? subject.name : '-'}</p>
                </div>
                <div>
                    <p className="opacity-70 text-xs mb-1">Topic Mix</p>
                    <div className="font-medium">
                        {topics && topics.length > 0 ? (
                            topics.slice(0, 2).map((t, i) => (
                                <div key={i} className="truncate">{t.name} {Math.floor(100 / topics.length)}%</div>
                            ))
                        ) : (
                            '-'
                        )}
                        {topics && topics.length > 2 && <div className="text-xs opacity-70">+{topics.length - 2} more</div>}
                    </div>
                </div>
                <div>
                    <p className="opacity-70 text-xs mb-1">Focus</p>
                    <p className="font-medium">Balanced</p>
                </div>
                <div>
                    <p className="opacity-70 text-xs mb-1">Est. Difficulty</p>
                    <ProgressBar value={difficulty === 'beginner' ? 30 : difficulty === 'intermediate' ? 60 : 90} showValue={false} style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.2)' }} color="white" className="mt-2"></ProgressBar>

                    <p className="opacity-70 text-xs mb-1 mt-4">Est. Duration</p>
                    <p className="font-medium">{duration ? duration : '30 Mins'}</p>
                </div>
            </div>

            <div className="text-xs bg-white/10 p-3 rounded-lg mb-6 relative z-10">
                *The AI will prioritize {topics && topics.length > 0 ? topics[0].name : "selected topics"} questions and adapt difficulty based on your performance in real-time.
            </div>

            <div className="flex gap-4 relative z-10">
                <button
                    type="button"
                    className="border border-[#FFFFFF80] text-white hover:bg-white/10 w-full rounded-sm px-4 py-2 font-bold cursor-pointer"
                    
                >
                    Upload your syllabus
                </button>
                <button
                    type="button"
                    className="bg-white text-[#514CF1] hover:bg-gray-100 border-none w-full font-bold rounded-sm cursor-pointer"
                >
                    Generate Assessment
                </button>
            </div>
        </div>
    );
};

export default AISummary;
