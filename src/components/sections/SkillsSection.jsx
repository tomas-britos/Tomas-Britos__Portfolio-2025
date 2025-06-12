import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SkillCard from '@/components/SkillCard';
import { Code, Layers, PenTool, Database, GitMerge, Settings } from 'lucide-react';

const skillsData = [
  { icon: Code, title: "HTML & CSS/SCSS", description: "Maquetación semántica, responsive design, preprocesadores CSS.", delay: 0 },
  { icon: Layers, title: "JavaScript & React", description: "ES6+, DOM, componentes, estado, hooks, Redux/Context API.", delay: 0.1 },
  { icon: PenTool, title: "Diseño UX/UI & Figma", description: "Prototipado, wireframing, user flows, diseño de interfaces.", delay: 0.2 },
  { icon: Database, title: "Ruby on Rails (Básico)", description: "Conceptos MVC, REST APIs, ActiveRecord.", delay: 0.3 },
  { icon: GitMerge, title: "Control de Versiones", description: "Git, GitHub, branching, pull requests.", delay: 0.4 },
  { icon: Settings, title: "Herramientas & Metodologías", description: "Webpack, npm/yarn, Agile, Scrum, Bem.", delay: 0.5 },
];

const SkillsSection = () => {
  return (
    <AnimatedSection className="section-padding px-4 bg-background/70" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-secondary">Mis Habilidades</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tecnologías y herramientas que utilizo en mi día a día.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={0.3 + skill.delay}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;