import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoCard = ({ title, features, image, align = 'left' }) => {

    return (
        <div className={`relative overflow-hidden rounded-4xl p-8 h-80 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-[1.02] duration-300 group`}>
            {/* Glow effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl group-hover:bg-purple-500/40 transition-colors"></div>

            <div className="relative z-10 h-full flex flex-col">
                <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold w-fit mb-6 border border-white/10">
                    {title}
                </div>

                <div className="space-y-3 mt-2">
                    {features.map((feature, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}
                        >
                            {feature}
                        </Typography>
                    ))}
                </div>

                <div className="absolute bottom-0 right-0 p-4 opacity-90">
                    {/* This container can be overridden by props if needed */}
                    {image && (
                        <div className="transform translate-y-2 translate-x-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                            {image}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
