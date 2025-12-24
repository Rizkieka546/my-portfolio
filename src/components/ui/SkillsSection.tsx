'use client';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const skills = [
  { name: 'React', level: 80 },
  { name: 'Next.js', level: 80 },
  { name: 'TypeScript / Javascript', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'Framer Motion', level: 80 },
  { name: 'Laravel', level: 70 },
];

const tools = [
  'VS Code',
  'GitHub',
  'Vercel',
  'AI',
  'ChatGPT',
  'Responsive Design',
];

const SkillsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-100 dark:to-gray-800 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="font-mono text-teal-500 text-xl">02.</span>
            {t('skills.title')}
            <span className="flex-1 h-px bg-gray-300 ml-4 hidden md:block" />
          </h2>
          <p className="text-black dark:text-white max-w-xl mt-4">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills with progress bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-black dark:text-white">{skill.name}</span>
                  <span className="text-black dark:text-white font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full shadow-inner"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-6 text-lg md:text-xl text-black dark:text-white">
              Tools & Practices
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="group p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-300 dark:border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm font-medium text-black dark:text-white group-hover:text-teal-400 transition-colors">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
