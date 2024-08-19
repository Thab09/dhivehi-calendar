import useCheckOccasion from "@/hooks/useCheckOccasion";
import { useTranslation } from "react-i18next";
import useDateStore from "@/store/useDateStore";

const OccasionBox = () => {
  //getting the translation from the common.json files
  const { t } = useTranslation("common");
  //getting the specific months from the common.json files
  const gmonths = t("gregorianMonths");
  const hmonths = t("hijriMonths");
  const noOccasion = t("general.1");
  const holiday = t("general");
  const { selectedDate, selectedHijriDate, holidayStatus } = useDateStore();
  const getOccasion = useCheckOccasion({
    day: selectedDate.day,
  });

  console.log(holiday);

  return (
    <div className="bg-sky-50 border border-sky-100  my-3 mx-2 sm:my-6 py-3 px-4 sm:px-4 sm:py-4 dark:bg-zinc-800">
      <Date {...{ selectedDate, selectedHijriDate, gmonths, hmonths }} />
      <HolidayStatus {...{ holidayStatus, holiday }} />

      {getOccasion?.length ? (
        getOccasion.map((occasion, index) => (
          <div key={`occasion-${index}`}>
            {Array.isArray(occasion[1]) &&
              occasion[1].map((occasionDescription, innerIndex) => (
                <Occasion
                  key={`occasion-${index}-${innerIndex}`}
                  occasion={occasionDescription}
                />
              ))}
          </div>
        ))
      ) : (
        <div>
          <Occasion occasion={noOccasion} />
        </div>
      )}
    </div>
  );
};

//DATE COMPONENT
type DateProps = {
  selectedDate: { day: number; month: number; year: number };
  selectedHijriDate: { day: number; month: number; year: number };
  gmonths: string;
  hmonths: string;
};

const Date = ({
  selectedDate,
  selectedHijriDate,
  gmonths,
  hmonths,
}: DateProps) => {
  return (
    <p className="text-sky-950 text-xs sm:text-sm font-medium opacity-80 mb-1 tabular-nums  dark:text-smoke-400">
      {`${selectedDate.day} ${gmonths[selectedDate.month]} ${
        selectedDate.year
      } - ${selectedHijriDate.day} ${hmonths[selectedHijriDate.month]} ${
        selectedHijriDate.year
      }`}
    </p>
  );
};

//HOLIDAY LEVEL COMPONENT
type HolidayStatusProps = {
  holidayStatus: number;
  holiday: string;
};

const HolidayStatus = ({ holidayStatus, holiday }: HolidayStatusProps) => {
  let statusText;

  switch (holidayStatus) {
    case 1:
      statusText = <p>{`${holiday[3]}`}</p>;
      break;
    case 2:
      statusText = <p>{`${holiday[4]}`}</p>;
      break;
    case 3:
      statusText = <p>{`${holiday[5]}`}</p>;
      break;
    default:
      statusText = "";
  }
  return (
    <p className="text-sky-950 opacity-70 text-[11px] mb-2 dark:text-smoke-100">
      {statusText}
    </p>
  );
};

// OCCASION STRING COMPONENT
type OccasionProps = {
  occasion: string;
};

const Occasion = ({ occasion }: OccasionProps) => {
  return (
    <p className="text-sky-950 text-sm sm:text-base mb-1 dark:text-smoke-100">
      • {occasion}
    </p>
  );
};

export default OccasionBox;
