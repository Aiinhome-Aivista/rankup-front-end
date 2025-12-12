import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import your SVGs here (assuming they are components or image paths)
import Wave1 from "../../../../assets/Vector 2.svg";
import Wave2 from "../../../../assets/Vector 3.svg";
import Wave3 from "../../../../assets/Vector 4.svg";
import Wave4 from "../../../../assets/Vector 5.svg";
import fun from "../../../../assets/having-fun.svg";
import codingImage from "../../../../assets/coding-a-website.svg";

const ParallaxWaves = () => {
  const ref = useRef(null);

  // 1. Track the scroll position of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Starts animating when top hits top
  });

  // 2. Create different movement speeds (Parallax Effect)
  // The 'y' value creates vertical movement.
  // Slowest layer (Background) moves slightly
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Mid layers move a bit faster
  const midY1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const midY2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  // Front layer moves the fastest
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  // Simplified logic for Mouse Parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 20, // Move max 20px
      y: (e.clientY / window.innerHeight) * 20,
    });
  };

  // Apply to style:
  // transform: `translate(${mousePosition.x * speed}px, ${mousePosition.y * speed}px)`

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="w-full h-[150vh] relative  bg-transparent" // Taller container
    >
      <motion.div
        style={{ y: midY2, x: mousePosition.x * 0.5, zIndex: 1 }}
        className="absolute top-[-15%] left-[1%] z-20"
      >
        <img
          src={codingImage}
          alt="Design and code"
          className=" h-auto drop-shadow-lg hidden lg:block w-64 opacity-90 hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Content Layer - Trampoline */}
      <motion.div
        style={{ y: midY2, x: mousePosition.x * 0.5, zIndex: 1 }}
        className="absolute top-[-10%] right-[12%] z-20"
      >
        <img
          src={fun}
          alt="Students having fun"
          className=" h-auto drop-shadow-lg hidden lg:block w-64 opacity-90 hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Wave 1: Furthest Back (Sky/Top Hill) */}
      <motion.div
        style={{ y: backgroundY, zIndex: 5 }}
        className="absolute top-[-7%] left-[-2%] w-full "
      >
        <img
          src={Wave1}
          alt="Back Wave"
          className="w-full rotate-180 scale-110"
        />
      </motion.div>

      {/* Wave 2: Mid Hill */}
      <motion.div
        style={{ y: midY1, zIndex: 10 }}
        className="absolute top-[4%] left-[0%] w-full"
      >
        <img
          src={Wave2}
          alt="Mid Wave 1"
          className="w-full rotate-180 scale-110"
        />
      </motion.div>

      {/* Wave 3: Lower Mid Hill */}
      <motion.div
        style={{ y: midY2, zIndex: 15 }}
        className="absolute top-[7%] left-[9%] w-full"
      >
        <img
          src={Wave3}
          alt="Mid Wave 2"
          className="w-full rotate-180 scale-110"
        />
      </motion.div>

      {/* Wave 4: Foreground (Closest) */}
      <motion.div
        style={{ y: foregroundY, zIndex: 20 }}
        className="absolute bottom-[-35%] left-[0%] w-full"
      >
        <img
          src={Wave4}
          alt="Front Wave"
          className="w-full rotate-180 scale-110"
        />
      </motion.div>
    </div>
  );
};

export default ParallaxWaves;
