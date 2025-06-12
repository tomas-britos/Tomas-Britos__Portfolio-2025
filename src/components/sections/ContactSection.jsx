import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: `Redirigiendo a ${platform}...`,
      description: "🚧 Esta funcionalidad aún no está implementada. ¡Puedes solicitarla! 🚀",
      variant: "default",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado (Simulado)",
      description: "🚧 El envío real de formularios no está implementado. ¡Puedes solicitarlo! 🚀",
      variant: "default",
    });
  };

  return (
    <AnimatedSection className="section-padding px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-heading mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-secondary">Hablemos</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground mb-12 font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme.
        </motion.p>

        <motion.form 
          onSubmit={handleFormSubmit} 
          className="space-y-6 glassmorphism p-8 md:p-10 text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nombre</label>
              <input type="text" name="name" id="name" required className="w-full px-4 py-2.5 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Tu Nombre" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input type="email" name="email" id="email" required className="w-full px-4 py-2.5 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="tu@email.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
            <textarea name="message" id="message" rows="4" required className="w-full px-4 py-2.5 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Tu mensaje..."></textarea>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-opacity duration-300 text-base subtle-glow-hover">
            <Send className="w-5 h-5 mr-2.5" />
            Enviar Mensaje
          </Button>
        </motion.form>

        <motion.div 
          className="mt-12 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button onClick={() => handleSocialClick('LinkedIn')} variant="outline" size="icon" className="glassmorphism glassmorphism-hover p-3 w-12 h-12 rounded-full border-border/50 hover:border-primary/50 group">
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Button>
          <Button onClick={() => handleSocialClick('GitHub')} variant="outline" size="icon" className="glassmorphism glassmorphism-hover p-3 w-12 h-12 rounded-full border-border/50 hover:border-secondary/50 group">
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
          </Button>
          <Button onClick={() => window.location.href = 'mailto:tuemail@example.com'} variant="outline" size="icon" className="glassmorphism glassmorphism-hover p-3 w-12 h-12 rounded-full border-border/50 hover:border-accent/50 group">
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;