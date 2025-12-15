"use client";

import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return { theme: resolvedTheme, toggleTheme };
};
