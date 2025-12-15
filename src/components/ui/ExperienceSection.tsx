"use client";

import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

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
      className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="font-mono text-teal-500 text-xl">04.</span>
            {t("experience.title")}
            <span className="flex-1 h-px bg-gray-300 ml-4 hidden md:block" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 w-4 h-4 bg-teal-500 rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-gray-50 dark:ring-gray-900" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg group">
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 1 ? "md:justify-end" : ""
                      }`}
                    >
                      <Briefcase className="w-5 h-5 text-teal-500" />
                      <span className="font-mono text-sm text-teal-500">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-teal-500 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div
                  className={index % 2 === 0 ? "hidden md:block" : "hidden md:block md:order-1"}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
