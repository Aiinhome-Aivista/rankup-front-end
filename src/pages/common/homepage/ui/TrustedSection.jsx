import React, { useState, useEffect } from 'react';
import { Person, Star, FastForward } from '@mui/icons-material';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
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

const videoSlides = [
    { id: 1, color: "bg-[#9FA9F6]", content: <div className="text-center"><FastForward sx={{ fontSize: 40, color: '#1C1B1F' }} /></div> },
    { id: 2, color: "bg-[#F69F9F]", content: <div className="text-center"><FastForward sx={{ fontSize: 40, color: '##1C1B1F' }} /></div> },
    { id: 3, color: "bg-[#9FF6C5]", content: <div className="text-center"><FastForward x={{ fontSize: 40, color: '##1C1B1F' }} /></div> },
    { id: 4, color: "bg-[#F6ECB9]", content: <div className="text-center"><FastForward sx={{ fontSize: 40, color: '#1C1B1F' }} /></div> },
];

const TrustedSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [videoIndex, setVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 8000); // Slower outer rotation to let inner one breathe
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setVideoIndex((prevIndex) => (prevIndex + 1) % videoSlides.length);
        }, 4000); // Faster inner rotation
        return () => clearInterval(interval);
    }, [videoSlides.length]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-20 bg-white w-full px-10 md:px-28 gap-10 md:gap-20">

            {/* Left Content: Testimonial Card */}
            <div className="flex flex-col items-center drop-shadow">
                <div className="relative p-2 border border-[#1C1B1F] rounded-[3.5rem] bg-white shadow-[6px_6px_0px_0px_#1C1B1F]">
                    <div className="relative w-[320px] h-[500px] border border-[#1C1B1F] rounded-[3rem] p-6 flex flex-col justify-between bg-white transition-all duration-500 ease-in-out">
                        {/* Header */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full border-4 border-[#1C1B1F] flex items-center justify-center">
                                <Person2RoundedIcon sx={{ fontSize: 38 }} />
                            </div>
                            <div>
                                <h3 className="font-bold text-black text-sm">{currentTestimonial.name}</h3>
                                <p className="text-[10px] text-gray-500 font-semibold">{currentTestimonial.role}</p>
                            </div>
                        </div>

                        {/* Video Carousel Placeholder */}
                        <div className="relative w-full h-48 rounded-3xl overflow-hidden mt-4 bg-[#FFFFFF03]">
                            {videoSlides.map((slide, vIndex) => {
                                // Calculate offset for inner carousel
                                let offset = vIndex - videoIndex;
                                if (offset < 0) offset += videoSlides.length;

                                let dist = vIndex - videoIndex;
                                // Handle wrap-around for infinite loop effect
                                if (dist < -1) dist += videoSlides.length;
                                if (dist > videoSlides.length - 2) dist -= videoSlides.length;

                                const isActive = dist === 0;
                                const isNext = dist > 0;
                                const isPrev = dist < 0;


                                let style = {};
                                let className = "absolute top-0 w-full h-full rounded-3xl flex items-center justify-center transition-all duration-700 ease-in-out shadow-lg border border-white/20";

                                if (isActive) {
                                    style = { transform: 'translateX(0) scale(1)', zIndex: 20, opacity: 1 };
                                } else if (isNext) {
                                    // Stack to the right
                                    style = {
                                        transform: `translateX(${dist * 15}%) scale(${1 - dist * 0.1})`,
                                        zIndex: 20 - dist,
                                        opacity: 1 - dist * 0.2
                                    };
                                    // Hide if too far
                                    if (dist > 2) style.opacity = 0;
                                } else {
                                    // Exit to left
                                    style = { transform: 'translateX(-120%) scale(0.9)', zIndex: 20, opacity: 0 };
                                }

                                return (
                                    <div
                                        key={slide.id}
                                        className={`${className} ${slide.color} ${style.opacity === 0 ? 'pointer-events-none' : ''}`}
                                        style={style}
                                    >
                                        {slide.content}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Quote */}
                        <div className="mt-4">
                            <p className="text-xs font-medium text-black leading-relaxed min-h-12">
                                {currentTestimonial.quote}
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} sx={{ fontSize: 16, color: '#1C1B1F' }} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`h-3 rounded-full bg-[#1C1B1F] transition-all duration-300 ${index === currentIndex ? 'w-8' : 'w-3'}`}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Right Content: Text & Illustration */}
            <div className="flex flex-col items-end text-right max-w-lg">
                <div className="justify-end">
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
