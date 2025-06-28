import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const SkillCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      className="group relative p-6 glassmorphism glassmorphism-hover transition-all duration-300 text-center"
    >
      <div className="flex justify-center mb-4">
        <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-subheading text-foreground mb-2">{title}</h3>
      <p className="text-xs text-muted-foreground font-body">{description}</p>
    </motion.div>
  );
};

export default SkillCard;