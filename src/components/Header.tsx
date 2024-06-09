import MonthSelector from "./MonthSelector";
import MonthYearSelector from "./MonthYearSelector";
import ToggleLanguage from "./ToggleLanguage";
import YearSelector from "./YearSelector";
import useDarkMode from "@/hooks/useDarkMode";
import { PiMoonFill } from "react-icons/pi";
import { PiSun } from "react-icons/pi";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="mx-1">
      {/* <div className="flex justify-between items-center">
        <ToggleLanguage />
        <p className="text-[10px] px-1">Switch to Academic Calendar</p>
      </div>
      <div className="flex justify-center items-center my-2 gap-4">
        <MonthSelector />
        <YearSelector />
      </div> */}
      <div className="flex justify-end items-center">
        <ToggleLanguage />
        {darkMode === "light" ? (
          <div className="p-2 rounded-sm">
            <PiMoonFill
              onClick={toggleDarkMode}
              className="cursor-pointer text-neutral-900"
            />
          </div>
        ) : (
          <div className="p-2 rounded-sm">
            <PiSun
              onClick={toggleDarkMode}
              className="cursor-pointer text-white"
            />
          </div>
        )}
      </div>
      <div className="flex justify-start items-center my-2">
        <MonthYearSelector />
      </div>
    </div>
  );
};

export default Header;
