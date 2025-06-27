import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { Award, Users, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const AnosExperiencia = () => {
    const year = new Date().getFullYear();
    return <span>{year - 2021}</span>;
  };
  const stats = [
    { icon: Award, value: AnosExperiencia, label: "Años de Experiencia" },
    { icon: Briefcase, value: "15+", label: "Proyectos trabajados" },
    { icon: Users, value: "UX Centrado", label: "En el Usuario" },
  ];

  return (
    <AnimatedSection className="section-padding px-4" id="about">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-primary">Sobre mí</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Soy un desarrollador Frontend Semi-Senior experimentado en creación de interfaces de usuario para todo tipo de sitios web. 
          Apasionado por el UX Writtig y la búsqueda de <b>equitatividad</b> mediante código eficiente, con el fin de entregar productos digitales de alta accesibilidad e intuitividad.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <img  
              className="rounded-lg w-full h-auto object-cover shadow-xl border border-border/30 glassmorphism p-2" 
              alt="Foto de Tomás Britos"
             src="public/images/profile_pic.png" />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-md text-foreground leading-relaxed font-body">
              Mi trayectoria se desarrolló trabajando mayormente en proyectos E-Commerce B2B, tanto freelance como empleado para una empresa. Disfruto trabajando en equipo e iterando grupalmente para lograr la mejor solución posible. Creo que la diversidad es el punto clave en la creación de soluciones digitales equitativas y funcionales.
            </p>
            <p className="text-md text-foreground leading-relaxed font-body">
              Entendiendo el contexto global y priorizando el diseño responsivo busco constantemente optimizar la experiencia del usuario a través de textos claros, performance web y accesibilidad. Mi objetivo es construir aplicaciones que no solo se vean bien, sino que también sean cómodas de usar.
            </p>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'JavaScript', 'SCSS', 'React', 'Ruby on Rails', 'Figma'].map(skill => (
                <span key={skill} className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="p-6 glassmorphism"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <stat.icon className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="text-2xl font-subheading text-foreground">
                {typeof stat.value === 'function' ? <stat.value /> : stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-caption">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;