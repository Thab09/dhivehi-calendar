import useCheckOccasion from "@/hooks/useCheckOccasion";
import useDateStore from "@/store/useDateStore";
import { isToday } from "@/utils/isTodayUtils";

type CalendarCellProps = {
  day: number[];
};
const CalendarCell = ({ day }: CalendarCellProps) => {
  const { selectedDate, setSelectedDate } = useDateStore();
  const today = isToday(day[0], selectedDate.month, selectedDate.year);

  const checkOcccasion = useCheckOccasion({ day: day[0] });

  const handleSelectedDay = (day: number) => {
    setSelectedDate({
      day: day,
      month: selectedDate.month,
      year: selectedDate.year,
    });
  };

  const transformNumerals = (num: number): string => {
    const arabicNumerals: string[] = [
      "٠",
      "١",
      "٢",
      "٣",
      "٤",
      "٥",
      "٦",
      "٧",
      "٨",
      "٩",
    ];
    const numStr = num.toString();
    return numStr.replace(
      /\d/g,
      (match) => arabicNumerals[parseInt(match)] || match
    );
  };

  return (
    <div
      className={`${day[0] === 0 && "hidden"}
      ${today && "bg-red-700 text-white"}
      ${
        day[2] === 1 && checkOcccasion?.length
          ? "hover:cursor-pointer text-red-200 "
          : day[2] === 1
          ? "text-red-700"
          : checkOcccasion?.length
          ? "hover:cursor-pointer  text-sky-600"
          : "text-black dark:text-white"
      }  
        py-3 sm:px-3 sm:py-6 flex flex-col  gap-1 justify-center items-center border-smoke-50 tabular-nums sm:gap-1 sm:border-b`}
      onClick={() => handleSelectedDay(day[0])}
    >
      <p className="font-medium text-base sm:text-2xl sm:font-bold">{day[0]}</p>
      <p className="text-xs sm:text-base font-amiri">
        {transformNumerals(day[3])}
      </p>
    </div>
  );
};

export default CalendarCell;
