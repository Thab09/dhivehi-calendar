import CalendarContent from "./CalendarContent";
import CalendarHeader from "./CalendarHeader";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useDateStore from "@/store/useDateStore";
import { getMonthName } from "@/utils/monthUtils";

import Occasions from "./Occasions";

import calendar from "../assets/calendar/2024.json";

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
  const [selectedDay, setSelectedDay] = useState<number | null>();
  const calendarData: Year = calendar as Year;
  const { selectedDate } = useDateStore();
  //since the month is store by number, the funciton is fetching the month name
  const monthName = getMonthName(selectedDate.month).toLowerCase() as MonthName;
  const { t } = useTranslation("2024");
  const month: Month = calendarData[monthName];

  // const handleSelectedDay = (day: number | null) => {
  //   setSelectedDay(day);
  // };

  // const getOccasions = (day: number | null): [string, string][] => {
  //   return Object.entries(occasions).filter(([date]) => Number(date) === day);
  // };
  return (
    <div>
      <div className="mx-1">
        <table className="table-fixed w-full">
          <CalendarHeader />
          <CalendarContent month={month} />
        </table>
        {/* {selectedDay && <Occasions day={selectedDay} />} */}
      </div>
    </div>
  );
};

export default Calendar;
