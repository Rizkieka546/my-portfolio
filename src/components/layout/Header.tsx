"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import "@/i18n";
import { useTheme } from "next-themes";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, resolvedTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = useMemo(() => [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#contact", label: t("nav.contact") },
  ], [t]);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const toggleLanguage = useCallback(() => {
    const currentLang = i18n.language || "en";
    const newLang = currentLang === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }, [i18n]);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center p-4 md:p-6 pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto relative flex items-center justify-between px-4 md:px-6 py-2.5 
          transition-all duration-500 ease-in-out overflow-hidden
          ${isScrolled 
            ? "w-full md:w-[90%] lg:w-[70%] max-w-5xl rounded-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-lg" 
            : "w-full rounded-2xl bg-transparent border-transparent"
          }
        `}
      >
        {isScrolled && (
          <div className="absolute bottom-0 left-0 h-[2px] bg-teal-500/10 w-full">
            <motion.div 
              className="h-full bg-teal-500" 
              initial={{ width: 0 }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
        )}

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative group flex items-center gap-2"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
            R
          </div>
          <span className={`font-bold tracking-tighter transition-opacity duration-300 ${isScrolled ? "hidden sm:block" : "block"}`}>
            REKA<span className="text-teal-500">.</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center bg-gray-100/50 dark:bg-gray-800/50 rounded-full px-1.5 py-1 border border-gray-200/50 dark:border-gray-700/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                onMouseEnter={() => setHoveredTab(item.href)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 z-10 
                  ${isActive ? "text-teal-600 dark:text-teal-400" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}
                `}
              >
                {(hoveredTab === item.href || isActive) && (
                  <motion.span
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 border border-gray-200/50 dark:border-gray-700/50">
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all text-gray-600 dark:text-gray-400"
              title="Change Language"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all text-gray-600 dark:text-gray-400"
              aria-label="Toggle Theme"
            >
              {!mounted ? (
                <div className="w-4 h-4" />
              ) : resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-teal-500 text-white shadow-lg active:scale-90 transition-transform"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="fixed top-24 left-4 right-4 md:hidden p-6 rounded-3xl bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl border border-gray-200 dark:border-gray-800 shadow-2xl z-[90] pointer-events-auto"
            >
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left px-4 py-4 rounded-2xl flex items-center justify-between group transition-all
                        ${isActive ? "bg-teal-500/10 text-teal-600 dark:text-teal-400" : "hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400"}
                      `}
                    >
                      <span className="text-lg font-bold uppercase tracking-tight">{item.label}</span>
                      <div className={`w-2 h-2 rounded-full bg-teal-500 transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;