import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ScoreCard from './ScoreCard';
import RankUpAICard from './RankUpAICard';
import InfoCard from './InfoCard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// Assets
import bookStudent from '../../../../assets/book-student.svg';
import workingBeach from '../../../../assets/digital-working-near-beach.svg';
import financeMoney from '../../../../assets/real-finance-money.svg';
import announcementPoster from '../../../../assets/announcement-poster.svg';


const AIAssistanceSection = () => {
    return (
        <div className='relative py-10 px-4 md:px-10 text-white overflow-hidden'>
            <div className='absolute inset-0 z-0 bg-linear-to-b from-[#FFFFFF] via-[#514CF1]'></div>
           

            <div className='relative z-10 max-w-3xl mx-auto flex flex-col items-center'>

                {/* Top Header Section */}
                <div className='text-center mb-16'>
                    <div className='flex justify-center mb-4'>
                        <img src={workingBeach} alt="Relaxing" className='h-32 w-auto drop-shadow-lg' />
                    </div>
                    <Typography variant='h2' sx={{ fontWeight: 800, letterSpacing: '-1px' }}>
                        AI Assistance
                    </Typography>
                    <Typography variant='body1' sx={{ maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}>
                        Experience the future of assessments with your own AI assistant!
                    </Typography>
                </div>

                {/* Grid Content */}
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-10'>

                    {/* Row 1: ScoreCard (Left 3-4 cols) & RankUpAI (Right 8-9 cols) */}
                    <div className='md:col-span-4 flex justify-center md:justify-end items-end'>
                        <ScoreCard />
                    </div>
                    <div className='md:col-span-8'>
                        <RankUpAICard />
                    </div>

                    {/* Row 2: Three Info Cards */}
                    <div className='md:col-span-4'>
                        <InfoCard
                            title="Student"
                            features={['Smart Practice', 'Instant feedback', 'Reduced exam anxiety']}
                            image={<img src={bookStudent} alt="Student" className="w-32 h-auto" />}
                        />
                    </div>
                    <div className='md:col-span-4'>
                        <InfoCard
                            title="Teacher"
                            features={['Auto grading', 'Performance dashboards', 'Student-wise progress tracking']}
                            image={<img src={announcementPoster} alt="Teacher" className="w-32 h-auto opacity-80" />}
                        />
                    </div>
                    <div className='md:col-span-4'>
                        <InfoCard
                            title="Institution"
                            features={['Centralized reporting', 'Data-driven decisions', 'Large-scale exam automation']}
                            image={<img src={financeMoney} alt="Institution" className="w-32 h-auto" />}
                        />
                    </div>
                </div>

                {/* Row 3: Value Prop (8 cols) & Blank Cards (4 cols) */}
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 w-full'>
                    <div className='md:col-span-8'>
                        <div className='w-full h-full bg-white/10 backdrop-blur-md rounded-3xl p-8 border-3 border-[#FFFFFF38] text-center shadow-xl flex flex-col justify-center items-center'>
                            <Typography variant='body1' sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4, maxWidth: '800px', mx: 'auto' }}>
                                At RankUp, we use Artificial Intelligence (AI) to transform the way students learn, practice, and succeed. Our AI-driven system personalizes learning, evaluates performance instantly, and provides deep insights to help students and educators make better decisions—faster.
                            </Typography>

                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<AutoAwesomeIcon />}
                                sx={{
                                    borderRadius: '50px',
                                    padding: '12px 32px',
                                    background: 'rgba(255,255,255,0.2)',
                                    backdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    '&:hover': {
                                        background: 'rgba(255,255,255,0.3)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s'
                                }}
                            >
                                Generate
                            </Button>
                        </div>
                    </div>

                    {/* Blank Cards Stack */}
                    <div className='md:col-span-4 flex flex-col gap-6 h-full'>
                        <div className='flex-1 w-full bg-white/10 backdrop-blur-md rounded-3xl border-3 border-[#FFFFFF38] shadow-xl min-h-[140px]'></div>
                        <div className='flex-1 w-full bg-white/10 backdrop-blur-md rounded-3xl border-3 border-[#FFFFFF38] shadow-xl min-h-[140px]'></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AIAssistanceSection;
