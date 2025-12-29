"use client";

import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: t("contact.email") || "Email",
      value: "reka48644@gmail.com",
      href: "mailto:reka48644@gmail.com",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Github,
      label: t("contact.github") || "Github",
      value: "Rizkieka546",
      href: "https://github.com/Rizkieka546",
      color: "bg-gray-500/10 text-gray-500",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin") || "Linkedin",
      value: "Rizki Eka",
      href: "#",
      color: "bg-sky-500/10 text-sky-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white dark:bg-gray-950 overflow-hidden relative"
      ref={ref}
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 text-xs font-mono mb-4"
          >
            <MessageSquare className="w-3 h-3" />
            05. {t("contact.title")}
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t("contact.title") || "Mari Terhubung."}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle") || "Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda."}
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-8 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-teal-500 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 rounded-2xl ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <contact.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">{contact.label}</span>
              <span className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">{contact.value}</span>
            </motion.a>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="mailto:reka48644@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 dark:bg-teal-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-teal-500/20 transition-all duration-300"
          >
            {t("contact.cta") || "Kirim Pesan"}
            <Send className="w-5 h-5" />
          </motion.a>
          
          <p className="mt-8 text-sm text-gray-400 font-mono">
            Dibuat dengan ❤️ oleh {t("hero.name")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;