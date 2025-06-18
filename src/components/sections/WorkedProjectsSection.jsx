import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectLabel from "@/components/ProjectLabel";

const workedProjects = [
  {
    name: "Droguería 20 de Junio",
    link: "https://www2.drogueria20dejunio.com.ar",
  },
  {
    name: "WebExperto Sitio Institucional",
    link: "https://web-experto.com",
  },
  {
    name: "Lucy Anderson",
    link: "https://www.lucyanderson.com.ar",
  },
  {
    name: "Talkiu - Plataforma de negocios online",
    link: "https://www.talkiu.com/",
  },
  {
    name: "Tento Helados",
    link: "https://tentohelados.com.ar",
  },
  {
    name: "Glassware Presupuestador",
    link: "https://glassware.fontela.com.ar",
  },
  {
    name: "Smart Helados",
    link: "https://experienciasmart.com.ar",
  },
  {
    name: "Northland Professional",
    link: "https://www.northland.com.ar",
  },
  {
    name: "Openfarma Perfumeria",
    link: "https://finanzas-app.com",
  },
  {
    name: "Bajo Cero",
    link: "https://www.bajocerohelados.com.ar",
  },
  {
    name: "Entre otros ...",
    
  },
];

const WorkedProjectsSection = () => {
  return (
    <AnimatedSection className="section-padding px-4" id="workedProjects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-primary">
            Proyectos donde participé
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dado que mi carrera comenzó directamente en una empresa, he tenido la
          oportunidad de participar en una variedad de proyectos. Mi aporte fue
          principalmente en diseño, prototipado y fixes visuales. Estos son
          algunos de ellos:
        </motion.p>

        <div className="flex flex-wrap mt-12 workedProjectsContainer">
          {workedProjects.map((project) => (
            <ProjectLabel
              key={project.link}
              name={project.name}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WorkedProjectsSection;
