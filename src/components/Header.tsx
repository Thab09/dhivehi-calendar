import MonthSelector from "./MonthSelector";
import ToggleLanguage from "./ToggleLanguage";
import YearSelector from "./YearSelector";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <YearSelector />
      <MonthSelector />
      <ToggleLanguage />
    </div>
  );
};

export default Header;
