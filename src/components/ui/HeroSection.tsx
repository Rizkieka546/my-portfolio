'use client';

import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { ExternalLink, Mail, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  // Efek parallax halus untuk elemen background saat scroll
  const bgY = useTransform(scrollY, [0, 500], [0, 200]);

  const roles = useMemo(
    () => [t('hero.role1'), t('hero.role2'), t('hero.role3')],
    [t]
  );

  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Logic Typing yang lebih smooth (bisa mengetik dan menghapus)
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      const currentFullText = roles[roleIndex];

      if (!isDeleting && charIndex < currentFullText.length) {
        setCurrentRole(currentFullText.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentFullText.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          // Pause di akhir kata sebelum menghapus
          setTimeout(() => { }, pauseTime);
        } else {
          // Ganti ke kata berikutnya setelah selesai menghapus
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-white dark:bg-gray-950 pt-20 overflow-hidden pb-5">
      {/* Background Ornaments */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-20 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute bottom-10 -left-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="max-w-3xl space-y-8 text-center md:text-left">

          {/* Tagline / Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-3"
          >
            <span className="h-px w-8 bg-teal-500 hidden md:block"></span>
            <p className="font-mono text-sm md:text-base font-medium text-teal-600 dark:text-teal-400 tracking-wider">
              {t('hero.greeting')}
            </p>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-8xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              {t('hero.name')}
              <span className="text-teal-500">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center md:justify-start items-center gap-3 text-2xl md:text-5xl font-bold text-gray-500 dark:text-gray-400"
            >
              <h2 className="min-h-[1.2em]">
                {currentRole}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: [1, 0, 0, 1]
                  }}
                  className="inline-block w-[3px] h-[0.9em] bg-teal-500 ml-1 align-middle"
                />
              </h2>
            </motion.div>
          </div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
          >
            <motion.button
              onClick={() => scrollTo('#projects')}
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gray-900 dark:bg-teal-500 px-8 py-4 font-semibold text-white transition-all hover:shadow-[0_10px_20px_rgba(20,184,166,0.3)] dark:hover:bg-teal-400"
            >
              {t('hero.viewProjects')}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 dark:border-gray-800 px-8 py-4 font-semibold text-gray-900 dark:text-white transition-all hover:border-teal-500 hover:text-teal-500"
            >
              {t('hero.contact')}
              <Mail className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-teal-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;