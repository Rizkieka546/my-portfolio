"use client";

import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, MessageSquare, Copy, Check } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: Mail,
      label: t("contact.email") || "Email",
      value: "reka48644@gmail.com",
      href: "mailto:reka48644@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Github,
      label: t("contact.github") || "Github",
      value: "Rizkieka546",
      href: "https://github.com/Rizkieka546",
      color: "text-gray-600 dark:text-gray-300",
      bgColor: "bg-gray-500/10",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin") || "Linkedin",
      value: "Rizki Eka",
      href: "https://linkedin.com/in/rizkieka", 
      color: "text-sky-600",
      bgColor: "bg-sky-500/10",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white dark:bg-gray-950 overflow-hidden relative"
      ref={ref}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold font-mono mb-6 border border-teal-500/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            05. {t("contact.title") || "GET IN TOUCH"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            {t("contact.title") || "Mari Terhubung."}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle") || "Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-gray-50/50 dark:bg-gray-900/40 rounded-[2rem] border border-gray-100 dark:border-gray-800/50 hover:border-teal-500/30 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 text-center h-full shadow-sm hover:shadow-xl hover:shadow-teal-500/5"
              >
                <div className={`w-14 h-14 rounded-2xl ${contact.bgColor} ${contact.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <contact.icon className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black font-mono text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-2 block">
                  {contact.label}
                </span>
                <span className="font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors break-all">
                  {contact.value}
                </span>
              </a>

              {contact.label.toLowerCase().includes("email") && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard(contact.value);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity hover:text-teal-500"
                  title="Salin Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <motion.a
              href="mailto:reka48644@gmail.com"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-3 px-12 py-5 bg-gray-900 dark:bg-teal-500 text-white font-black rounded-2xl shadow-2xl transition-all duration-300"
            >
              {t("contact.cta") || "Kirim Pesan Sekarang"}
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <p className="mt-12 text-[10px] text-gray-400 dark:text-gray-500 font-mono tracking-widest uppercase">
            <span className="text-gray-900 dark:text-gray-200 font-bold">{t("hero.name")}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;