import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    title: "Inergio - Energía Renovable",
    description:
      "Desarrollo frontend completo para una web de servicios de refrigeración y mantenimiento. Líder del equipo de prototipado y diseño UX/UI.",
    tech: ["React", "SCSS", "Redux"],
    category: "Business Website",
    link: "https://inergio.com.ar", // ejemplo, reemplaza por el link real
  },
  {
    title: "Prototipo - Presupuestador de alquiler de productos",
    description:
      "Prototipo utilizable de web centrada en la creación de presupuestos y reservas de alquiler de productos varios. Vistas de usuario y administrador.",
    tech: ["Figma", "Material Design 3", "Figma Dev"],
    category: "Prototype",
    link: "https://www.figma.com/community/file/1479662643465295035", // ejemplo, reemplaza por el link real
  },
];

const ProjectsSection = () => {
  return (
    <AnimatedSection className="section-padding px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-primary">Proyectos Destacados</span>
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Una selección de proyectos donde he aplicado mis habilidades como
          desarrollador e implementador Frontend y UX/UI.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              category={project.category}
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
