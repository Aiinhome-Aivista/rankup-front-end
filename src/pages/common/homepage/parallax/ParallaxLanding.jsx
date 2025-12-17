import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MiddleSection from "../ui/MiddleSection";
import TopMiddleSection from "../ui/TopMiddleSection";
import DraggableCardsSection from "../ui/DraggableCardsSection";
import fun from "../../../../assets/having-fun.svg";
import codingImage from "../../../../assets/coding-a-website.svg";
import studying from "../../../../assets/student-studying.svg";

export default function ParallaxLanding() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const layer1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const layer2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const layer3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const layer4 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const layer5 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <>
      {/* PARALLAX SECTION */}
      <section
        ref={sectionRef}
        className="relative h-[180vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #dcdbfc 66.67%, #514cf1 66.67%)",
        }}
      >
        <div className="absolute -right-5 -top-2 hidden lg:block w-72 opacity-90 hover:scale-105 transition-transform duration-500 z-1">
          <img
            src={studying}
            alt="Student studying"
            className="w-full h-auto drop-shadow-lg"
          />
        </div>
        {/* WAVES */}
        <motion.div
          style={{ y: layer1 }}
          className="absolute inset-0 z-10 bg-[url('/Parallax/Layer01.svg')] bg-no-repeat bg-bottom"
        />

        <motion.div
          style={{ y: layer2 }}
          className="absolute inset-0 z-20 bg-[url('/Parallax/Layer02.svg')] bg-no-repeat bg-bottom"
        />
        <div className="absolute left-[2%] md:left-10 top-[30vh] z-5 w-40 md:w-64 opacity-90 hover:scale-105 transition-transform duration-500">
          <img
            src={codingImage}
            alt="Design and code"
            className="w-full h-auto drop-shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center text-center absolute top-[30vh] inset-x-0 z-40">
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-600">
            Next Generation Assessment <br /> Platform For Every School
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mt-6">
            Empower educators, engage students, and improve learning outcomes
          </p>
        </div>
        <div className="absolute right-[2%]  md:right-10 top-[25%] z-25 w-48 md:w-72 opacity-90 hover:scale-105 transition-transform duration-500">
          <img
            src={fun}
            alt="Students having fun"
            className="w-full h-auto drop-shadow-lg"
          />
        </div>

        {/* TEXT */}
        <motion.div
          style={{ y: layer3 }}
          className="absolute top-[40vh] inset-x-0 z-30 flex flex-col items-center text-center px-4"
        >
          {/* <div className="flex flex-col items-center text-center ">
            <h1 className="text-5xl md:text-6xl font-bold text-indigo-600">
              Next Generation Assessment <br /> Platform For Every School
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mt-6">
              Empower educators, engage students, and improve learning outcomes
            </p>
          </div> */}
        </motion.div>

        <motion.div
          style={{ y: layer4 }}
          className="absolute inset-0 z-40 bg-[url('/Parallax/Layer03.svg')] bg-no-repeat bg-bottom"
        />

        <motion.div
          style={{ y: layer5 }}
          className="absolute inset-0 z-50 bg-[url('/Parallax/Layer04.svg')] bg-no-repeat bg-bottom"
        />
      </section>

      {/* NORMAL CONTENT FLOW */}

      <DraggableCardsSection />

      <TopMiddleSection />

      <MiddleSection />
    </>
  );
}
