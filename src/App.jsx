import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import WorkedProjectsSection from '@/components/sections/WorkedProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden smooth-scroll-container">
      <div className="fixed inset-0 background-grid opacity-50 z-0" />
      <BackgroundBlobs />

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl floating-light"
          style={{ opacity: 0.15 }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-secondary/5 to-primary/5 blur-3xl floating-light"
          style={{ animationDelay: '-4s', opacity: 0.1 }}
        />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WorkedProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;