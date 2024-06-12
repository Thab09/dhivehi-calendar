import CalendarContent from "./CalendarContent";
import CalendarHeader from "./CalendarHeader";
import useDateStore from "@/store/useDateStore";
import { getMonthName } from "@/utils/monthUtils";

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
  const calendarData: Year = calendar as Year;
  const { selectedDate } = useDateStore();
  //since the month is store by number, the funciton is fetching the month name
  const monthName = getMonthName(selectedDate.month).toLowerCase() as MonthName;
  const month: Month = calendarData[monthName];

  return (
    <div className="mx-1">
      <table className="table-fixed w-full">
        <CalendarHeader />
        <CalendarContent month={month} />
      </table>
    </div>
  );
};

export default Calendar;
