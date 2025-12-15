import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

  const smoothScrollY = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  // 2. Create different movement speeds (Parallax Effect)
  // The 'y' value creates vertical movement.
  // Slowest layer (Background) moves slightly
  const backgroundY = useTransform(smoothScrollY, [0, 1], ["0%", "20%"]);
  // Mid layers move a bit faster
  const midY1 = useTransform(smoothScrollY, [0, 1], ["0%", "40%"]);
  const midY2 = useTransform(smoothScrollY, [0, 1], ["0%", "60%"]);
  // Front layer moves the fastest
  const foregroundY = useTransform(smoothScrollY, [0, 1], ["0%", "80%"]);

  // Simplified logic for Mouse Parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 20, // Move max 20px
      y: (e.clientY / window.innerHeight) * 20,
    });
  };

  // Apply to style by combining with scrollY
  // Layer 4 (Front) - Moves most
  // Layer 1 (Back) - Moves least

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="w-full h-[160vh] relative  bg-transparent" // Taller container
    >
      <motion.div
        style={{ y: midY2, x: mousePosition.x * 0.5, zIndex: 1 }}
        className="absolute top-[12%] left-[1%] z-20"
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
        className="absolute top-[12%] right-[12%] z-20"
      >
        <img
          src={fun}
          alt="Students having fun"
          className=" h-auto drop-shadow-lg hidden lg:block w-64 opacity-90 hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Wave 1: Furthest Back (Sky/Top Hill) - Slowest Mouse */}
      <motion.div
        style={{ y: backgroundY, x: mousePosition.x * -0.2, zIndex: 5 }}
        className="absolute bottom-[45%] left-[-2%] w-full "
      >
        <img
          src={Wave1}
          alt="Back Wave"
          className="w-full rotate-180 scale-110"
        />
      </motion.div>

      {/* Wave 2: Mid Hill */}
      <motion.div
        style={{ y: midY1, x: mousePosition.x * -0.4, zIndex: 10 }}
        className="absolute bottom-[30%] left-[0%] w-full"
      >
        <img
          src={Wave2}
          alt="Mid Wave 1"
          className="w-full rotate-180 scale-110"
        />
      </motion.div>

      {/* Wave 3: Lower Mid Hill */}
      <motion.div
        style={{ y: midY2, x: mousePosition.x * -0.6, zIndex: 15 }}
        className="absolute bottom-[35%] left-[9%] w-full"
      >
        <img
          src={Wave3}
          alt="Mid Wave 2"
          className="w-full rotate-180 scale-110"
        />
      </motion.div>

      {/* Wave 4: Foreground (Closest) - Fastest Mouse */}
      <motion.div
        style={{ y: foregroundY, x: mousePosition.x * -1.0, zIndex: 20 }}
        className="absolute bottom-[-45%] left-[0%] w-full"
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
