import useOccasions from "@/hooks/useOccasions";
import { useTranslation } from "react-i18next";
import useDateStore from "@/store/useDateStore";
import { getMonthName } from "@/utils/monthUtils";
type OccasionProps = {
  day: number;
};
const Occasions = ({ day }: OccasionProps) => {
  const { selectedDate } = useDateStore();
  const monthName = getMonthName(selectedDate.month).toLowerCase();
  const occasionsData = useOccasions({ day: day, month: monthName });
  const { i18n } = useTranslation();
  console.log(occasionsData);

  return (
    <>
      {occasionsData &&
        occasionsData.map((occasion, index) => (
          <div
            key={index}
            className="bg-sky-50 rounded-sm my-3 sm:my-6 py-3 px-4 sm:px-5 sm:py-4 md:px-6 md:py-5"
          >
            {Array.isArray(occasion[1]) ? (
              occasion[1].map((occasionDescription, innerIndex) => (
                <p
                  className={`${
                    i18n.language === "dv" && "text-base font-medium"
                  } text-sky-900 text-xs sm:text-base`}
                  key={innerIndex}
                >
                  - {occasionDescription}
                </p>
              ))
            ) : (
              <p
                className={`${
                  i18n.language === "dv" && "text-base font-medium"
                } text-sky-900 text-xs sm:text-base`}
              >
                - {occasion[1]}
              </p>
            )}
          </div>
        ))}
    </>
  );
};

export default Occasions;
