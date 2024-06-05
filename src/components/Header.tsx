import LanguageButton from "./LanguageButton";
import MonthSelector from "./MonthSelector";
import MonthYearSelector from "./MonthYearSelector";
import ToggleLanguage from "./ToggleLanguage";
import YearSelector from "./YearSelector";

const Header = () => {
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
      <div className="flex justify-between items-center">
        <LanguageButton />
        <p className="text-[10px] px-1">Switch to Academic Calendar</p>
      </div>
      <div className="flex justify-center items-center my-2 gap-4">
        <MonthYearSelector />
      </div>
    </div>
  );
};

export default Header;
