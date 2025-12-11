import React from 'react';
import { Box, Typography, Rating, Avatar, Chip } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import FunctionsIcon from '@mui/icons-material/Functions';

const ScoreCard = () => {
    return (
        <Box
            sx={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                width: '100%',
                maxWidth: '280px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
                Score Card
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'col', alignItems: 'center', mb: 2 }}>
                {/*  Placeholder for the small logo/avatar in the score card */}
                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center mb-2 shadow-lg">
                    <span className="font-bold text-white text-xs">S</span>
                </div>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>Sumaya</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 1 }}>
                    15<span className="text-xl text-white/60">/20</span>
                </Typography>
            </Box>

            {/* Small Stat Blocks */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/20 rounded-xl p-2 flex flex-col items-center justify-center backdrop-blur-sm">
                    <ScienceIcon sx={{ fontSize: 20, mb: 0.5 }} />
                    <span className="text-[10px] font-medium">Chemistry</span>
                    <div className="flex gap-0.5 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    </div>
                </div>
                <div className="bg-white/20 rounded-xl p-2 flex flex-col items-center justify-center backdrop-blur-sm">
                    <FunctionsIcon sx={{ fontSize: 20, mb: 0.5 }} />
                    <span className="text-[10px] font-medium">Physics</span>
                    <div className="flex gap-0.5 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    </div>
                </div>
                <div className="bg-white/20 rounded-xl p-2 flex flex-col items-center justify-center backdrop-blur-sm">
                    <ScienceIcon sx={{ fontSize: 20, mb: 0.5 }} />
                    <span className="text-[10px] font-medium">Chemistry</span>
                    <div className="flex gap-0.5 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                    </div>
                </div>
                <div className="bg-white/20 rounded-xl p-2 flex flex-col items-center justify-center backdrop-blur-sm">
                    <FunctionsIcon sx={{ fontSize: 20, mb: 0.5 }} />
                    <span className="text-[10px] font-medium">Concept</span>
                    <div className="flex gap-0.5 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                    </div>
                </div>
            </div>

            <Box sx={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
                {/* Rating stars vertical specific? No, standard 5 stars sidebar */}
                <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-r-xl py-4 px-1 flex flex-col gap-1 shadow-lg border border-white/10">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="w-2 h-2 rounded-full bg-white/60"></div>
                    ))}
                </div>
            </Box>
        </Box>
    );
};

export default ScoreCard;
