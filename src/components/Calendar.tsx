import CalendarContent from "./CalendarContent";
import CalendarHeader from "./CalendarHeader";
import useDateStore from "@/store/useDateStore";
import { getMonthName } from "@/utils/monthUtils";

import getHijriDate from "@/utils/getHijriDate";
import useHijriDateStore from "@/store/useHijriDateStore";
import { useEffect, useState } from "react";

type Day = [number, number, number, number, number, number];
type Week = Day[];
type Month = Week[];

interface Year {
  year: number;
  headers: string[];
  january: Month;
  february: Month;
  march: Month;
  april: Month;
  may: Month;
  june: Month;
  july: Month;
  august: Month;
  september: Month;
  october: Month;
  november: Month;
  december: Month;
}

type MonthName =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";

const Calendar = () => {
  const { selectedDate } = useDateStore();
  const [calendarData, setCalendarData] = useState<Year | null>(null);
  const monthName = getMonthName(selectedDate.month).toLowerCase() as MonthName;
  const setHijriDates = useHijriDateStore((state) => state.setHijriDates);

  useEffect(() => {
    const loadCalendarData = async () => {
      try {
        const module = await import(
          `/src/assets/calendar/${selectedDate.year}.json`
        );
        setCalendarData(module.default as Year);
      } catch (error) {
        console.error(
          `Failed to load calendar data for year ${selectedDate.year}`,
          error
        );
        setCalendarData(null);
      }
    };

    loadCalendarData();
  }, [selectedDate.year]);

  useEffect(() => {
    if (calendarData) {
      const month: Month = calendarData[monthName];
      const {
        firstHijriMonth,
        secondHijriMonth,
        firstHijriYear,
        secondHijriYear,
      } = getHijriDate(month);
      setHijriDates(
        firstHijriMonth,
        secondHijriMonth,
        firstHijriYear,
        secondHijriYear
      );
    }
  }, [calendarData, monthName, setHijriDates]);

  if (!calendarData) {
    return <div>Loading calendar data...</div>;
  }
  const month: Month = calendarData[monthName];

  return (
    <div className="mx-2">
      <table className="table-fixed w-full">
        <CalendarHeader />
        <CalendarContent month={month} />
      </table>
    </div>
  );
};

export default Calendar;
