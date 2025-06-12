import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundBlobs = () => {
  const { scrollYProgress } = useScroll();

  const blob1Y = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const blob1X = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-150%']);
  const blob2X = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const blob3Y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const blob3X = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-60">
      <motion.div
        style={{ y: blob1Y, x: blob1X }}
        className="absolute -top-1/3 left-1/4 w-[40vw] h-[40vw] max-w-lg max-h-lg bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        style={{ y: blob2Y, x: blob2X }}
        className="absolute top-1/2 right-1/4 w-[35vw] h-[35vw] max-w-md max-h-md bg-secondary/5 rounded-full blur-3xl"
         animate={{
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -5
        }}
      />
      <motion.div
        style={{ y: blob3Y, x: blob3X }}
        className="absolute bottom-0 left-1/3 w-[30vw] h-[30vw] max-w-sm max-h-sm bg-accent/5 rounded-full blur-3xl"
         animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -10
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;