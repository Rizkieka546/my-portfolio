'use client';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

import { Cpu, Layout, Workflow } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend & UI',
    icon: <Layout className="w-5 h-5" />,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'HTML/CSS', 'Laravel Blade'],
  },
  {
    title: 'Backend & Logic',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['Laravel', 'PHP', 'REST API', 'MySQL', 'Python', 'MongoDB', 'Node.js'],
  }
];

const tools = [
  'VS Code', 'GitHub', 'Vercel', 'Postman', 'Figma', 'Responsive Design', 'AI Prompting', 'Railway', 'Zustand'
];

const SkillsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-white dark:bg-gray-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#14b8a6 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-gray-900 dark:text-white">
            <span className="font-mono text-teal-500 text-xl md:text-2xl">02.</span>
            {t('skills.title')}
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4 hidden md:block" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mt-4 leading-relaxed text-lg">
            {t('skills.subtitle') || "Teknologi dan alat yang saya gunakan untuk mengubah ide menjadi pengalaman digital yang responsif dan skalabel."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  className="text-xs font-bold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-8 flex items-center gap-3"
                >
                  <span className="p-2 rounded-lg bg-teal-500/10 text-teal-500">
                    {category.icon}
                  </span>
                  {category.title}
                </motion.h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="group p-4 bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 p-8 bg-teal-500/[0.03] dark:bg-teal-500/[0.02] rounded-3xl border border-teal-500/10 backdrop-blur-sm shadow-inner">
              <div className="flex items-center gap-3 mb-6">
                <Workflow className="w-5 h-5 text-teal-500" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Workflow Tools
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ y: -2, backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
                    className="px-3 py-1.5 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-600 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-800 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/40 transition-all cursor-default shadow-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-teal-500/40" />)}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 italic leading-relaxed font-serif">
                  &ldquo;Saya percaya kode yang baik bukan hanya tentang fungsionalitas, tapi juga tentang kejelasan dan kemudahan pemeliharaan.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default SkillsSection;