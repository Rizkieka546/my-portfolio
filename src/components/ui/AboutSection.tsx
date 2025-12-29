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
      {/* Dekorasi Garis Latar Belakang */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500/10 to-transparent hidden md:block" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            <span className="font-mono text-teal-500 text-xl">01.</span>
            {t('about.title')}
            <span className="hidden md:block flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Kolom Teks (60% lebar pada desktop) */}
          <div className="md:col-span-3 space-y-6 text-gray-600 dark:text-gray-400">
            {[t('about.p1'), t('about.p2'), t('about.p3')].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-base md:text-lg leading-relaxed text-black dark:text-white"
              >
                {text}
              </motion.p>
            ))}

            {/* List Keahlian Tambahan */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4 grid grid-cols-2 gap-3 font-mono text-sm text-teal-600 dark:text-teal-400"
            >
              <div className="flex items-center gap-2 italic">
                <span className="text-teal-500 font-bold">▹</span> Web Development
              </div>
              <div className="flex items-center gap-2 italic">
                <span className="text-teal-500 font-bold">▹</span> UI/UX Implementation
              </div>
              <div className="flex items-center gap-2 italic">
                <span className="text-teal-500 font-bold">▹</span> Responsive Design
              </div>
              <div className="flex items-center gap-2 italic">
                <span className="text-teal-500 font-bold">▹</span> Clean Architecture
              </div>
            </motion.div>
          </div>

          {/* Kolom Foto (40% lebar pada desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 relative group w-full max-w-[320px] mx-auto md:ml-auto"
          >
            {/* Wadah Gambar Utama */}
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 shadow-2xl transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
              <Image
                src="/profile/eka_polos.jpg"
                alt="Profile Photo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-700"
              />
              {/* Overlay Halus */}
              <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Frame Dekoratif (Border di belakang) */}
            <div className="absolute inset-0 border-2 border-teal-500 rounded-2xl translate-x-5 translate-y-5 z-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
            
            {/* Aksen Dot Grid */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:12px_12px] opacity-40 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;