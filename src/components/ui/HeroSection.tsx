'use client';

import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { ExternalLink, Mail, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const roles = useMemo(
    () => [t('hero.role1'), t('hero.role2'), t('hero.role3')],
    [t]
  );

  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setCurrentRole(currentFullText.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCurrentRole(currentFullText.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-white dark:bg-gray-950 pt-20 overflow-hidden pb-10">
      <motion.div
        style={{ y: bgY }}
        className="absolute top-20 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <motion.div style={{ y: contentY }} className="max-w-4xl space-y-8 text-center md:text-left">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center md:justify-start gap-3"
          >
            <span className="h-px w-8 bg-teal-500 hidden md:block"></span>
            <p className="font-mono text-sm md:text-base font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
              {t('hero.greeting')}
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black tracking-tight text-gray-900 dark:text-white"
            >
              {t('hero.name')}<span className="text-teal-500">.</span>
            </motion.h1>

            <div className="flex justify-center md:justify-start items-center gap-3 text-2xl md:text-6xl font-bold text-gray-400">
              <h2 className="min-h-[1.2em] flex items-center">
                <span className="text-gray-700 dark:text-gray-300">{currentRole}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[3px] md:w-[5px] h-[0.8em] bg-teal-500 ml-2"
                />
              </h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            {t('hero.description')}
          </motion.p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gray-950 dark:bg-teal-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95"
            >
              {t('hero.viewProjects')}
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-gray-200 dark:border-gray-800 px-8 py-4 font-bold text-gray-900 dark:text-white transition-all hover:border-teal-500"
            >
              {t('hero.contact')}
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Scroll</span>
        <ChevronDown className="w-5 h-5 text-teal-500 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;