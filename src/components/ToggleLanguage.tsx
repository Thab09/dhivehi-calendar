import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Toggle } from "@/components/ui/toggle";

const languages = [
  { code: "en", lang: "ENGLISH", dir: "ltr" },
  { code: "dv", lang: "DHIVEHI", dir: "rtl" },
];

const ToggleLanguage = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
    // Retrieve the language from local storage or default to English
    const storedLanguage = localStorage.getItem("selectedLanguage");
    return storedLanguage || "en";
  });

  useEffect(() => {
    // Set the language in i18n and update local storage
    i18n.changeLanguage(selectedLanguage);
    localStorage.se;
    // Changing the font based on the language
    document.body.className =
      selectedLanguage === "en" ? "font-mona" : "font-aammu";
    // Changing the direction based on the language
    document.body.dir =
      languages.find((lang) => lang.code === selectedLanguage)?.dir || "ltr";
  }, [i18n, selectedLanguage]);

  const handleChangeLanguage = () => {
    const newLanguage = selectedLanguage === "en" ? "dv" : "en";
    setSelectedLanguage(newLanguage);
  };

  const toggleLabel =
    languages.find((lang) => lang.code !== selectedLanguage)?.lang || "";

  return (
    <div>
      <Toggle
        className="text-xs px-4 font-normal rounded-none font-mona bg-sky-50 text-sky-900 data-[state=on]:bg-sky-50 data-[state=on]:text-sky-900 hover:bg-sky-50 hover:text-sky-900 dark:text-stone-100 dark:bg-zinc-800"
        onPressedChange={handleChangeLanguage}
        size={"sm"}
      >
        {toggleLabel}
      </Toggle>
    </div>
  );
};

export default ToggleLanguage;
