import React, { useState, useEffect } from 'react';
import { Person, Star, FastForward } from '@mui/icons-material';
import aboutOurTeamSvg from '../../../../assets/about-our-team.svg';

const testimonials = [
    {
        id: 1,
        name: "Dr. Anna Vilerel",
        role: "ZEMS world Academy, DUBAI",
        quote: "\"The game changer for me this year has been using the lockdown app\".",
        videoColor: "bg-[#9FA9F6]"
    },
    {
        id: 2,
        name: "Mr. John Doe",
        role: "International School, London",
        quote: "\"An incredible tool that has revolutionized our assessment process.\"",
        videoColor: "bg-[#F69F9F]"
    },
    {
        id: 3,
        name: "Ms. Sarah Smith",
        role: "Tech Academy, NY",
        quote: "\"Highly recommended for all educators looking for efficiency.\"",
        videoColor: "bg-[#9FF6C5]"
    }
];

const TrustedSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-20 bg-white w-full px-10 md:px-28 gap-10 md:gap-20">

            {/* Left Content: Testimonial Card */}
            <div className="flex flex-col items-center drop-shadow">
                <div className="relative w-[320px] h-[500px] border-2 border-[#1C1B1F] rounded-[3rem] p-6 flex flex-col justify-between bg-white transition-all duration-500 ease-in-out shadow-[8px_8px_0px_0px_#1C1B1F]">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                            <Person />
                        </div>
                        <div>
                            <h3 className="font-bold text-black text-sm">{currentTestimonial.name}</h3>
                            <p className="text-[10px] text-gray-500 font-semibold">{currentTestimonial.role}</p>
                        </div>
                    </div>

                    {/* Video Placeholder */}
                    <div className={`w-full h-48 ${currentTestimonial.videoColor} rounded-3xl flex items-center justify-center mt-4 transition-colors duration-500`}>
                        <FastForward sx={{ fontSize: 40, color: '#1a1a1a' }} />
                    </div>

                    {/* Quote */}
                    <div className="mt-4">
                        <p className="text-xs font-medium text-gray-800 leading-relaxed min-h-12">
                            {currentTestimonial.quote}
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} sx={{ fontSize: 16, color: '#1a1a1a' }} />
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`h-3 rounded-full bg-slate-800 transition-all duration-300 ${index === currentIndex ? 'w-8' : 'w-3'}`}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Right Content: Text & Illustration */}
            <div className="flex flex-col items-start text-right max-w-lg">
                <div className="">
                    <img src={aboutOurTeamSvg} alt="Team Illustration" className="w-32 h-auto" />
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1B1F] mb-4 w-full">
                    Trusted by educators <br /> worldwide
                </h2>

                <p className="text-[#1C1B1F] text-sm md:text-lg w-full">
                    Hear from passionate educators who are <br className="hidden md:block" /> shaping the future of assessments
                </p>
            </div>

        </div>
    );
};

export default TrustedSection;
