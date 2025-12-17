import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import MiddleSection from "../ui/MiddleSection";
import TopMiddleSection from "../ui/TopMiddleSection";
import DraggableCardsSection from "../ui/DraggableCardsSection";
import fun from "../../../../assets/having-fun.svg";
import codingImage from "../../../../assets/coding-a-website.svg";
import studying from "../../../../assets/student-studying.svg";

export default function ParallaxLanding() {
  const sectionRef = useRef(null);
  const draggableRef = useRef(null);
  const topMiddleRef = useRef(null);
  const middleRef = useRef(null);

  const [visibleSections, setVisibleSections] = useState({
    draggable: false,
    topMiddle: false,
    middle: false,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const layer1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const layer2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const layer3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const layer4 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const layer5 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.section;
          setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    if (draggableRef.current) observer.observe(draggableRef.current);
    if (topMiddleRef.current) observer.observe(topMiddleRef.current);
    if (middleRef.current) observer.observe(middleRef.current);

    return () => observer.disconnect();
  }, []);

  // Animation variants for fade-in effect
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start slightly below
      filter: "blur(10px)", // Add blur for premium effect
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)", // Clear and sharp
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth easing
      },
    },
  };

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

      {/* NORMAL CONTENT FLOW WITH SCROLL FADE-IN EFFECTS */}

      <div ref={draggableRef} data-section="draggable">
        <DraggableCardsSection fadeContent={visibleSections.draggable} />
      </div>

      <div ref={topMiddleRef} data-section="topMiddle">
        <TopMiddleSection fadeContent={visibleSections.topMiddle} />
      </div>

      <div ref={middleRef} data-section="middle">
        <MiddleSection fadeContent={visibleSections.middle} />
      </div>
    </>
  );
}
