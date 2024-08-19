import useCheckOccasion from "@/hooks/useCheckOccasion";
import useDateStore from "@/store/useDateStore";
import { isToday } from "@/utils/isTodayUtils";
import { useEffect } from "react";

type CalendarCellProps = {
  day: number[];
};
const CalendarCell = ({ day }: CalendarCellProps) => {
  const {
    selectedDate,
    setSelectedDate,
    setSelectedHijriDate,
    setHolidayStatus,
  } = useDateStore();
  const today = isToday(day[0], selectedDate.month, selectedDate.year);

  const checkOcccasion = useCheckOccasion({ day: day[0] });

  const handleSelectedDay = (day: number[]) => {
    setSelectedDate({
      day: day[0],
      month: selectedDate.month,
      year: selectedDate.year,
    });
    setSelectedHijriDate({
      day: day[3],
      month: day[4],
      year: day[5],
    });
    setHolidayStatus(day[2]);
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

  useEffect(() => {
    if (today) {
      setSelectedHijriDate({
        day: day[3],
        month: day[4],
        year: day[5],
      });

      setHolidayStatus(day[2]);
    }
  }, [day, setSelectedHijriDate, setHolidayStatus, today]);

  //HOLIDAY LEVELS
  // day[2] === 0 means government && bank open
  // day[2] === 1 means government && bank holiday
  // day[2] === 2 means government holiday but bank open
  // day[2] === 3 means bank holiday but government open
  return (
    <div
      className={`${day[0] === 0 && "hidden"}
      ${today && "bg-sky-50 dark:bg-zinc-800"}
      ${selectedDate.day === day[0] && "bg-sky-50 dark:bg-zinc-800"}
      py-3 sm:px-3 sm:py-6 flex flex-col gap-1 justify-center items-center text-black dark:text-smoke-50 tabular-nums sm:gap-1 hover:cursor-pointer
      ${day[2] === 1 && "text-red-700 dark:!text-red-400"}
      ${
        (day[2] === 2 || day[2] === 3) &&
        "text-orange-600 dark:!text-orange-400"
      }
      ${
        day[2] === 0 &&
        checkOcccasion?.length &&
        "text-sky-700 dark:!text-sky-400"
      } 
        `}
      // onClick={() => handleSelectedDay(day[0])}
      onClick={() => handleSelectedDay(day)}
    >
      <p className="font-medium text-base sm:text-2xl sm:font-bold">{day[0]}</p>
      <p className="text-xs sm:text-base font-amiri">
        {transformNumerals(day[3])}
      </p>
    </div>
  );
};

export default CalendarCell;
