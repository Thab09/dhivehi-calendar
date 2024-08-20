import useCheckOccasion from "@/hooks/useCheckOccasion";
import useDateStore from "@/store/useDateStore";
import { useTranslation } from "react-i18next";
import OccasionBoxDate from "./OccasionBoxDate";

const OccasionBox = () => {
  //getting the translation from the common.json files
  const { t } = useTranslation("common");
  //getting the specific months from the common.json files
  const gmonths = t("gregorianMonths");
  const hmonths = t("hijriMonths");
  const holiday = t("general");
  const { selectedDate, selectedHijriDate, holidayStatus } = useDateStore();
  const getOccasion = useCheckOccasion({
    day: selectedDate.day,
  });

  return (
    <div className="flex flex-col justify-center bg-sky-50 rounded-sm my-4 mx-2 sm:my-6 py-3 px-4 sm:px-4 sm:py-4 dark:bg-zinc-800">
      <OccasionBoxDate
        {...{ selectedDate, selectedHijriDate, gmonths, hmonths }}
      />
      <HolidayStatus {...{ holidayStatus, holiday }} />

      {getOccasion?.length ? (
        getOccasion.map((occasion, index) => (
          <div key={`occasion-${index}`} className="mt-2">
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
        <></>
      )}
    </div>
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
  if (!statusText) {
    return null;
  }
  return (
    <div className="text-sky-950 opacity-70 text-[11px] dark:text-smoke-100">
      {statusText}
    </div>
  );
};

// OCCASION STRING COMPONENT
type OccasionProps = {
  occasion: string;
};

const Occasion = ({ occasion }: OccasionProps) => {
  return (
    <p className="text-sky-950 text-sm sm:text-base mb-1 mt-1 dark:text-smoke-100">
      • {occasion}
    </p>
  );
};

export default OccasionBox;
