import React from 'react';
import { Box, Typography } from '@mui/material';
import youngWoman from '../../../../assets/young woman.svg';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';


const RankUpAICard = () => {
    return (
        <div className='relative w-full max-w-2xl h-[300px] rounded-4xl overflow-hidden shadow-2xl border-3 border-[#FFFFFF38]'>
            {/* Background Gradient */}
            <div className='absolute inset-0 bg-linear-to-r from-[#7B61FF] to-[#6BA5F2] opacity-90'></div>

            {/* Abstract Waves */}
            <div className='absolute inset-0 opacity-40'>
                {/* Simple CSS circles/shapes to mimic the wave background in the card */}
                <div className='absolute -top-20 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl'></div>
                <div className='absolute top-10 right-20 w-48 h-48 bg-purple-400/30 rounded-full blur-2xl'></div>
            </div>

            <div className='relative z-10 flex h-full p-8'>
                {/* Left Side Info */}
                <div className='flex flex-col justify-between w-1/2 text-white'>
                    <Typography variant='h5' fontWeight='bold' sx={{ letterSpacing: 1 }}>
                        RankUp AI
                    </Typography>

                    <div className='grid grid-cols-2 gap-4 mt-4 max-w-[200px]'>
                        <div className='w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10'>
                            <CenterFocusStrongIcon className='text-white' fontSize='small' />
                        </div>
                        <div className='w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10'>
                            <StarIcon className='text-white' fontSize='small' />
                        </div>
                        <div className='w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10'>
                            <SchoolIcon className='text-white' fontSize='small' />
                        </div>
                        <div className='w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10'>
                            <BarChartIcon className='text-white' fontSize='small' />
                        </div>
                    </div>

                    <div className='mt-auto space-y-2 text-sm'>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">2<span className="text-xs font-normal">nd</span></span>
                            <span className="text-white/70 text-xs">Visually</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">30</span>
                            <span className="text-white/70 text-xs">Questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">11<span className="text-xs font-normal">th</span></span>
                            <span className="text-white/70 text-xs">Rank</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Character */}
                <div className='w-1/2 relative'>
                    <img
                        src={youngWoman}
                        alt="AI Assistant"
                        className='absolute -bottom-8 h-[130px] object-cover'
                    />
                </div>
            </div>

            {/* Bottom Toolbar Mockup */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 flex gap-6 border border-white/10'>
                <div className='w-4 h-4 rounded-sm bg-white/60'></div>
                <div className='w-4 h-4 rounded-sm bg-white/60'></div>
                <div className='w-4 h-4 rounded-sm bg-white/60'></div>
                <div className='w-4 h-4 rounded-full bg-white/60'></div>
                <div className='w-4 h-4 rounded-sm bg-white/60'></div>
            </div>

        </div>
    );
};

export default RankUpAICard;
