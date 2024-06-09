import { useState } from "react";
import useDateStore from "@/store/useDateStore";
import { useTranslation } from "react-i18next";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ToggleCalendarButton from "./ToggleCalendarButton";
const MonthYearSelector = () => {
  //Store that stores the month and year
  const { selectedDate, setSelectedDate } = useDateStore();
  //state used to open/close the popover
  const [monthSelectorOpen, setMonthSelectorOpen] = useState<boolean>(false);
  //getting the translation from the common.json files
  const { t, i18n } = useTranslation("common");
  //getting the specific months from the common.json files
  const months = t("gregorianMonths");

  return (
    <div className="w-full flex justify-between items-center my-2 mx-4">
      <Popover open={monthSelectorOpen} onOpenChange={setMonthSelectorOpen}>
        <PopoverTrigger>
          <div className="flex">
            <span
              className={`${
                i18n.language === "dv" && "text-2xl px-1 font-semibold"
              } text-2xl font-bold text-smoke-950 dark:text-white`}
            >
              {months[selectedDate.month]}
            </span>
            <span
              className={`${
                i18n.language === "dv" && "text-xl px-2 font-semibold"
              } text-2xl px-2 font-bold text-smoke-950 dark:text-white`}
            >
              {selectedDate.year}
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-1">
          {/* YEAR SELECTOR */}
          <YearSelector
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          {/* MONTH SELECTOR */}
          <MonthSelector
            setMonthSelectorOpen={setMonthSelectorOpen}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            months={months}
          />
        </PopoverContent>
      </Popover>
      <ToggleCalendarButton />
    </div>
  );
};

interface MonthSelectorProps {
  setMonthSelectorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDate: (date: { month: number; year: number }) => void;
  selectedDate: { month: number; year: number };
  months: string;
}

const MonthSelector = ({
  setMonthSelectorOpen,
  selectedDate,
  setSelectedDate,
  months,
}: MonthSelectorProps) => {
  //getting the translation from the common.json files
  const { i18n } = useTranslation("common");

  /* 
  Handles the click on the popover
  Changes the month onclick & closes the popover
   */

  const handleMonthChange = (newMonthIndex: number) => {
    setSelectedDate({ month: newMonthIndex + 1, year: selectedDate.year });
    setMonthSelectorOpen(false);
  };
  return (
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
  );
};

interface YearSelectorProps {
  setSelectedDate: (date: { month: number; year: number }) => void;
  selectedDate: { month: number; year: number };
}
const YearSelector = ({ selectedDate, setSelectedDate }: YearSelectorProps) => {
  return (
    <Select
      onValueChange={(value) =>
        setSelectedDate({ month: selectedDate.month, year: Number(value) })
      }
    >
      <SelectTrigger className="w-full justify-center shadow-none focus:ring-0 text-sm border-sky-100 sm:font-medium text-sky-900">
        <SelectValue placeholder={selectedDate.year} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2024">2024</SelectItem>
        <SelectItem disabled value="2025">
          2025
        </SelectItem>
        <SelectItem disabled value="2026">
          2026
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
export default MonthYearSelector;
