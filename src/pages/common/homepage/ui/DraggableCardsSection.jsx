import React, { useState, useRef, useEffect } from "react";
import { GraduationCap, Globe, FileText, Trees } from "lucide-react";

function DraggableCardsSection() {
  const [cardPositions, setCardPositions] = useState([
    { x: 15, y: 15 },
    { x: 35, y: 40 },
    { x: 72, y: 20 },
    { x: 80, y: 50 },
  ]);

  const [dragging, setDragging] = useState(null);
  const containerRef = useRef(null);

  const stats = [
    {
      icon: <GraduationCap size={32} />,
      value: "800+",
      label: "Schools",
    },
    {
      icon: <Globe size={32} />,
      value: "85+",
      label: "Countries",
    },
    {
      icon: <FileText size={32} />,
      value: "5M+",
      label: "Submissions",
    },
    {
      icon: <Trees size={32} />,
      value: "10K+",
      label: "Trees Saved",
    },
  ];

  const handleMouseDown = (index, e) => {
    e.preventDefault();
    setDragging(index);
  };

  const handleMouseMove = (e) => {
    if (dragging === null || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setCardPositions((prev) => {
      const newPositions = [...prev];
      newPositions[dragging] = {
        x: Math.max(10, Math.min(90, x)),
        y: Math.max(10, Math.min(90, y)),
      };
      return newPositions;
    });
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  useEffect(() => {
    if (dragging !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragging]);

  // Generate curved path between two points
  const generatePath = (from, to) => {
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const offset = 10;

    return `M ${from.x},${from.y} Q ${midX},${midY - offset} ${to.x},${to.y}`;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] bg-gradient-to-br from-[#7c6fd6] via-[#8c7ce4] to-[#9c8ff0] rounded-2xl overflow-hidden select-none"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>

      {/* SVG Lines connecting cards */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Line from card 0 to card 1 */}
        <path
          d={generatePath(cardPositions[0], cardPositions[1])}
          stroke="#6b5cc9"
          strokeWidth="0.3"
          fill="none"
          opacity="0.6"
          className="transition-all duration-100"
        />
        {/* Line from card 1 to card 2 */}
        <path
          d={generatePath(cardPositions[1], cardPositions[2])}
          stroke="#6b5cc9"
          strokeWidth="0.3"
          fill="none"
          opacity="0.6"
          className="transition-all duration-100"
        />
        {/* Line from card 2 to card 3 */}
        <path
          d={generatePath(cardPositions[2], cardPositions[3])}
          stroke="#6b5cc9"
          strokeWidth="0.3"
          fill="none"
          opacity="0.6"
          className="transition-all duration-100"
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
          onMouseDown={(e) => handleMouseDown(index, e)}
          className={`absolute -translate-x-1/2 -translate-y-1/2 bg-white/15 backdrop-blur-md border-2 border-white/40 rounded-[20px] px-8 py-6 text-center text-white min-w-[140px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out cursor-grab active:cursor-grabbing z-10 hover:scale-105 hover:shadow-[0_12px_48px_rgba(0,0,0,0.2)] ${
            dragging === index ? "scale-105" : "animate-float"
          }`}
        >
          <div className="mb-2 flex justify-center text-white/90">
            {stat.icon}
          </div>
          <div className="text-[32px] font-bold mb-1 text-white">
            {stat.value}
          </div>
          <div className="text-sm text-white/85 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default DraggableCardsSection;
