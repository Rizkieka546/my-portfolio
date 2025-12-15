"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/rizkihandoyo", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rizkihandoyo", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rizki.handoyo@email.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("footer.designed")}{" "}
              <span className="text-teal-500 font-medium">Rizki Eka Handoyo</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              © {currentYear} {t("footer.rights")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors"
                whileHover={{ y: -2 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
