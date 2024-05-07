import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Toggle } from "@/components/ui/toggle";

const languages = [
  { code: "en", lang: "English" },
  { code: "dv", lang: "Dhivehi" },
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
    localStorage.setItem("selectedLanguage", selectedLanguage);
    // Changing the direction based on the language
    //SET THE DIRECTION CHANGE AT A HIGHER LEVEL?
    document.body.dir = i18n.dir();
  }, [i18n, selectedLanguage]);

  const handleChangeLanguage = () => {
    const newLanguage = selectedLanguage === "en" ? "dv" : "en";
    setSelectedLanguage(newLanguage);
  };

  const toggleLabel =
    languages.find((lang) => lang.code !== selectedLanguage)?.lang || "";

  return (
    <div className="my-4">
      <Toggle
        className="hover:bg-transparent hover:text-black data-[state=on]:bg-transparent"
        onPressedChange={handleChangeLanguage}
      >
        {toggleLabel}
      </Toggle>
    </div>
  );
};

export default ToggleLanguage;
