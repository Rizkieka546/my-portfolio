'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      name: t('projects.project1.name'),
      description: t('projects.project1.description'),
      tech: ['React', 'Next.js', 'TS', 'Tailwind', 'Zustand'],
      demo: 'https://nextjs-pos-pearl.vercel.app',
      github: 'https://github.com/Rizkieka546/nextjs-pos',
      image: '/projects/dashboard-pos.png',
    },
    {
      name: t('projects.project2.name'),
      description: t('projects.project2.description'),
      tech: ['Laravel', 'JS', 'Tailwind', 'MySQL'],
      demo: '#',
      github: 'https://github.com/Rizkieka546/project_revository',
      image: '/projects/dashboard-inventori.png',
    },
    {
      name: t('projects.project3.name'),
      description: t('projects.project3.description'),
      tech: ['Laravel', 'JS', 'Tailwind', 'MySQL'],
      demo: '#',
      github: 'https://github.com/Rizkieka546/laravel-POS-SkyMarket',
      image: '/projects/dashboard-skymarket.png',
    },
    {
      name: t('projects.project4.name'),
      description: t('projects.project4.description'),
      tech: ['React', 'Tailwind', 'Public API'],
      demo: 'https://weather-app-sederhana.vercel.app/',
      github: 'https://github.com/Rizkieka546/weather-app-sederhana',
      image: '/projects/weather.png',
    },
    {
      name: t('projects.project5.name'),
      description: t('projects.project5.description'),
      tech: ['Next.Js', 'React', 'Tailwind', 'TS'],
      demo: 'https://landing-page-flowtask.vercel.app/',
      github: 'https://github.com/Rizkieka546/landing-page-flowtask',
      image: '/projects/flowtask.png',
    },
    {
      name: t('projects.project6.name'),
      description: t('projects.project6.description'),
      tech: ['Next.Js', 'React', 'Python','Tailwind', 'TS'],
      demo: 'https://frontend-sales-dashboard.vercel.app/',
      github: 'https://github.com/Rizkieka546/frontend-sales-dashboard',
      image: '/projects/sales-dashboard.png',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Modern Header Style */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-500/10 rounded-lg">
              <Code2 className="text-teal-500 w-6 h-6" />
            </div>
            <span className="font-mono text-teal-500 text-sm tracking-widest font-bold">03. {t('projects.title') || "WORKS"}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t('projects.title')}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
            {t('projects.subtitle') || "Pilihan proyek yang menunjukkan keahlian saya dalam membangun solusi web yang modern, cepat, dan fungsional."}
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-gray-50/50 dark:bg-gray-900/40 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800/50 hover:border-teal-500/30 transition-all duration-500"
            >
              {/* Image with Overlay Actions */}
              <div className="relative aspect-[16/10] overflow-hidden m-3 rounded-[1.5rem]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                
                {/* Actions Overlay */}
                <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github} 
                    target="_blank" 
                    className="p-3 bg-white text-gray-900 rounded-full shadow-xl hover:bg-teal-500 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  {project.demo !== '#' && (
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo} 
                      target="_blank" 
                      className="p-3 bg-white text-gray-900 rounded-full shadow-xl hover:bg-teal-500 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 pt-2 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                   <Layers className="w-4 h-4 text-teal-500" />
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((item) => (
                    <span 
                      key={item} 
                      className="text-[10px] font-bold px-2.5 py-1 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;