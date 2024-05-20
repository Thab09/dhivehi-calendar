import MonthSelector from "./MonthSelector";
import ToggleLanguage from "./ToggleLanguage";

const Header = () => {
  return (
    <div className="mx-1">
      <div className="flex justify-between items-center">
        <ToggleLanguage />
        <p className="text-[10px] px-1">Switch to Academic Calendar</p>
      </div>
      <div className="flex justify-center items-center my-2">
        <MonthSelector />
      </div>
    </div>
  );
};

export default Header;
