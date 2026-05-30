import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Download, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/LanguageToggle";

const HeroSection = () => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/TomasBritos_FrontendDev_CV_2026.pdf";
    link.download = "TomasBritos_FrontendDev_CV_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const experienceYears = new Date().getFullYear() - 2021;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 section-padding overflow-hidden"
      id="home"
    >
      <LanguageToggle className="absolute top-6 right-6 z-20" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-3xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-heading mb-4"
        >
          <span className="block mb-2 text-muted-foreground font-normal text-2xl md:text-3xl">
            {t('hero.greeting')}
          </span>
          <span className="text-gradient-primary">{t('hero.name')}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-foreground font-subheading mb-8"
        >
          {t('hero.role')}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-md md:text-lg text-muted-foreground mb-10 leading-relaxed font-body"
        >
          {t('hero.description', { experience: experienceYears })}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: "0 0 16px 2px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={handleContactClick}
            className="bg-gradient-to-r cursor-pointer duration-300 flex font-semibold from-primary hover:opacity-80 hover:opacity-90 px-8 py-3 rounded-md subtle-glow-hover text-base text-primary-foreground to-accent transition-opacity focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2"
            size="lg"
            tabIndex={0}
            role="button"
          >
            <Mail className="w-5 h-5 mr-2.5" />
            {t('hero.cta')}
          </motion.a>
          <Button
            onClick={handleDownloadCV}
            variant="ghost"
            className="text-foreground border-border/70 hover:bg-foreground/5 hover:border-primary hover:text-foreground font-semibold py-3 px-8 rounded-md transition-all duration-300 text-base glassmorphism glassmorphism-hover"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2.5" />
            {t('hero.downloadCv')}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full glassmorphism transition-all duration-300 hover:scale-110 hover:shadow-[0_0_24px_4px_rgba(99,102,241,0.4)]"
          onClick={() => {
            const el = document.getElementById("about");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 
              140;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
