import useDateStore from "@/store/useDateStore";

type CalendarCellProps = {
  day: number[];
  occasion?: string | null;
};
const CalendarCell = ({ day, occasion }: CalendarCellProps) => {
  const { selectedDate } = useDateStore();

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
      ${
        day[2] === 1 && occasion?.length
          ? "hover:cursor-pointer text-red-200 "
          : day[2] === 1
          ? "text-red-700"
          : occasion?.length
          ? "hover:cursor-pointer  text-sky-600"
          : "text-black dark:text-white"
      }  
        py-3 sm:px-3 sm:py-6 flex flex-col  gap-1 justify-center sm:gap-1 tabular-nums items-center`}
    >
      <p className="font-semibold text-base sm:text-2xl">{day[0]}</p>
      <p className="text-xs sm:text-base font-amiri">
        {transformNumerals(day[3])}
      </p>
    </div>
  );
};

export default CalendarCell;
