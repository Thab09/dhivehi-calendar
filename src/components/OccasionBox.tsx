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
  const { selectedDate, selectedHijriDate, holidayLevel } = useDateStore();
  const getOccasion = useCheckOccasion({
    day: selectedDate.day,
  });
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-sm my-3 mx-2 sm:my-6 py-3 px-4 sm:px-5 sm:py-4 md:px-6 md:py-5 dark:bg-zinc-800">
      <Date {...{ selectedDate, selectedHijriDate, gmonths, hmonths }} />

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
    <p className="text-sky-950 text-xs sm:text-sm font-medium tabular-nums mb-2 sm:mb-4 dark:text-smoke-400">
      {`${selectedDate.day} ${gmonths[selectedDate.month]} ${
        selectedDate.year
      } - ${selectedHijriDate.day} ${hmonths[selectedHijriDate.month]} ${
        selectedHijriDate.year
      }`}
    </p>
  );
};

// OCCASION STRING COMPONENT
type OccasionProps = {
  occasion: string;
};

const Occasion = ({ occasion }: OccasionProps) => {
  return (
    <p className="text-sky-900 text-sm sm:text-lg mb-1 dark:text-smoke-100">
      - {occasion}
    </p>
  );
};

export default OccasionBox;
