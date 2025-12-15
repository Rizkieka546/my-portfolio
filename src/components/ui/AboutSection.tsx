'use client';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-gray-900/50 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="font-mono text-teal-500 text-xl">01.</span>
            {t('about.title')}
            <span className="flex-1 h-px bg-border ml-4 hidden md:block" />
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Text */}
          <div className="md:col-span-2 space-y-8">
            {[t('about.p1'), t('about.p2'), t('about.p3')].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <div className="aspect-square rounded-xl bg-gradient-to-br from-teal-100 to-teal-300 dark:from-teal-900/30 dark:to-teal-700/30 overflow-hidden relative shadow-lg transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-transparent dark:from-teal-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-extrabold text-teal-500/20 dark:text-teal-400/20 select-none">
                  REH
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-teal-500/20 rounded-xl translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
