import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-8 px-4 border-t border-border/50 glassmorphism rounded-none"
      style={{ borderRadius: 'var(--radius) var(--radius) 0 0' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground font-caption text-sm">
          © {new Date().getFullYear()} Tomás Britos. Todos los derechos reservados.
        </p>
        <p className="text-muted-foreground font-caption text-xs mt-1">
          Diseñado con React y Tailwind CSS. Maquetado con IA: <a className='hover:text-primary transition-colors' href='https://www.hostinger.com/ar/horizons?trk=brand_horizons&utm_campaign=Brand-Phrase|NT:Se|LO:AR&utm_medium=ppc&gad_source=1&gad_campaignid=1465024036&gbraid=0AAAAADMy-hY8TlAeMu5NRR7KkVZ6jrotz&gclid=CjwKCAjwpMTCBhA-EiwA_-MsmVU6OB09odbHU6Fc9r47mS7W6jYYM5ov4YYYOWjwWyqYwl5NpPNU0BoCH8UQAvD_BwE' target='_blank'>Hostinger Horizons</a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;