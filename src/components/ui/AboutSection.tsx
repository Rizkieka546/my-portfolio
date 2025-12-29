'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-white dark:bg-gray-950 py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500/10 to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            <span className="font-mono text-teal-500 text-xl md:text-2xl">01.</span>
            {t('about.title')}
            <span className="hidden sm:block flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          <div className="md:col-span-3 space-y-6">
            {[t('about.p1'), t('about.p2'), t('about.p3')].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              >
                {text}
              </motion.p>
            ))}
            
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 relative group w-full max-w-[300px] mx-auto md:ml-auto"
          >
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-teal-500/20 shadow-2xl transition-all duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3">
              <Image
                src="/profile/eka_polos.jpg"
                alt="Profile Photo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-teal-500/20 group-hover:bg-transparent transition-all duration-500" />
            </div>

            <div className="absolute inset-0 border-2 border-teal-500 rounded-2xl translate-x-5 translate-y-5 z-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
            
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[radial-gradient(#14b8a6_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;