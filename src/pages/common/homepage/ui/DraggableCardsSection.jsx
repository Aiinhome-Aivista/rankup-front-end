/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { GraduationCap, Globe, Book, Trees } from "lucide-react";

function DraggableCardsSection() {
  const initialPositions = [
    { x: 20, y: 22 },
    { x: 40, y: 55 },
    { x: 60, y: 25 },
    { x: 80, y: 65 },
  ];

  const [cardPositions, setCardPositions] = useState(initialPositions);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const magnetRef = useRef(null); // Track which card is magnetically attached

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalized % coordinates for mouse
    const mouseXPct = (mouseX / rect.width) * 100;
    const mouseYPct = (mouseY / rect.height) * 100;

    // Magnet Physics Constants - Tuned
    const GRAB_RADIUS = 90; // px - Slightly reduced specific to user request
    const RELEASE_RADIUS = 250; // px

    let activeMagnet = magnetRef.current;

    // 1. Maintain or Break existing link
    if (activeMagnet !== null) {
      const anchor = initialPositions[activeMagnet];
      const anchorX = (anchor.x / 100) * rect.width;
      const anchorY = (anchor.y / 100) * rect.height;

      const dx = mouseX - anchorX;
      const dy = mouseY - anchorY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > RELEASE_RADIUS) {
        activeMagnet = null;
        magnetRef.current = null;
      }
    }

    // 2. Establish new link if none exists
    if (activeMagnet === null) {
      // Check all cards to see if any are in grab range
      // Find closest one to avoid conflicts
      let closestDist = GRAB_RADIUS;
      let candidate = null;

      initialPositions.forEach((anchor, index) => {
        const anchorX = (anchor.x / 100) * rect.width;
        const anchorY = (anchor.y / 100) * rect.height;
        const dx = mouseX - anchorX;
        const dy = mouseY - anchorY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < closestDist) {
          closestDist = dist;
          candidate = index;
        }
      });

      if (candidate !== null) {
        activeMagnet = candidate;
        magnetRef.current = candidate;
      }
    }

    setCardPositions((prev) => {
      return prev.map((pos, index) => {
        // Priority 1: Magnetic Pull (Ghost Hand)
        if (index === activeMagnet) {
          // 1:1 movement with mouse
          return {
            x: Math.max(5, Math.min(95, mouseXPct)),
            y: Math.max(5, Math.min(95, mouseYPct)),
          };
        }

        // Priority 2: Idle / Snap Back
        return initialPositions[index];
      });
    });
  };

  const handleMouseLeave = () => {
    setCardPositions(initialPositions);
    magnetRef.current = null; // Reset magnet when leaving container
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    {
      icon: <GraduationCap size={32} strokeWidth={1.5} />,
      value: "800+",
      label: "Schools",
    },
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      value: "85+",
      label: "Countries",
    },
    {
      icon: <Book size={32} strokeWidth={1.5} />,
      value: "5M+",
      label: "Submissions",
    },
    {
      icon: <Trees size={32} strokeWidth={1.5} />,
      value: "10K+",
      label: "Trees Saved",
    },
  ];

  const getSmoothPath = () => {
    if (dimensions.width === 0) return "";

    // Offsets to make the line pass through cards at different heights like the image
    const pathOffsets = [0, -5, 12, -12];

    const points = cardPositions.map((p, i) => ({
      x: (p.x / 100) * dimensions.width,
      y: ((p.y + (pathOffsets[i] || 0)) / 100) * dimensions.height,
    }));

    // Start at left edge (x=0) at 10% height
    const start = { x: 0, y: dimensions.height * 0.1 };
    // End at right edge (x=width) at 90% height
    const end = { x: dimensions.width, y: dimensions.height * 0.9 };

    const allPoints = [start, ...points, end];

    let d = `M ${start.x} ${start.y}`;

    for (let i = 0; i < allPoints.length - 1; i++) {
      const curr = allPoints[i];
      const next = allPoints[i + 1];

      // Horizontal control points for sigmoid/S-curve
      const cp1x = curr.x + (next.x - curr.x) * 0.5;
      const cp1y = curr.y;
      const cp2x = curr.x + (next.x - curr.x) * 0.5;
      const cp2y = next.y;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }

    return d;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[500px] bg-gradient-to-br from-[#8093f1] to-[#b388eb] rounded-[40px] overflow-hidden select-none shadow-2xl"
    >
      {/* SVG Connected Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <path
          d={getSmoothPath()}
          fill="none"
          stroke="#5452CC"
          strokeWidth="5"
          strokeLinecap="round"
          className="opacity-40"
          style={{ transition: "d 0.3s ease-out" }}
        />
      </svg>

      {/* Stats Cards */}
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            left: `${cardPositions[index].x}%`,
            top: `${cardPositions[index].y}%`,
          }}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 
            bg-white/20 backdrop-blur-md border-[1.5px] border-white/60 
            rounded-[24px] p-4 text-center text-white 
            w-[150px] h-[150px] flex flex-col items-center justify-center
            shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
            z-10
            /* Visual feedback when holding */
            ${
              magnetRef.current === index
                ? "scale-105 shadow-[0_12px_48px_rgba(0,0,0,0.2)] bg-white/25 cursor-move"
                : "cursor-default transition-all duration-300 ease-out"
            }
          `}
        >
          <div className="mb-2 opacity-90">{stat.icon}</div>
          <div className="text-3xl font-bold mb-1 tracking-tight">
            {stat.value}
          </div>
          <div className="text-xs font-semibold uppercase tracking-wide opacity-80">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DraggableCardsSection;
