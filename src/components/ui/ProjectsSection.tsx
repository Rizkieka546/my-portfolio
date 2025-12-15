'use client';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      name: t('projects.project1.name'),
      description: t('projects.project1.description'),
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      demo: '#',
      github: '#',
      image: 'dashboard',
    },
    {
      name: t('projects.project2.name'),
      description: t('projects.project2.description'),
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      demo: '#',
      github: '#',
      image: 'tasks',
    },
    {
      name: t('projects.project3.name'),
      description: t('projects.project3.description'),
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'MDX'],
      demo: '#',
      github: '#',
      image: 'portfolio',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="font-mono text-teal-400 text-xl">03.</span>
            {t('projects.title')}
            <span className="flex-1 h-px bg-border ml-4 hidden md:block" />
          </h2>
          <p className="text-black dark:text-white max-w-xl mt-4">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`grid md:grid-cols-12 gap-8 items-center`}>
                {/* Project Image */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500 bg-gray-100 dark:bg-gray-800 aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-teal-400/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="w-16 h-16 text-teal-400/30" />
                    </div>
                    <div className="absolute inset-0 bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Project Info */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                  <p className="font-mono text-teal-400 text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-border mb-4">
                    <p className="text-black dark:text-white text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-black dark:text-white px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <motion.a
                      href={project.github}
                      className="text-black dark:text-white hover:text-teal-400 transition-colors"
                      whileHover={{ y: -2 }}
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="text-black dark:text-white hover:text-teal-400 transition-colors"
                      whileHover={{ y: -2 }}
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
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
