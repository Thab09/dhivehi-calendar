import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "en", lang: "en" },
  { code: "dv", lang: "dv" },
  { code: "ar", lang: "ar" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  const selectedLanguage: string | null =
    localStorage.getItem("i18nextLng") || "";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    //Changing the direction based on the language
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="my-4">
      <Select onValueChange={(value) => changeLanguage(value)}>
        <SelectTrigger className="w-[70px]">
          <SelectValue placeholder={selectedLanguage} />
        </SelectTrigger>
        <SelectContent className="w-[70px]">
          {languages.map((lng) => {
            return (
              <SelectItem key={lng.code} value={lng.code}>
                {lng.lang}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
