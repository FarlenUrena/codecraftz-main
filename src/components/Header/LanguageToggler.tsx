"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggler = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="ml-3 flex items-center rounded-full border border-stroke-stroke bg-white/70 text-xs font-medium text-black shadow-one dark:border-stroke-dark dark:bg-[#0c0c0d]/80 dark:text-white">
      <button
        type="button"
        onClick={() => setLang("es")}
        className={`px-2.5 py-1.5 rounded-full transition-colors ${
          lang === "es"
            ? "bg-primary text-white"
            : "hover:bg-primary/10 dark:hover:bg-primary/20"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 rounded-full transition-colors ${
          lang === "en"
            ? "bg-primary text-white"
            : "hover:bg-primary/10 dark:hover:bg-primary/20"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggler;

