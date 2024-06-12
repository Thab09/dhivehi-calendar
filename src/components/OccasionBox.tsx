import useCheckOccasion from "@/hooks/useCheckOccasion";
import { useTranslation } from "react-i18next";
import useDateStore from "@/store/useDateStore";

const OccasionBox = () => {
  const { i18n } = useTranslation();
  const { selectedDate } = useDateStore();
  const getOccasion = useCheckOccasion({
    day: selectedDate.day,
  });

  return (
    <div>
      {getOccasion?.length ? (
        getOccasion.map((occasion, index) => (
          <div
            key={index}
            className="bg-sky-50 rounded-sm my-3 sm:my-6 py-3 px-4 sm:px-5 sm:py-4 md:px-6 md:py-5"
          >
            {Array.isArray(occasion[1]) &&
              occasion[1].map((occasionDescription, innerIndex) => (
                <p
                  className={`${
                    i18n.language === "dv" && "text-base font-medium"
                  } text-sky-900 text-xs sm:text-base`}
                  key={innerIndex}
                >
                  - {occasionDescription}
                </p>
              ))}
          </div>
        ))
      ) : (
        <div className="bg-sky-50 rounded-sm my-3 sm:my-6 py-3 px-4 sm:px-5 sm:py-4 md:px-6 md:py-5">
          <p
            className={`${
              i18n.language === "dv" && "text-base font-medium"
            } text-sky-900 text-xs sm:text-base`}
          >
            No Occasion
          </p>
        </div>
      )}
    </div>
  );
};

export default OccasionBox;
