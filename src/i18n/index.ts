"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations";

if (typeof window !== "undefined" && !i18n.isInitialized) {
  const savedLanguage = localStorage.getItem("language") || "en";

  i18n.use(initReactI18next).init({
    resources: translations,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
