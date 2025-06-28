import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Mail, Linkedin, Github, Send, Home } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mldnlbee");
  const handleSocialClick = (platform) => {
    let url = null;
    if (platform === "LinkedIn") {
      url = "https://www.linkedin.com/in/tomas-britos/";
    } else if (platform === "GitHub") {
      url = "https://github.com/tomas-britos";
    }
    if (url) {
      window.open(url, "_blank");
    } else {
      toast({
        title: `Reintentando dirigirte a ${platform}...`,
        description:
          "⏰ Esto podria tardar unos segundos, por favor espera. 🙏",
        variant: "default",
      });
    }
  };

  if (state.succeeded) {
    return (
      <AnimatedSection className="section-padding px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gradient-secondary">¡Mensaje enviado!</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-12 font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ¡Gracias por contactarme! Te responderé pronto.
          </motion.p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection className="section-padding px-4">
      <div className="max-w-3xl mx-auto text-center" id="contact">
        <motion.h2
          className="text-4xl md:text-5xl font-heading mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-secondary">Ponte en contacto</span>
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-12 font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ¿Estás interesado en colaborar o tienes alguna pregunta? No dudes en
          contactarme.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 glassmorphism p-8 md:p-10 text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2.5 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="Tu Nombre"
              />
              <ValidationError
                prefix="Nombre"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2.5 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="tu@email.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full px-4 py-2.5 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="Tu mensaje..."
            ></textarea>
            <ValidationError
              prefix="Mensaje"
              field="message"
              errors={state.errors}
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 16px 2px rgba(99,102,241,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r duration-300 flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60 font-semibold from-primary hover:opacity-90 justify-center px-6 py-3 rounded-md subtle-glow-hover text-base text-primary-foreground to-accent transition-opacity w-full"
            disabled={state.submitting}
          >
            <Send className="w-5 h-5 mr-2.5" />
            {state.submitting ? "Enviando..." : "Enviar Mensaje"}
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-12 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            onClick={() => handleSocialClick("LinkedIn")}
            variant="outline"
            size="icon"
            className="glassmorphism glassmorphism-hover p-3 w-12 h-12 rounded-full border-border/50 hover:border-primary/50 group"
            title="Ir a mi perfil de LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Button>
          <Button
            onClick={() => handleSocialClick("GitHub")}
            variant="outline"
            size="icon"
            className="glassmorphism glassmorphism-hover p-3 w-12 h-12 rounded-full border-border/50 hover:border-secondary/50 group"
            title="Ir a mi perfil de GitHub"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
          </Button>
          <Button
            onClick={() => (window.location.href = "mailto:britosstomas@gmail.com")}
            variant="outline"
            size="icon"
            className="glassmorphism glassmorphism-hover p-3 w-12 h-12 rounded-full border-border/50 hover:border-accent/50 group"
            title="Contactarme por tu mailer"
          >
            <Mail className="group-hover:text-primary h-5 text-muted-foreground transition-colors w-5" />
          </Button>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            variant="outline"
            size="icon"
            className="glassmorphism glassmorphism-hover p-3 w-12 h-12 rounded-full border-border/50 hover:border-primary/50 group"
            title="Ir al inicio"
          >
            <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
