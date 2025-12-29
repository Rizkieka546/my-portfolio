'use client';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

// Data dikategorikan agar lebih terstruktur
const skillCategories = [
  {
    title: 'Frontend & UI',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Boostrap','Framer Motion', 'HTML/CSS', 'Laravel Blade'],
  },
  {
    title: 'Backend & Logic',
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

  // Varian animasi untuk container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-gray-900 dark:text-white">
            <span className="font-mono text-teal-500 text-xl">02.</span>
            {t('skills.title')}
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4 hidden md:block" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mt-4 leading-relaxed">
            {t('skills.subtitle') || "Berikut adalah beberapa teknologi dan alat yang sering saya gunakan untuk membangun solusi digital yang efisien dan estetis."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* KIRI: Core Skills (2 Kolom) */}
          <div className="lg:col-span-2 space-y-10">
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400 mb-6 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-teal-500/30"></span>
                  {category.title}
                </h3>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                          <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                            {skill}
                          </span>
                        </div>
                        {/* Opsional: Badge kecil untuk memberi kesan expert */}
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                          Verified
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* KANAN: Tools & Practices (1 Kolom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1 p-8 bg-gray-100/50 dark:bg-gray-800/30 rounded-3xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm self-start"
          >
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6">
              Tools & Daily Workflow
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  whileHover={{ y: -3, backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-xl border border-gray-200 dark:border-gray-700 hover:text-teal-500 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
            
            {/* Dekorasi tambahan untuk mengisi ruang kosong */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-500 italic leading-relaxed">
                "Saya percaya bahwa alat terbaik adalah yang membantu kita bekerja lebih cerdas, bukan lebih keras."
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default SkillsSection;