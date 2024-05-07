import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type useOccasionsProps = {
  day: number | null | undefined;
  month: string;
};
const useOccasions = ({ day, month }: useOccasionsProps) => {
  const [occasionsData, setOccasionsData] = useState<
    [string, string][] | null
  >();
  const { t } = useTranslation("2024");
  //   const occasions = t(month);

  useEffect(() => {
    if (day !== null) {
      const filteredOccasions = Object.entries(t(month)).filter(
        ([date]) => Number(date) === day
      );
      setOccasionsData(filteredOccasions);
    } else {
      setOccasionsData([]); // Clear occasions when day is null
    }
  }, [day, month, t]);

  return occasionsData;
};

export default useOccasions;
