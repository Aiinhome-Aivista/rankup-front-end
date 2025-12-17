import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxLanding() {
  const { scrollYProgress } = useScroll();

  // Layered wave animations - each layer moves at different speed for depth
  const layer1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const layer1Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0.4]
  );
  const layer1Scale = 1.3; // Tallest

  const layer2 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const layer2Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.85, 0.5]
  );
  const layer2Scale = 1.1; // Shorter than layer 1

  const layer3 = useTransform(scrollYProgress, [0, 0.3, 1], [0, -120, 1000]);
  const layer3Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    [1, 0.5, 0]
  );
  const layer3Scale = 1.25; // Taller

  const layer4 = useTransform(scrollYProgress, [0, 1], [0, -750]);
  const layer4Opacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 0.9, 0.6]
  );
  const layer4Scale = 1.15; // Medium height

  const layer5 = useTransform(scrollYProgress, [0, 1], [0, -2500]);
  const layer5Opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 0.95, 0.7]
  );
  const layer5Scale = 1.0; // Shortest

  return (
    <div className="relative h-[160vh] overflow-hidden bg-transparent">
      {/* BACK WAVES - Slowest movement for depth */}
      <motion.div
        style={{ y: layer1, opacity: layer1Opacity, scaleY: layer1Scale }}
        className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-[url('/Parallax/Layer01.svg')] bg-no-repeat bg-bottom transition-opacity duration-300 origin-bottom"
      />

      <motion.div
        style={{ y: layer2, opacity: layer2Opacity, scaleY: layer2Scale }}
        className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-[url('/Parallax/Layer02.svg')] bg-no-repeat bg-bottom transition-opacity duration-300 origin-bottom"
      />

      {/* TEXT - Fades and moves up */}
      <motion.div
        style={{ y: layer3, opacity: layer3Opacity, scale: layer3Scale }}
        className="absolute top-[20vh] bottom-0 left-0 right-0 z-30 flex items-start justify-center pt-16"
      >
        <h1 className="text-black text-6xl font-bold drop-shadow-xl">
          Parallax Landing Page
        </h1>
      </motion.div>

      {/* FRONT WAVES - Faster movement for immersion */}
      <motion.div
        style={{ y: layer4, opacity: layer4Opacity, scaleY: layer4Scale }}
        className="absolute top-0 bottom-0 left-0 right-0 z-40 bg-[url('/Parallax/Layer03.svg')] bg-no-repeat bg-bottom transition-opacity duration-300 origin-bottom"
      />

      <motion.div
        style={{ y: layer5, opacity: layer5Opacity, scaleY: layer5Scale }}
        className="absolute top-0 bottom-0 left-0 right-0 z-44 bg-[url('/Parallax/Layer04.svg')] bg-no-repeat bg-bottom transition-opacity duration-300 origin-bottom"
      />

      {/* SCROLL CONTENT */}
      <div className="relative z-44 mt-[120vh] text-center text-white">
        <p className="text-xl max-w-xl mx-auto">
          Parallax waves start from 60% viewport height.
        </p>
      </div>
    </div>
  );
}
