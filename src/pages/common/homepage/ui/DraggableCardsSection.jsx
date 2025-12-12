import React, { useState, useRef, useEffect } from "react";
import { GraduationCap, Globe, FileText, Trees } from "lucide-react";

function DraggableCardsSection() {
  // Initial positions that cards will snap back to
  const initialPositions = [
    { x: 20, y: 22 }, // Schools - top left
    { x: 40, y: 50 }, // Countries - middle left
    { x: 60, y: 25 }, // Submissions - top right
    { x: 80, y: 60 }, // Trees Saved - bottom right
  ];

  const [cardPositions, setCardPositions] = useState(initialPositions);
  const [dragging, setDragging] = useState(null);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  // Ensure component re-renders after mount so lines are visible
  useEffect(() => {
    setMounted(true);
  }, []);

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
    // Reset all cards back to their initial positions
    setCardPositions(initialPositions);
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

  // Calculate line style for connecting two cards
  const calculateLineStyle = (from, to, containerElement) => {
    if (!containerElement) return {};

    const rect = containerElement.getBoundingClientRect();
    const fromX = (from.x * rect.width) / 100;
    const fromY = (from.y * rect.height) / 100;
    const toX = (to.x * rect.width) / 100;
    const toY = (to.y * rect.height) / 100;

    const deltaX = toX - fromX;
    const deltaY = toY - fromY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    return {
      width: `${distance}px`,
      left: `${from.x}%`,
      top: `${from.y}%`,
      transform: `rotate(${angle}deg)`,
      transformOrigin: "0 50%",
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] bg-transparent rounded-2xl overflow-hidden select-none"
    >
      {/* Connecting Lines using divs */}
      {/* Line from left edge to card 0 */}
      <div
        style={calculateLineStyle(
          { x: 0, y: cardPositions[0].y },
          cardPositions[0],
          containerRef.current
        )}
        className="absolute h-[2px] bg-[#6b5cc9] opacity-60 pointer-events-none z-[1] transition-all duration-100"
      ></div>

      {/* Line from card 0 to card 1 */}
      <div
        style={calculateLineStyle(
          cardPositions[0],
          cardPositions[1],
          containerRef.current
        )}
        className="absolute h-[2px] bg-[#6b5cc9] opacity-60 pointer-events-none z-[1] transition-all duration-100"
      ></div>

      {/* Line from card 1 to card 2 */}
      <div
        style={calculateLineStyle(
          cardPositions[1],
          cardPositions[2],
          containerRef.current
        )}
        className="absolute h-[2px] bg-[#6b5cc9] opacity-60 pointer-events-none z-[1] transition-all duration-100"
      ></div>

      {/* Line from card 2 to card 3 */}
      <div
        style={calculateLineStyle(
          cardPositions[2],
          cardPositions[3],
          containerRef.current
        )}
        className="absolute h-[2px] bg-[#6b5cc9] opacity-60 pointer-events-none z-[1] transition-all duration-100"
      ></div>

      {/* Line from card 3 to right edge */}
      <div
        style={calculateLineStyle(
          cardPositions[3],
          { x: 100, y: cardPositions[3].y },
          containerRef.current
        )}
        className="absolute h-[2px] bg-[#6b5cc9] opacity-60 pointer-events-none z-[1] transition-all duration-100"
      ></div>

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
            dragging === index ? "scale-105" : ""
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
