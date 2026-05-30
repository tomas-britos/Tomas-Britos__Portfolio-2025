import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

const PROJECT_KEYS = ['workvalue', 'coffeeshop', 'inergio', 'prototype'];

const projectsData = [
  {
    title: "WorkValue Calculator",
    tech: ["React", "Vite", "Sass"],
    link: "https://tomas-britos.github.io/WorkValue-Calculator/",
  },
  {
    title: "CoolCoffeeShop",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://coolcoffeshop.vercel.app/",
  },
  {
    title: "Inergio Ingeniería - Energía Renovable",
    tech: ["React", "SCSS", "Redux"],
    link: "https://inergio.online",
  },
  {
    title: "Prototipo - Presupuestador de alquiler de productos",
    tech: ["Figma", "Material Design 3", "Figma Dev"],
    link: "https://www.figma.com/community/file/1479662643465295035",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-padding px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-primary">{t('projects.heading')}</span>
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('projects.subtitle')}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={t(`projects.items.${PROJECT_KEYS[index]}.desc`)}
              tech={project.tech}
              category={t(`projects.items.${PROJECT_KEYS[index]}.category`)}
              delay={0.3 + index * 0.1}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
