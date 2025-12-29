"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail, Heart, Zap } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Rizkieka546", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rizkihandoyo", label: "LinkedIn" },
    { icon: Mail, href: "mailto:reka48644@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Decorative Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-12" />

        <div className="flex flex-col items-center">
          {/* Social Links Capsule */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-2 rounded-full mb-8 shadow-sm"
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 dark:text-gray-400 hover:text-white hover:bg-teal-500 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright & Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-900 dark:text-gray-200 font-bold tracking-tight text-lg mb-2">
              REKA<span className="text-teal-500">.dev</span>
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                {t("footer.designed") || "Handcrafted with"} 
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> 
                by <span className="text-gray-900 dark:text-white font-medium">Rizki Eka</span>
              </span>
              <span className="hidden md:block opacity-30">|</span>
              <span>© {currentYear} {t("footer.rights") || "All Rights Reserved"}</span>
            </div>

            {/* Built with Badge */}
            <div className="mt-6 flex items-center justify-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600">
               <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-teal-500" /> Next.js</span>
               <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-800" />
               <span>Tailwind CSS</span>
               <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-800" />
               <span>Framer Motion</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;