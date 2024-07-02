import useCheckOccasion from "@/hooks/useCheckOccasion";
import { useTranslation } from "react-i18next";
import useDateStore from "@/store/useDateStore";

const OccasionBox = () => {
  //getting the translation from the common.json files
  const { t } = useTranslation("common");
  //getting the specific months from the common.json files
  const months = t("gregorianMonths");
  const noOccasion = t("general.1");
  const { selectedDate } = useDateStore();
  const getOccasion = useCheckOccasion({
    day: selectedDate.day,
  });
  return (
    <div className="bg-sky-50 rounded-sm my-3 mx-2 sm:my-6 py-3 px-4 sm:px-5 sm:py-4 md:px-6 md:py-5 dark:bg-zinc-800">
      <p className="text-sky-900 text-sm sm:text-base font-medium mb-2 sm:mb-4 dark:text-smoke-400">
        {`${selectedDate.day} ${months[selectedDate.month]} ${
          selectedDate.year
        } - `}
      </p>
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
