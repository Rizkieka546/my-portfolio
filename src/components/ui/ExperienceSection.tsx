"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const experiences = [
    {
      title: t("experience.exp1.title"),
      company: t("experience.exp1.company"),
      period: t("experience.exp1.period"),
      description: t("experience.exp1.description"),
      skills: ["React", "Next.js", "Tailwind"],
    },
    {
      title: t("experience.exp2.title"),
      company: t("experience.exp2.company"),
      period: t("experience.exp2.period"),
      description: t("experience.exp2.description"),
      skills: ["Laravel", "MySQL", "PHP"],
    },
    {
      title: t("experience.exp3.title"),
      company: t("experience.exp3.company"),
      period: t("experience.exp3.period"),
      description: t("experience.exp3.description"),
      skills: ["Figma", "UI/UX", "JavaScript"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-white dark:bg-gray-950 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-gray-900 dark:text-white">
            <span className="font-mono text-teal-500 text-xl md:text-2xl">
              04.
            </span>
            {t("experience.title")}
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4 hidden md:block" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-lg text-lg">
            {t("experience.subtitle") ||
              "Jejak karir dan kontribusi saya di dunia profesional."}
          </p>
        </motion.div>
        <div className="relative ml-4 md:ml-8 pl-8 md:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 dark:bg-gray-800" />
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-teal-500 z-0"
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 z-10 group-hover:border-teal-500 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-teal-500 transition-colors" />
                </div>
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors tracking-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm md:text-base">
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-xs font-mono w-fit shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-teal-500" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900/50 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 group-hover:shadow-xl group-hover:shadow-teal-500/5 transition-all duration-500 group-hover:border-teal-500/20">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills?.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-bold px-2.5 py-1 bg-teal-500/5 text-teal-600 dark:text-teal-400 rounded-lg border border-teal-500/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default ExperienceSection;