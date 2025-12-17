import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MiddleSection from "../ui/MiddleSection";
import TopMiddleSection from "../ui/TopMiddleSection";
import DraggableCardsSection from "../ui/DraggableCardsSection";

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
        className="relative h-[160vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #dcdbfc 66.67%, #514cf1 66.67%)",
        }}
      >
        {/* WAVES */}
        <motion.div
          style={{ y: layer1 }}
          className="absolute inset-0 z-10 bg-[url('/Parallax/Layer01.svg')] bg-no-repeat bg-bottom"
        />

        <motion.div
          style={{ y: layer2 }}
          className="absolute inset-0 z-20 bg-[url('/Parallax/Layer02.svg')] bg-no-repeat bg-bottom"
        />

        {/* TEXT */}
        <motion.div
          style={{ y: layer3 }}
          className="absolute top-[20vh] inset-x-0 z-30 flex flex-col items-center text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-600">
            Next Generation Assessment <br /> Platform For Every School
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mt-6">
            Empower educators, engage students, and improve learning outcomes
          </p>
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
