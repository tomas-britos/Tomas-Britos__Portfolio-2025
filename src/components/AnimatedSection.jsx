import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;