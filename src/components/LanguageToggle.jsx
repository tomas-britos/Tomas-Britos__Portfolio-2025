import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageToggle = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('en') ? 'en' : 'es';

  const toggle = () => {
    const next = current === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
    document.documentElement.setAttribute('lang', next);
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border/50 hover:border-primary/50 hover:bg-foreground/5 transition-all duration-300 glassmorphism ${className}`}
      title={current === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Languages className="w-3.5 h-3.5" />
      <span className="flex gap-1">
        <span className={current === 'es' ? 'text-primary font-semibold' : 'text-muted-foreground'}>ES</span>
        <span className="text-muted-foreground">|</span>
        <span className={current === 'en' ? 'text-primary font-semibold' : 'text-muted-foreground'}>EN</span>
      </span>
    </button>
  );
};

export default LanguageToggle;
