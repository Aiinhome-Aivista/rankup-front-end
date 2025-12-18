import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ScoreCard from "./ScoreCard";
import RankUpAICard from "./RankUpAICard";
import InfoAllCard from "./InfoAllCard";
import { motion } from "framer-motion";
// Assets
import workingBeach from "../../../../assets/digital-working-near-beach.svg";

const AIAssistanceSection = ({ fadeContent = false }) => {
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
    <div className="relative px-4 md:px-10 text-white py-10 bg-white">
      <div className="absolute top-[5%] right-[-2%] left-[70%] w-[30%] h-[90%] rounded-full bg-linear-to-br from-brand-primary to-destructive blur-[100px]"></div>

      {/* <div className='absolute top-[5%] right-[-2%] left-[70%] w-[30%] h-[30%] rounded-full bg-linear-to-br from-[#F21D2F] to-[#514CF1] [100px]'></div> */}

      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[90%] rounded-full bg-linear-to-br from-brand-primary to-destructive blur-[100px]"></div>

      <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] rounded-full bg-linear-to-br from-brand-primary to-destructive blur-[100px]"></div>

      <motion.div
        className="relative z-10 w-[calc(100%-2rem)] max-w-5xl mx-auto flex flex-col items-center"
        variants={contentVariants}
        initial="hidden"
        animate={fadeContent ? "visible" : "hidden"}
      >
        {/* Top Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <img
              src={workingBeach}
              alt="Relaxing"
              className="h-32 w-auto drop-shadow-lg"
            />
          </div>

          <h1 className="text-white font-extrabold text-6xl">AI Assistance</h1>
          <div className="absolute left-1/2 -translate-x-1/2 w-[60%] h-[15%] rounded-full bg-linear-to-br from-brand-primary to-destructive blur-[80px] pointer-events-none -z-10"></div>

          <p className="text-lg font-normal text-white">
            Experience the future of assessments with your own AI assistant!
          </p>
        </div>

        {/* Grid Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-full h-full rounded-full bg-linear-to-br from-brand-primary to-destructive blur-[120px] pointer-events-none -z-10"></div>

          {/* Row 1: ScoreCard (Left 3-4 cols) & RankUpAI (Right 8-9 cols) */}
          <motion.div
            className="md:col-span-4 flex justify-center md:justify-end items-end"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            <ScoreCard />
          </motion.div>
          <motion.div
            className="md:col-span-8"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            <RankUpAICard />
          </motion.div>

          {/* Row 2: Three Info Cards */}
          <InfoAllCard />

          {/* Row 3: Value Prop (8 cols) & Blank Cards (4 cols) */}
          <motion.div
            className="md:col-span-8"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            <div className="w-full h-full text-white/50 rounded-3xl px-6 pb-6 border-3 border-white/20 text-center backdrop-blur-xl shadow-[5px_12px_22px_4px_rgba(0,0,0,0.25)] flex flex-col items-center">
              <p className="text-white/50 text-lg font-normal mt-8">
                {" "}
                At RankUp, we use Artificial Intelligence (AI) to transform the
                way students learn, practice, and succeed. Our AI-driven system
                personalizes learning, evaluates performance instantly, and
                provides deep insights to help students and educators make
                better decisions—faster.
              </p>

              <button
                className="mt-5 h-[33px] w-[118px] rounded-[20px]   text-muted-foreground
                                                    text-lg
                                                    font-semibold
                                                    backdrop-blur-md

                                                    shadow-[5px_12px_22px_rgba(0,0,0,0.25)]
                                                    [box-shadow:5px_12px_22px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(255,255,255,0.25)]

                                                    transition-all duration-300
                                                    hover:bg-white/10
                                                    hover:scale-[1.02]
                                                    active:scale-[0.98] cursor-pointer"
              >
                Generate
              </button>
              <div className="absolute -bottom-22 right-28 w-[23px] h-[199px] rounded-l-4xl bg-white/20 rotate-90"></div>
            </div>
          </motion.div>

          {/* Blank Cards Stack */}
          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            <motion.div
              className="flex-1 w-full backdrop-blur-xl shadow-[5px_12px_22px_4px_rgba(0,0,0,0.25)] rounded-3xl border-3 border-white/20  min-h-[140px]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
            />
            <motion.div
              className="flex-1 w-full rounded-[30px] backdrop-blur-xl shadow-[5px_12px_22px_4px_rgba(0,0,0,0.25)]
                        border-3 border-white/20 min-h-[140px]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIAssistanceSection;
