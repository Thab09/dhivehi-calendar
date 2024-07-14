import { useEffect, useState, useCallback, useRef } from "react";
import { readCSVFile } from "@/utils/prayerTimeUtils";
import useDateStore from "@/store/useDateStore";
import { getDayOfYear } from "@/utils/prayerTimeUtils";

const usePrayerTime = () => {
  const [island, setIsland] = useState<number>(() => {
    return Number(localStorage.getItem("prayerTimeIsland") || "102");
  });
  const [prayerTimes, setPrayerTimes] = useState<string[][]>([]);
  const [selectedRows, setSelectedRows] = useState<string[][] | null>(null);
  const { selectedDate } = useDateStore();
  const isInitialMount = useRef(true);

  const getRowsByDate = useCallback(
    (dayOfYear: number) => {
      const startIndex = prayerTimes.findIndex(
        (row) => Number(row[0]) === dayOfYear
      );
      if (startIndex !== -1) {
        const totalRows = prayerTimes.length;
        const rows = [];
        for (let i = -7; i <= 7; i++) {
          const index = (startIndex + i + totalRows) % totalRows;
          rows.push(prayerTimes[index]);
        }
        setSelectedRows(rows);
      } else {
        setSelectedRows(null);
      }
    },
    [prayerTimes]
  );

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const data = await readCSVFile(island);
        setPrayerTimes(data);

        if (isInitialMount.current) {
          isInitialMount.current = false;
          const currentDayOfYear = getDayOfYear(new Date());
          getRowsByDate(currentDayOfYear);
        } else if (selectedDate) {
          const selectedDayOfYear = getDayOfYear(
            new Date(
              selectedDate.year,
              selectedDate.month - 1,
              selectedDate.day
            )
          );
          getRowsByDate(selectedDayOfYear);
        }
      } catch (error) {
        console.error("Error reading CSV file:", error);
        setSelectedRows(null);
      }
    };

    fetchPrayerTimes();
  }, [island, selectedDate, getRowsByDate]);

  const selectIsland = useCallback((islandCode: number) => {
    setIsland(islandCode);
    localStorage.setItem("prayerTimeIsland", String(islandCode));
  }, []);

  return { island, selectIsland, selectedRows, getRowsByDate };
};

export default usePrayerTime;
