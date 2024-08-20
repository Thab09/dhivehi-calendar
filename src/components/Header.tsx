import MonthYearSelector from "./MonthYearSelector";
import ToggleLanguage from "./ToggleLanguage";
import useDarkMode from "@/hooks/useDarkMode";
import { PiMoonFill } from "react-icons/pi";
import { PiSun } from "react-icons/pi";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="mx-2 mb-3 border-b border-sky-50 dark:border-zinc-700">
      <div className="flex justify-end gap-2 items-center pt-2">
        <ToggleLanguage />
        {darkMode === "light" ? (
          <div
            className="p-2 bg-sky-50 rounded-sm cursor-pointer"
            onClick={toggleDarkMode}
          >
            <PiMoonFill className="text-sky-700" />
          </div>
        ) : (
          <div
            className="p-2 bg-zinc-800 rounded-sm cursor-pointer"
            onClick={toggleDarkMode}
          >
            <PiSun className="text-stone-100" />
          </div>
        )}
      </div>
      <div className="flex justify-start items-center mt-4">
        <MonthYearSelector />
      </div>
    </div>
  );
};

export default Header;
