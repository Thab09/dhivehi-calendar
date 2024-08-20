type OccasionBoxDateProps = {
  selectedDate: { day: number; month: number; year: number };
  selectedHijriDate: { day: number; month: number; year: number };
  gmonths: string;
  hmonths: string;
};

const OccasionBoxDate = ({
  selectedDate,
  selectedHijriDate,
  gmonths,
  hmonths,
}: OccasionBoxDateProps) => {
  return (
    <p className="text-sky-950 text-xs sm:text-sm font-medium opacity-80 tabular-nums  dark:text-smoke-400">
      {`${selectedDate.day} ${gmonths[selectedDate.month]} ${
        selectedDate.year
      } - ${selectedHijriDate.day} ${hmonths[selectedHijriDate.month]} ${
        selectedHijriDate.year
      }`}
    </p>
  );
};

export default OccasionBoxDate;
