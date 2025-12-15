'use client'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Mail } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  // Multi-role array
  const roles = [
    t('hero.role1'), 
    t('hero.role2'), 
    t('hero.role3'), 
  ];

  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect loop
  useEffect(() => {
    const typingSpeed = 100; // ms per char
    const pauseTime = 1500; // pause after full text

    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setCurrentRole(roles[roleIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        // pause before deleting
        setTimeout(() => {
          setCurrentRole('');
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, pauseTime);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex, roles]);

  const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 pt-20">
      {/* Background animated circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-teal-400 dark:text-teal-500 mb-4 text-sm md:text-base"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight bg-gradient-to-r from-teal-500 via-sky-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-600 dark:text-gray-300 mb-6 h-12"
        >
          {currentRole}
          <span className="animate-blink">|</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-12 leading-relaxed mx-auto md:mx-0"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap md:flex-nowrap gap-4 justify-center md:justify-start"
        >
          <motion.button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 bg-teal-400 text-white dark:text-gray-950 font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/30"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('hero.viewProjects')}
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-950 dark:text-white font-medium rounded-lg transition-all duration-300 hover:border-teal-400 hover:text-teal-400 backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('hero.contact')}
            <Mail className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
