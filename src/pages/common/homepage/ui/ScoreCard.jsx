import React from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import PublicIcon from '@mui/icons-material/Public';
import face2 from '../../../../assets/icons/face_2.svg';
import StarIcon from '@mui/icons-material/Star';


const ScoreCard = () => {
    return (
        <div className="relative w-full h-full">
            {/* Main Card Container */}
            <div className="relative z-10 rounded-[30px] p-4 text-[#A1AEF2] shadow-2xl border-3 border-[#FFFFFF38] h-full">

                {/* Title */}
                <h1 className='text-[#A1AEF2] font-extrabold text-xl items-center justify-center flex'>
                    Score Card
                </h1>


                {/* Profile Section */}
                <div className="flex flex-col items-center">
                    <div className="rounded-2xl flex items-center justify-center">
                        <img src={face2} alt="Profile" className="w-10 h-10" />
                    </div>
                    <h1 className="text-[#A1AEF2] font-light text-lg">Sumaya</h1>
                    <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-[#A5C9FF]">15</span>
                        <span className="text-lg text-white/70 ml-1">/20</span>
                    </div>
                </div>

                {/* Subject Grid */}
                <div className="grid grid-cols-2 gap-3 pl-4">
                    {/* Mathematics */}
                    <div className="bg-[#FFFFFF38] rounded-2xl p-2 flex flex-col items-center justify-center backdrop-blur-sm border border-white/5 w-full">
                        <CalculateIcon sx={{ fontSize: 24 }} />
                        <span className="text-[11px] font-medium">Mathematics</span>
                        <div className="flex gap-3 mt-2">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                <span className="text-[10px] font-bold">5</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-[10px] font-bold">1</span>
                            </div>
                        </div>
                    </div>

                    {/* Biology */}
                    <div className="bg-[#FFFFFF38] rounded-2xl p-2 flex flex-col items-center justify-center backdrop-blur-sm border border-white/5 w-full">
                        <BiotechIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.9 }} />
                        <span className="text-[11px] font-medium">Biology</span>
                        <div className="flex gap-3 mt-2">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                <span className="text-[10px] font-bold">6</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-[10px] font-bold">0</span>
                            </div>
                        </div>
                    </div>

                    {/* Chemistry */}
                    <div className="bg-[#FFFFFF38] rounded-2xl p-2 flex flex-col items-center justify-center backdrop-blur-sm border border-white/5 w-full">
                        <ScienceIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.9 }} />
                        <span className="text-[11px] font-medium">Chemistry</span>
                        <div className="flex gap-3 mt-2">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                <span className="text-[10px] font-bold">3</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-[10px] font-bold">3</span>
                            </div>
                        </div>
                    </div>

                    {/* Geography */}
                    <div className="bg-[#FFFFFF38] rounded-2xl p-2 flex flex-col items-center justify-center backdrop-blur-sm border border-white/5 w-full">
                        <PublicIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.9 }} />
                        <span className="text-[11px] font-medium">Geography</span>
                        <div className="flex gap-3 mt-2">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                <span className="text-[10px] font-bold">5</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-[10px] font-bold">1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Star Handle */}
            {/* Adjusted to match the visual "tab" look more closely: slightly higher, wider, specific radius */}
            <div className="
                    absolute top-1/3
                    rotate-180
                    w-6 py-4
                    bg-[#FFFFFF38]
                    rounded-l-2xl
                    flex flex-col items-center justify-center
                    gap-2">
                <StarIcon sx={{ fontSize: 16, color: "#A1AEF2" }} />
                <StarIcon sx={{ fontSize: 16, color: "#A1AEF2" }} />
                <StarIcon sx={{ fontSize: 16, color: "#A1AEF2" }} />
                <StarIcon sx={{ fontSize: 16, color: "#A1AEF2" }} />
                <StarIcon sx={{ fontSize: 16, color: "#A1AEF2" }} />

            </div>

        </div>
    );
};

export default ScoreCard;
