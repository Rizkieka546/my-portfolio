"use client";

import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "reka48644@gmail.com",
      href: "mailto:reka48644@gmail.com",
    },
    {
      icon: Github,
      label: t("contact.github"),
      value: "github.com/Rizkieka546",
      href: "https://github.com/Rizkieka546",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "...",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="font-mono text-teal-500 text-sm">05. {t("contact.title")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{t("contact.title")}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="group flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg"
              whileHover={{ y: -4 }}
            >
              <contact.icon className="w-5 h-5 text-teal-500" />
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400">{contact.label}</p>
                <p className="font-medium group-hover:text-teal-500 transition-colors">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="mailto:reka48644@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("contact.cta")}
            <Send className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
