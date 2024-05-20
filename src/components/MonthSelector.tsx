import useDateStore from "@/store/useDateStore";
import { useTranslation } from "react-i18next";
import YearSelector from "./YearSelector";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const MonthSelector = () => {
  //the store that stores the month and year
  const { selectedDate, setSelectedDate } = useDateStore();
  //state used to open/close the popover
  const [monthSelectorOpen, setMonthSelectorOpen] = useState<boolean>(false);
  //getting the translation from the common.json files
  const { t, i18n } = useTranslation("common");
  //getting the specific months from the common.json files
  const months = t("gregorianMonths");

  /* 
  Handles the click on the popover
  Changes the month onclick & closes the popover
   */
  const handleMonthChange = (newMonthIndex: number) => {
    setSelectedDate({ month: newMonthIndex + 1, year: selectedDate.year });
    setMonthSelectorOpen(false);
  };

  return (
    <Popover open={monthSelectorOpen} onOpenChange={setMonthSelectorOpen}>
      <PopoverTrigger
        className={`${
          i18n.language === "dv" && "text-xl font-semibold"
        } text-base font-semibold text-sky-900`}
      >
        <span>
          {months[selectedDate.month] + " " + selectedDate.year}
          {}
        </span>
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <div className="flex justify-center">
          <YearSelector />
        </div>
        <div className="grid grid-cols-3 font-poppins">
          {Object.values(months).map((month, index) => (
            <div
              key={index}
              className="flex justify-center rounded-sm hover:bg-sky-800 hover:text-sky-50 hover:cursor-pointer"
              onClick={() => handleMonthChange(index)}
            >
              <p className="p-3">
                {i18n.language === "en" ? month.substring(0, 3) : month}
              </p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MonthSelector;
