type CalendarTableCellProps = {
  day: number[];
  occasion?: string | null;
};

const CalendarTableCell = ({ day, occasion }: CalendarTableCellProps) => {
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
          ? "hover:cursor-pointer bg-red-700 text-red-200 "
          : day[2] === 1
          ? "bg-red-700 text-white"
          : occasion?.length
          ? "hover:cursor-pointer bg-sky-50 text-sky-600"
          : "bg-sky-50"
      }  
         px-2 py-1 sm:px-3 sm:py-4 rounded-sm flex flex-col sm:flex-row gap-2 justify-between tabular-nums items-center`}
    >
      <div className="self-start flex justify-between sm:justify-start sm:gap-4 w-full items-center">
        <p className="font-bold text-sm sm:text-2xl">{day[0]}</p>
      </div>
      <p className="text-xs sm:text-base font-amiri self-end">
        {transformNumerals(day[3])}
      </p>
    </div>
  );
};

export default CalendarTableCell;
