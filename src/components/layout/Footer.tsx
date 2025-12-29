"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail, Heart, Zap, ChevronUp } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Rizkieka546", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rizkihandoyo", label: "LinkedIn" },
    { icon: Mail, href: "mailto:reka48644@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-12" />

        <div className="flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-2 rounded-2xl mb-10 shadow-sm"
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 dark:text-gray-400 hover:text-white hover:bg-teal-500 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="group text-gray-900 dark:text-gray-200 font-black tracking-tighter text-2xl mb-4 inline-block"
            >
              REKA<span className="text-teal-500 group-hover:animate-pulse">.dev</span>
            </motion.button>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <span className="flex items-center gap-1.5">
                {t("footer.designed") || "Handcrafted with"} 
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> 
                by <span className="text-gray-900 dark:text-white font-bold uppercase tracking-tight">Rizki Eka</span>
              </span>
              <span className="hidden md:block opacity-20 text-xl font-light">/</span>
              <span className="font-medium tracking-wide">© {currentYear} {t("footer.rights") || "All Rights Reserved"}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-600 bg-gray-50/50 dark:bg-gray-900/30 px-6 py-3 rounded-full border border-gray-100 dark:border-gray-800/50 shadow-inner">
                <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-teal-500" /> Next.js</span>
                <span className="w-1 h-1 rounded-full bg-teal-500/30" />
                <span>Tailwind CSS</span>
                <span className="w-1 h-1 rounded-full bg-teal-500/30" />
                <span>Framer Motion</span>
            </div>
          </motion.div>
          
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ y: -3 }}
            className="mt-12 p-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-400 hover:text-teal-500 hover:border-teal-500 transition-all duration-300"
            title="Back to Top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-24 bg-teal-500/5 blur-[80px] pointer-events-none" />
    </footer>
  );
};

export default Footer;