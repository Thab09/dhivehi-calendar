import i18n from "i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpBackend)
  .init<HttpBackendOptions>({
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    debug: true,
    returnObjects: true,
    ns: ["common", "2024"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
