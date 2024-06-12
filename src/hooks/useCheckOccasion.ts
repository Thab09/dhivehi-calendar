import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useDateStore from "@/store/useDateStore";
import { getMonthName } from "@/utils/monthUtils";
type useCheckOccasionProps = {
  day: number;
};
const useCheckOccasion = ({ day }: useCheckOccasionProps) => {
  const { selectedDate } = useDateStore();
  const monthName = getMonthName(selectedDate.month).toLowerCase();
  const [occasionData, setOccasionData] = useState<[string, string][] | null>();
  const { t } = useTranslation(String(selectedDate.year));

  useEffect(() => {
    if (day !== null) {
      const filterByDay = Object.entries(t(monthName)).filter(
        ([date]) => Number(date) === day
      );
      setOccasionData(filterByDay);
    } else {
      setOccasionData([]); // Clear occasions when day is null
    }
  }, [day, monthName, t, selectedDate.year]);

  return occasionData;
};

export default useCheckOccasion;
