"use client";

import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: t("experience.exp1.title"),
      company: t("experience.exp1.company"),
      period: t("experience.exp1.period"),
      description: t("experience.exp1.description"),
    },
    {
      title: t("experience.exp2.title"),
      company: t("experience.exp2.company"),
      period: t("experience.exp2.period"),
      description: t("experience.exp2.description"),
    },
    {
      title: t("experience.exp3.title"),
      company: t("experience.exp3.company"),
      period: t("experience.exp3.period"),
      description: t("experience.exp3.description"),
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-white dark:bg-gray-950 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-gray-900 dark:text-white">
            <span className="font-mono text-teal-500 text-xl">04.</span>
            {t("experience.title")}
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4 hidden md:block" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-lg">
            {t("experience.subtitle") || "Perjalanan profesional saya sejauh ini."}
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative ml-4 md:ml-8 border-l-2 border-gray-100 dark:border-gray-800 pl-8 md:pl-12 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator (Dot) */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-2 border-teal-500 z-10 group-hover:bg-teal-500 transition-colors duration-300 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
              
              {/* Content Card */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  {/* Period Badge */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-mono w-fit">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <div className="bg-gray-50/50 dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 group-hover:border-teal-500/30 transition-all duration-300">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;