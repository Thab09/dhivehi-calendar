import { Label, Select } from "flowbite-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "dv", lang: "Dhivehi" },
  { code: "ar", lang: "Arabic" },
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
    <div>
      <div className="max-w-[8rem]">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Language" />
        </div>
        <Select
          id="countries"
          defaultValue={selectedLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {languages.map((lng) => {
            return (
              <option key={lng.code} value={lng.code}>
                {lng.lang}
              </option>
            );
          })}
        </Select>
      </div>
    </div>
  );
}

export default LanguageSelector;
