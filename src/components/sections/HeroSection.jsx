import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Download, ArrowDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    toast({
      title: "🚧 Descarga de CV no implementada",
      description:
        "¡Pero no te preocupes! Puedes solicitar esta funcionalidad. 🚀",
      variant: "default",
    });
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

  const AnosExperiencia = () => {
    const year = new Date().getFullYear();
    return <>{year - 2021}</>;
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 section-padding overflow-hidden"
      id="home"
    >
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
            Hola, soy
          </span>
          <span className="text-gradient-primary">Tomás Britos</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-foreground font-subheading mb-8"
        >
          Semi-senior Frontend Developer & UX/UI Designer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-md md:text-lg text-muted-foreground mb-10 leading-relaxed font-body"
        >
          Con <AnosExperiencia /> años de experiencia,
          transformo ideas digitales en interfaces de usuario intuitivas, accesibles e impactantes. Especializado en Scss y Figma.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-3 px-8 rounded-md transition-opacity duration-300 text-base subtle-glow-hover"
            size="lg"
          >
            <Mail className="w-5 h-5 mr-2.5" />
            Contáctame
          </Button>
          <Button
            onClick={handleDownloadCV}
            variant="outline"
            className="text-foreground border-border/70 hover:bg-foreground/5 hover:border-primary font-semibold py-3 px-8 rounded-md transition-all duration-300 text-base glassmorphism glassmorphism-hover"
            size="lg"
            disabled="true" // Disable until implemented
            style={{ cursor: "not-allowed" }}
          >
            <Download className="w-5 h-5 mr-2.5" />
            Descargar CV
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full glassmorphism"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
