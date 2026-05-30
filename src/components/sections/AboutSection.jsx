import React from 'react';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import AnimatedSection from '@/components/AnimatedSection';
import { Award, Users, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  const AnosExperiencia = () => {
    const year = new Date().getFullYear();
    return <span>{year - 2021}</span>;
  };

  const stats = [
    { icon: Award, value: AnosExperiencia, label: t('about.stats.experience') },
    { icon: Briefcase, value: "+15", label: t('about.stats.projects') },
    { icon: Users, value: t('about.stats.designValue'), label: t('about.stats.designLabel') },
  ];

  return (
    <AnimatedSection className="section-padding px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          id="about"
          className="text-4xl md:text-5xl font-heading text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-primary">{t('about.heading')}</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Trans i18nKey="about.p1">
            Soy un desarrollador Frontend Semi-Senior experimentado en creación de interfaces de usuario para todo tipo de sitios web. 
            Apasionado por el UX Writing y la búsqueda de <b>equitatividad</b> mediante código eficiente, con el fin de entregar productos digitales de alta accesibilidad e intuitividad.
          </Trans>
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <img  
              className="rounded-lg w-full h-auto object-cover shadow-xl border border-border/30 glassmorphism p-2" 
              alt={t('about.heading')}
              src={`${import.meta.env.BASE_URL}images/profile_pic.webp`} 
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-md text-foreground leading-relaxed font-body">
              {t('about.p2')}
            </p>
            <p className="text-md text-foreground leading-relaxed font-body">
              {t('about.p3')}
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
              <p className="text-md text-muted-foreground font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
