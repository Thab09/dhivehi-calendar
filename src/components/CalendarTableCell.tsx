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

  console.log(occasion);

  return (
    <div
      className={`${day[0] === 0 ? "hidden" : ""}
         ${day[2] === 1 && "bg-red-700 text-white"}  
         ${occasion?.length && "hover:cursor-pointer bg-blue-200"}
         px-2 py-1 sm:px-3 sm:py-4 rounded-sm flex flex-col bg-blue-50 sm:flex-row gap-2 justify-between tabular-nums items-center`}
    >
      <div className="self-start flex justify-between sm:justify-start sm:gap-4 w-full items-center">
        <p className="font-bold text-base sm:text-2xl">{day[0]}</p>
        {/* {occasion?.length && (
          <span className="px-[0.325rem] py-1 text-[0.4rem] sm:text-[0.5rem] sm:px-1.5 font-bold leading-none text-red-100 bg-green-700 rounded-full">
            {occasion?.length}
          </span>
        )} */}
      </div>
      <p className="text-sm sm:text-base font-amiri self-end">
        {transformNumerals(day[3])}
      </p>
    </div>
  );
};

export default CalendarTableCell;
