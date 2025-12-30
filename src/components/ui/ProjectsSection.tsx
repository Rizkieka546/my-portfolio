'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Code2, Layers, Filter } from 'lucide-react';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [filter, setFilter] = useState('All');

  const projects = useMemo(() => [
    {
      key: 'project1',
      name: t('projects.project1.name'),
      description: t('projects.project1.description'),
      category: 'Frontend',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Zustand'],
      demo: 'https://nextjs-pos-pearl.vercel.app',
      github: 'https://github.com/Rizkieka546/nextjs-pos',
      image: '/projects/dashboard-pos.png',
    },
    {
      key: 'project2',
      name: t('projects.project2.name'),
      description: t('projects.project2.description'),
      category: 'Frontend',
      tech: ['React', 'Tailwind', 'Public API'],
      demo: 'https://weather-app-sederhana.vercel.app/',
      github: 'https://github.com/Rizkieka546/weather-app-sederhana',
      image: '/projects/weather.png',
    },
    {
      key: 'project3',
      name: t('projects.project3.name'),
      description: t('projects.project3.description'),
      category: 'Frontend',
      tech: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
      demo: 'https://landing-page-flowtask.vercel.app/',
      github: 'https://github.com/Rizkieka546/landing-page-flowtask',
      image: '/projects/flowtask.png',
    },
    {
      key: 'project4',
      name: t('projects.project4.name'),
      description: t('projects.project4.description'),
      category: 'Backend',
      tech: ['Next.js', 'React', 'Python', 'Tailwind', 'TypeScript'],
      demo: 'https://frontend-sales-dashboard.vercel.app/',
      github: 'https://github.com/Rizkieka546/frontend-sales-dashboard',
      image: '/projects/sales-dashboard.png',
    },
    {
      key: 'project5',
      name: t('projects.project5.name'),
      description: t('projects.project5.description'),
      category: 'Backend',
      tech: ['Laravel', 'JavaScript', 'Tailwind', 'MySQL'],
      demo: '#',
      github: 'https://github.com/Rizkieka546/project_revository',
      image: '/projects/dashboard-inventori.png',
    },
    {
      key: 'project6',
      name: t('projects.project6.name'),
      description: t('projects.project6.description'),
      category: 'Backend',
      tech: ['Laravel', 'JavaScript', 'Tailwind', 'MySQL'],
      demo: '#',
      github: 'https://github.com/Rizkieka546/laravel-POS-SkyMarket',
      image: '/projects/dashboard-skymarket.png',
    },
  ], [t]);

  const filteredProjects = projects.filter(p => 
    filter === 'All' || p.category === filter
  );

  const categories = ['All', 'Frontend', 'Backend'];

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
                <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-500/10 rounded-lg">
              <Code2 className="text-teal-500 w-6 h-6" />
            </div>
            <span className="font-mono text-teal-500 text-sm tracking-widest font-bold uppercase">
              03. {t('projects.section_label') || "My Works"}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                {t('projects.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {t('projects.subtitle') || "Koleksi proyek pilihan yang menunjukkan dedikasi saya dalam menciptakan solusi web yang efisien."}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 p-1.5 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    filter === cat 
                      ? "bg-white dark:bg-gray-800 text-teal-500 shadow-sm" 
                      : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.key}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col bg-gray-50/50 dark:bg-gray-900/40 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800/50 hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-500 relative"
              >                <div className="relative aspect-[16/11] overflow-hidden m-3 rounded-[2rem]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                                    <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[3px] transition-all duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      whileHover={{ y: -5 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full shadow-xl hover:bg-teal-500 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.demo !== '#' && (
                      <motion.a
                        whileHover={{ y: -5 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full shadow-xl hover:bg-teal-500 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-7 pt-2 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">
                      {project.name}
                    </h3>
                    <Layers className="w-4 h-4 text-teal-500/50" />
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-bold px-2.5 py-1 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700 transition-colors group-hover:border-teal-500/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;