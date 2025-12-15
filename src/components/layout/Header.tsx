"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import "@/i18n";
import { useTheme } from "next-themes";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "en" || savedLang === "id")) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const currentLang = i18n.language || "en";
    const newLang = currentLang === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const currentLang = mounted ? (i18n.language || "en") : "en";
  const displayTheme = mounted ? resolvedTheme || "light" : "light";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-400 dark:border-gray-100 shadow-md"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          onClick={scrollToTop}
          className="font-mono text-lg font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <span className="text-gray-400">{'<>'}</span>
          <span className="text-gray-900 dark:text-gray-200">;</span>
          <span className="text-gray-400">{'</>'}</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              aria-label={`Scroll to ${item.label}`}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-teal-400 via-sky-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
        </div>

        {/* Theme & Language Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
            title={`Current language: ${currentLang.toUpperCase()}`}
          >
            <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            {mounted && <span className="text-xs font-medium">{currentLang.toUpperCase()}</span>}
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500"
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(56, 189, 248, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${displayTheme === "dark" ? "light" : "dark"} theme`}
            title={`Current theme: ${displayTheme}`}
          >
            <AnimatePresence mode="wait">
              {mounted && displayTheme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5 text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors md:hidden focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-300 dark:border-gray-700 shadow-md"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="py-4 flex flex-col gap-1 px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  role="menuitem"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
