import React from "react";

function WaveBackground() {
    return (
        <svg
            className="w-full h-auto"
            viewBox="-100 0 1640 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            {/* Back Layer - Lightest */}
            <path
                d="M-100,150 C140,100 380,200 620,150 C860,100 1100,180 1340,150 C1440,140 1540,155 1640,150 L1640,600 L-100,600 Z"
                fill="#C7D2FE"
                opacity="0.5"
            />

            {/* Middle Layer */}
            <path
                d="M-100,250 C100,180 300,280 500,240 C700,200 900,300 1100,260 C1200,240 1370,270 1540,250 L1640,600 L-100,600 Z"
                fill="#A5B4FC"
                opacity="0.6"
            />

            {/* Front Layer - Main wave with rounded peaks */}
            <path
                d="M-100,320 C20,280 140,380 260,340 C380,300 500,400 620,360 C740,320 860,420 980,380 C1100,340 1220,380 1340,360 C1440,350 1540,365 1640,360 L1640,600 L-100,600 Z"
                fill="#818CF8"
                opacity="0.8"
            />

            {/* Foreground Layer - Darkest, smooth curves */}
            <path
                d="M-100,420 C80,380 260,480 440,440 C620,400 800,500 980,460 C1160,420 1350,450 1540,440 L1640,600 L-100,600 Z"
                fill="#6366F1"
            />
        </svg>
    );
}

export default WaveBackground;
