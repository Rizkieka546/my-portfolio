'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-white dark:bg-gray-900/50 relative"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="font-mono text-teal-500 text-xl">01.</span>
            {t('about.title')}
            <span className="flex-1 h-px bg-border hidden md:block" />
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* TEXT */}
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

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
              {/* PHOTO */}
              <Image
                src="/profile/eka_polos.jpg"
                alt="Profile photo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* BORDER DECORATION */}
            <div className="absolute inset-0 rounded-xl border-2 border-teal-500/30 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
