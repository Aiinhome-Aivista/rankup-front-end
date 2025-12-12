import React from 'react';
import { Box, Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import PublicIcon from '@mui/icons-material/Public';
import face2 from '../../../../assets/icons/face_2.svg';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ScoreCard = () => {
    return (
        <div className="relative w-full max-w-[300px]">
            {/* Main Card Container */}
            <div className="relative z-10 rounded-[30px] p-6 text-white shadow-2xl border border-white/20">

                {/* Title */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', opacity: 0.9 }}>
                    Score Card
                </Typography>

                {/* Profile Section */}
                <div className="flex flex-col items-center">
                    <div className="rounded-2xl flex items-center justify-center">
                        <img src={face2} alt="Profile" className="w-10 h-10" />
                    </div>
                    <Typography variant="h6" sx={{ fontWeight: 'normal', opacity: 0.9 }}>Sumaya</Typography>
                    <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-[#A5C9FF]">15</span>
                        <span className="text-lg text-white/70 ml-1">/20</span>
                    </div>
                </div>

                {/* Subject Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Mathematics */}
                    <div className="bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-center backdrop-blur-sm border border-white/5">
                        <CalculateIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.9 }} />
                        <span className="text-[11px] font-medium text-white/80">Mathematics</span>
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
                    <div className="bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-center backdrop-blur-sm border border-white/5">
                        <BiotechIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.9 }} />
                        <span className="text-[11px] font-medium text-white/80">Biology</span>
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
                    <div className="bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-center backdrop-blur-sm border border-white/5">
                        <ScienceIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.9 }} />
                        <span className="text-[11px] font-medium text-white/80">Chemistry</span>
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
                    <div className="bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-center backdrop-blur-sm border border-white/5">
                        <PublicIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.9 }} />
                        <span className="text-[11px] font-medium text-white/80">Geography</span>
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
            <div className="absolute top-[50%] -translate-y-1/2 -left-[18px] w-10 py-5 bg-[#A088E8] rounded-l-2xl flex flex-col items-center gap-1.5 shadow-lg border-l border-t border-b border-white/20 z-0">
                <StarIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
                <StarIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
                <StarIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
                <StarIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
                {/* The empty star is a border star */}
                <StarBorderIcon sx={{ fontSize: 18, color: '#FFFFFF', opacity: 0.8 }} />
            </div>
        </div>
    );
};

export default ScoreCard;

