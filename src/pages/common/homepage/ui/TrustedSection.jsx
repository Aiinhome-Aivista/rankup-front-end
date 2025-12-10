import React from 'react';
import { Person, Star, FastForward, Circle } from '@mui/icons-material';
import aboutOurTeamSvg from '../../../../assets/about-our-team.svg';

const TrustedSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-20 bg-white w-full px-8 md:px-20 gap-10 md:gap-20">

            {/* Left Content: Testimonial Card */}
            <div className="flex flex-col items-center">
                <div className="relative w-[320px] h-[500px] border-2 border-slate-800 rounded-[3rem] p-6 flex flex-col justify-between shadow-xl bg-white">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                            <Person />
                        </div>
                        <div>
                            <h3 className="font-bold text-black text-sm">Dr. Anna Vilerel</h3>
                            <p className="text-[10px] text-gray-500 font-semibold">ZEMS world Academy, DUBAI</p>
                        </div>
                    </div>

                    {/* Video Placeholder */}
                    <div className="w-full h-48 bg-[#9FA9F6] rounded-3xl flex items-center justify-center mt-4">
                        <FastForward sx={{ fontSize: 40, color: '#1a1a1a' }} />
                    </div>

                    {/* Quote */}
                    <div className="mt-4">
                        <p className="text-xs font-medium text-gray-800 leading-relaxed">
                            "The game changer for me this year has been using the lockdown app".
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} sx={{ fontSize: 16, color: '#1a1a1a' }} />
                        ))}
                    </div>

                    {/* Card Shine/Reflection Effect (Optional visual polish) */}
                    <div className="absolute top-4 right-4 w-2 h-12 bg-white/20 rounded-full rotate-45 blur-md"></div>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-8">
                    <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                    <div className="w-8 h-3 rounded-full bg-slate-800"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                </div>
            </div>

            {/* Right Content: Text & Illustration */}
            <div className="flex flex-col items-center text-center max-w-lg">
                {/* Illustration */}
                <div className="mb-4">
                    <img src={aboutOurTeamSvg} alt="Team Illustration" className="w-24 h-auto md:w-32" />
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1B1F] mb-4">
                    Trusted by educators <br /> worldwide
                </h2>

                <p className="text-gray-600 text-lg md:text-xl">
                    Hear from passionate educators who are <br className="hidden md:block" /> shaping the future of assessments
                </p>
            </div>

        </div>
    );
};

export default TrustedSection;
