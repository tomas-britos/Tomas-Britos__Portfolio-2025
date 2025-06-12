import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-8 px-4 border-t border-border/50 glassmorphism rounded-none"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground font-caption text-sm">
          © {new Date().getFullYear()} Nombre Apellido. Todos los derechos reservados.
        </p>
        <p className="text-muted-foreground font-caption text-xs mt-1">
          Diseñado con <span className="text-primary">React</span> y <span className="text-secondary">Tailwind CSS</span>. Inspirado en el Glassmorphism.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;