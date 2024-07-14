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
import useHijriDateStore from "@/store/useHijriDateStore";

const MonthYearSelector = () => {
  //Store that stores the month and year
  const { selectedDate, setSelectedDate } = useDateStore();
  //state used to open/close the popover
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  //getting the translation from the common.json files
  const { t, i18n } = useTranslation("common");
  //getting the specific months from the common.json files
  const months = t("gregorianMonths");
  //getting the first and second hijri months
  const { firstHijriMonth, secondHijriMonth } = useHijriDateStore();
  const hijriMonths = t("hijriMonths");

  return (
    <div className="w-full flex flex-col gap-1 sm:flex-row justify-between items-center my-2 sm:py-4">
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger>
          <div className="flex">
            <span
              className={`${
                i18n.language === "dv" && "text-2xl px-1 font-semibold"
              } text-2xl font-bold text-sky-900 dark:text-zinc-200`}
            >
              {months[selectedDate.month]}
            </span>
            <span
              className={`${
                i18n.language === "dv" && "text-xl px-2 font-semibold"
              } text-2xl px-2 font-bold text-sky-900 dark:text-zinc-200`}
            >
              {selectedDate.year}
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="border-none shadow-none py-4 flex flex-col gap-3">
          {/* YEAR SELECTOR */}
          <YearSelector
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setPopoverOpen={setPopoverOpen}
          />
          {/* MONTH SELECTOR */}
          <MonthSelector
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setPopoverOpen={setPopoverOpen}
            months={months}
          />
        </PopoverContent>
      </Popover>
      {/* Hijri Months */}
      {firstHijriMonth !== null && secondHijriMonth !== null && (
        <p
          className={`${
            i18n.language === "dv" && "text-base font-semibold"
          }text-sm font-light text-sky-900 dark:text-smoke-200`}
        >
          {hijriMonths[firstHijriMonth]} - {hijriMonths[secondHijriMonth]}
        </p>
      )}
    </div>
  );
};

interface MonthSelectorProps {
  setPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDate: (date: { day: number; month: number; year: number }) => void;
  selectedDate: { day: number; month: number; year: number };
  months: string;
}

const MonthSelector = ({
  setPopoverOpen,
  selectedDate,
  setSelectedDate,
  months,
}: MonthSelectorProps) => {
  //getting the translation from the common.json files
  const { i18n } = useTranslation("common");

  return (
    <Select
      onValueChange={(value) => {
        setPopoverOpen(false);
        setSelectedDate({
          day: selectedDate.day,
          month: Number(value),
          year: selectedDate.year,
        });
      }}
      dir={i18n.dir()}
    >
      <SelectTrigger className="w-5/6 justify-between rounded-sm mx-auto shadow-none focus:ring-transparent text-sm font-medium text-sky-900 dark:text-stone-100 dark:bg-stone-700">
        <SelectValue placeholder={months[selectedDate.month]} />
      </SelectTrigger>
      <SelectContent className="rounded-sm">
        {Object.values(months).map((month, index) => (
          <div
            key={index}
            className="flex justify-center rounded-sm text-smoke-600 dark:text-white hover:cursor-pointer"
          >
            <SelectItem value={String(index + 1)}>
              <p
                className={`${
                  i18n.language === "dv"
                    ? "font-rasmee"
                    : "font-mona text-xs font-medium sm:text-sm"
                }`}
              >
                {month}
              </p>
            </SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  );
};

interface YearSelectorProps {
  setPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDate: (date: { day: number; month: number; year: number }) => void;
  selectedDate: { day: number; month: number; year: number };
}
const YearSelector = ({
  selectedDate,
  setSelectedDate,
  setPopoverOpen,
}: YearSelectorProps) => {
  return (
    <Select
      onValueChange={(value) => {
        setPopoverOpen(false);
        setSelectedDate({
          day: selectedDate.day,
          month: selectedDate.month,
          year: Number(value),
        });
      }}
    >
      <SelectTrigger className="w-5/6 justify-between rounded-sm mx-auto shadow-none focus:ring-transparent text-sm font-medium text-sky-900 dark:text-stone-100 dark:bg-stone-700">
        <SelectValue placeholder={selectedDate.year} />
      </SelectTrigger>
      <SelectContent className="rounded-sm">
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
