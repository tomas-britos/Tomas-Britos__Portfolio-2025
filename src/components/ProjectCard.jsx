import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { ExternalLink, Briefcase } from 'lucide-react';

const ProjectCard = ({ title, description, tech, delay = 0, category, link }) => {
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden p-6 glassmorphism glassmorphism-hover transition-all duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => link && window.open(link, '_blank')}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-subheading text-foreground mb-1">{title}</h3>
          {category && <span className="text-xs font-caption text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">{category}</span>}
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0 ml-2" />
      </div>
      <p className="text-sm text-muted-foreground mb-auto font-body leading-relaxed flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;