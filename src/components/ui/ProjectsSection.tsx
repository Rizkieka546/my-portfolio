'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      name: t('projects.project1.name'),
      description: t('projects.project1.description'),
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'],
      demo: 'https://nextjs-pos-pearl.vercel.app',
      github: 'https://github.com/Rizkieka546/nextjs-pos',
      image: '/projects/dashboard-pos.png',
    },
    {
      name: t('projects.project2.name'),
      description: t('projects.project2.description'),
      tech: ['Laravel', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      demo: '#',
      github: 'https://github.com/Rizkieka546/project_revository',
      image: '/projects/dashboard-inventori.png',
    },
    {
      name: t('projects.project3.name'),
      description: t('projects.project3.description'),
      tech: ['Laravel', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      demo: '#',
      github: 'https://github.com/Rizkieka546/laravel-POS-SkyMarket',
      image: '/projects/dashboard-skymarket.png',
    },
    {
      name: t('projects.project4.name'),
      description: t('projects.project4.description'),
      tech: ['React', 'Tailwind CSS', 'Public API'],
      demo: 'https://weather-app-sederhana.vercel.app/',
      github: 'https://github.com/Rizkieka546/weather-app-sederhana',
      image: '/projects/weather.png',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="font-mono text-teal-400 text-xl">03.</span>
            {t('projects.title')}
            <span className="flex-1 h-px bg-border hidden md:block" />
          </h2>
          <p className="mt-4 max-w-xl text-black dark:text-white">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* IMAGE */}
                  <div
                    className={`md:col-span-7 ${
                      isReversed ? 'md:order-2' : ''
                    }`}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg group-hover:shadow-2xl transition-shadow">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-teal-400/10 z-10" />

                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />

                      <div className="absolute inset-0 bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    </div>
                  </div>

                  {/* INFO */}
                  <div
                    className={`md:col-span-5 ${
                      isReversed ? 'md:order-1 md:text-right' : ''
                    }`}
                  >
                    <p className="font-mono text-teal-400 text-sm mb-2">
                      Featured Project
                    </p>

                    <h3 className="text-2xl font-bold mb-4 transition-colors group-hover:text-teal-400">
                      {project.name}
                    </h3>

                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-border mb-4">
                      <p className="text-sm leading-relaxed text-black dark:text-white">
                        {project.description}
                      </p>
                    </div>

                    <div
                      className={`flex flex-wrap gap-2 mb-4 ${
                        isReversed ? 'md:justify-end' : ''
                      }`}
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`flex gap-4 ${
                        isReversed ? 'md:justify-end' : ''
                      }`}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="text-black dark:text-white hover:text-teal-400"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>

                      {project.demo !== '#' && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2 }}
                          className="text-black dark:text-white hover:text-teal-400"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
