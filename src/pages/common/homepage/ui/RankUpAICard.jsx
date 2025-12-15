import React from 'react';
import { Box, Typography } from '@mui/material';
import youngWoman from '../../../../assets/young woman.svg';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';
import Waves from '../../../../assets/home-wave.svg';
import { AlarmAddRounded, CalculateRounded, VideoCameraBack, Edit, Translate } from '@mui/icons-material';



const RankUpAICard = () => {
    return (
        <div className='relative w-full max-w-2xl h-[300px] rounded-4xl overflow-hidden shadow-2xl border-3 border-[#FFFFFF38]'>
            {/* Background Gradient */}
            <div className='absolute inset-0'></div>

            {/* Abstract Waves */}
            <div className='absolute inset-0 opacity-40'>
                {/* Simple CSS circles/shapes to mimic the wave background in the card */}
                <div className='absolute -top-20 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl'></div>
                <div className='absolute top-10 right-20 w-48 h-48 bg-purple-400/30 rounded-full blur-2xl'></div>
            </div>

            <div className='relative z-10 flex h-full p-8'>
                {/* Left Side Info */}
                <div className='flex flex-col w-1/2 text-[#A1AEF2]'>

                    {/* <Typography variant='h5' fontWeight='bold' sx={{color: '#A1AEF2' }}>
                        RankUp AI
                    </Typography> */}
                    <h1 className='text-[#A1AEF2] font-extrabold text-xl'>RankUp AI</h1>
                    {/* Right Side Character */}
                    <img
                        src={Waves}
                        alt="wave"
                        className="absolute -top-42 -right-8 w-[80%]" />





                    <div className="flex items-start gap-6 mt-4">

                        {/* Icons Grid */}
                        <div className="grid grid-cols-2 gap-4 max-w-[120px]">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                                <CenterFocusStrongIcon  fontSize="small" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                                <StarIcon className="" fontSize="small" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                                <SchoolIcon className="" fontSize="small" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                                <BarChartIcon className="" fontSize="small" />
                            </div>
                        </div>

                        {/* Stats Text */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center">
                                <span className="font-bold text-">
                                    2<span className="text-xs font-extrabold">hrs</span>
                                </span>
                                <span className='font-bold'>/</span>
                                <span className="text-xs">daily</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold text-lg">30</span>
                                
                                <span className="text-xs">Questions</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold text-lg">
                                    11<sup>th</sup>
                                </span>
                                <span className="text-xs">Rank</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Side Character */}
                <div className='w-1/2 relative'>
                    <img
                        src={youngWoman}
                        alt="AI Assistant"
                        className='absolute -bottom-8 h-[130px] object-cover -left-8'
                    />
                </div>
            </div>

            {/* Bottom Toolbar Mockup */}
            <div className='absolute bottom-0 left-2/6 -translate-x-1/2 bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 flex gap-6 text-[#A1AEF2]'>
                <CalculateRounded sx={{ fontSize: 20 }} />
                <Translate sx={{ fontSize: 20 }} />
                <AlarmAddRounded sx={{ fontSize: 20 }} />
               <VideoCameraBack sx={{ fontSize: 20 }} />
              <Edit sx={{ fontSize: 20 }} />
            </div>

        </div>
    );
};

export default RankUpAICard;
