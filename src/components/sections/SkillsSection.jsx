import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '@/components/AnimatedSection';
import SkillCard from '@/components/SkillCard';
import { Code, Layers, PenTool, Database, GitMerge, Settings } from 'lucide-react';

const SKILL_KEYS = ['htmlCss', 'jsReact', 'uxUi', 'ror', 'git', 'tools'];
const SKILL_ICONS = [Code, Layers, PenTool, Database, GitMerge, Settings];

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-padding px-4 bg-background/70" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gradient-secondary">{t('skills.heading')}</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('skills.subtitle')}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_KEYS.map((key, i) => (
            <SkillCard
              key={key}
              icon={SKILL_ICONS[i]}
              title={t(`skills.items.${key}.title`)}
              description={t(`skills.items.${key}.desc`)}
              delay={0.3 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
