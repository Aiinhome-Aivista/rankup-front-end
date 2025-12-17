import React, { useState, useEffect } from "react";
import studying from "../../../../assets/read-book-img.svg";
import {
  Psychology,
  Security,
  SentimentDissatisfied,
  MoodBad,
  EditNote,
} from "@mui/icons-material";
import { motion } from "framer-motion";

function TopMiddleSection({ fadeContent = false }) {
  const items = [
    {
      id: 1,
      text: "Slow Feedback Loops",
      icon: <Psychology fontSize="large" />,
      description:
        "Students often wait days or even weeks to receive feedback on their work. This delay reduces learning effectiveness and makes it harder to improve performance in real time.",
    },
    {
      id: 2,
      text: "Cheating Concerns",
      icon: <Security fontSize="large" />,
      description:
        "Traditional assessments make it difficult to ensure academic integrity. Copying, impersonation, and other practices reduce the credibility of evaluation results.",
    },
    {
      id: 3,
      text: "Boring Assessment",
      icon: <SentimentDissatisfied fontSize="large" />,
      description:
        "Standardized tests often lack creativity and interactivity, reducing student interest and motivation to perform their best.",
    },
    {
      id: 4,
      text: "Assessment Anxiety",
      icon: <MoodBad fontSize="large" />,
      description:
        "High-stakes exams create unnecessary stress and anxiety for students. This pressure can negatively impact their performance and mental well-being.",
    },
    {
      id: 5,
      text: "Manual Grading",
      icon: <EditNote fontSize="large" />,
      description:
        "Grading piles of papers is time-consuming and prone to errors. It takes away valuable time that educators could spend on teaching and mentoring.",
    },
    {
      id: 6,
      text: "Manual Grading",
      icon: <EditNote fontSize="large" />,
      description:
        "Grading piles of papers is time-consuming and prone to errors. It takes away valuable time that educators could spend on teaching and mentoring.",
    },
    {
      id: 7,
      text: "Manual Grading",
      icon: <EditNote fontSize="large" />,
      description:
        "Grading piles of papers is time-consuming and prone to errors. It takes away valuable time that educators could spend on teaching and mentoring.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const getOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > 2) offset -= items.length;
    if (offset < -2) offset += items.length;
    return offset;
  };

  // Animation variants for content fade-in
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="w-full bg-linear-to-b from-[#b7baf8] to-[#ffffff] py-20 font-sans overflow-hidden">
      <motion.div
        className="container mx-auto px-4 gap-6 flex flex-col items-center pb-6"
        variants={contentVariants}
        initial="hidden"
        animate={fadeContent ? "visible" : "hidden"}
      >
        {/* Header Illustration & Text */}
        <div className="mb-12 text-center pb-12">
          <img
            src={studying}
            alt="Illustration"
            className="h-32 w-auto mx-auto mb-4 opacity-80"
          />
          <h2 className="text-4xl font-bold text-gray-900">Wave GoodBye To</h2>
        </div>

        {/* Vertical Carousel */}
        <div className="relative w-full max-w-6xl h-[600px] flex flex-col items-center justify-center perspective-1000">
          {items.map((item, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isNeighbor = Math.abs(offset) === 1;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <div
                key={item.id}
                className={`
                  absolute transition-all duration-700 ease-in-out flex items-start text-left p-6 rounded-2xl border
                  w-full max-w-4xl cursor-pointer
                  ${
                    isActive
                      ? "z-30 opacity-100 scale-100 bg-[#E0E7FF] border-[#6366F1] shadow-xl"
                      : isNeighbor
                      ? "z-20 opacity-80 scale-95 bg-[#E0E7FF] border-[0.5px] border-[#6366F1] blur-[2px]"
                      : "z-10 opacity-30 scale-90 bg-[#E0E7FF] border-transparent blur-[2px]"
                  }
                `}
                style={{
                  transform: `translateY(${offset * 150}px) scale(${
                    1 - Math.abs(offset) * 0.05
                  })`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Icon Box */}
                <div
                  className={`
                    flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-6
                    ${isActive ? "text-[#4338ca]" : "text-gray-400"}
                  `}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isActive ? "text-[#4338ca]" : "text-gray-400"
                    }`}
                  >
                    {item.text}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-[#4338ca]" : "text-gray-300"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default TopMiddleSection;
