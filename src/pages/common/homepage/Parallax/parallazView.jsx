import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxLanding() {
  const { scrollYProgress } = useScroll();

  const layer1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const layer2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const layer3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const layer4 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const layer5 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div className="relative h-[158vh] overflow-hidden bg-transparent">
      {/* BACK WAVES */}
      <motion.div
        style={{ y: layer1 }}
        className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-[url('/Parallax/Layer01.svg')] bg-no-repeat bg-bottom "
      />

      <motion.div
        style={{ y: layer2 }}
        className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-[url('/Parallax/Layer02.svg')] bg-no-repeat bg-bottom "
      />

      {/* TEXT */}
      <motion.div
        style={{ y: layer3 }}
        className="absolute top-[20vh] bottom-0 left-0 right-0 z-30 flex items-start justify-center pt-16"
      >
        <h1 className="text-black text-6xl font-bold drop-shadow-xl">
          Parallax Landing Page
        </h1>
      </motion.div>

      {/* FRONT WAVES */}
      <motion.div
        style={{ y: layer4 }}
        className="absolute top-0 bottom-0 left-0 right-0 z-40 bg-[url('/Parallax/Layer03.svg')] bg-no-repeat bg-bottom "
      />

      <motion.div
        style={{ y: layer5 }}
        className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-[url('/Parallax/Layer04.svg')] bg-no-repeat bg-bottom "
      />

      {/* SCROLL CONTENT */}
      <div className="relative z-50 mt-[120vh] text-center text-white">
        <p className="text-xl max-w-xl mx-auto">
          Parallax waves start from 60% viewport height.
        </p>
      </div>
    </div>
  );
}
