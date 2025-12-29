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
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "en" || savedLang === "id")) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const displayTheme = mounted ? resolvedTheme || "light" : "light";

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2.5 
          transition-all duration-500 ease-in-out
          ${isScrolled 
            ? "w-full md:w-[90%] lg:w-[70%] max-w-5xl rounded-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
            : "w-full rounded-2xl bg-transparent border-transparent"
          }
        `}
      >
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative group flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
            R
          </div>
          <span className={`font-bold tracking-tighter transition-opacity duration-300 ${isScrolled ? "hidden sm:block" : "block"}`}>
            REKA<span className="text-teal-500">.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center bg-gray-100/50 dark:bg-gray-800/50 rounded-full px-1.5 py-1 border border-gray-200/50 dark:border-gray-700/50">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              onMouseEnter={() => setHoveredTab(item.href)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 z-10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {hoveredTab === item.href && (
                <motion.span
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-sm -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions Container */}
        <div className="flex items-center gap-2">
          {/* Lang & Theme Toggle Group */}
          <div className="flex items-center bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 border border-gray-200/50 dark:border-gray-700/50">
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all text-gray-600 dark:text-gray-400"
              title="Change Language"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all text-gray-600 dark:text-gray-400"
            >
              {displayTheme === "dark" ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/20 active:scale-90 transition-transform"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-24 left-4 right-4 md:hidden p-6 rounded-3xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl border border-gray-200 dark:border-gray-800 shadow-2xl z-[90] pointer-events-auto"
          >
            <div className="grid grid-cols-1 gap-4">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-teal-500/10 hover:text-teal-500 text-lg font-bold transition-all flex items-center justify-between group"
                >
                  {item.label}
                  <div className="w-2 h-2 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;