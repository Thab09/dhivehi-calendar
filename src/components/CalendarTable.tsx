import { useState } from "react";
import { useTranslation } from "react-i18next";
import useDateStore from "@/store/useDateStore";
import { getMonthName } from "@/utils/monthUtils";

import CalendarTableCell from "./CalendarTableCell";
import CalendarTableHeader from "./CalendarTableHeader";
import Occasions from "./Occasions";

import calendar from "../assets/calendar/2024.json";

type MonthData = number[][][];
const CalendarTable = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>();
  //store that stores the month and year
  const { selectedDate } = useDateStore();
  const monthName = getMonthName(selectedDate.month).toLowerCase();
  //get year by the selected year
  const { t } = useTranslation("2024");
  //get occasion month by the selected month
  const occasions = t(monthName);

  // const selectedMonth: string = "january";
  //get month by the selected month
  const month: MonthData = calendar[monthName] as MonthData;

  const handleSelectedDay = (day: number | null) => {
    setSelectedDay(day);
  };

  const getOccasions = (day: number | null): [string, string][] => {
    return Object.entries(occasions).filter(([date]) => Number(date) === day);
  };

  return (
    <div className="mx-1">
      <table className="table-fixed border-separate w-full">
        <CalendarTableHeader />
        <tbody className="text-gray-800">
          {month.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => {
                const occasionsForTheDay = getOccasions(day[0]);

                return (
                  <td
                    key={dayIndex}
                    onClick={() => {
                      if (occasionsForTheDay.length > 0) {
                        handleSelectedDay(day[0]);
                      } else {
                        handleSelectedDay(null);
                      }
                    }}
                    className="p-0"
                  >
                    <CalendarTableCell
                      day={day}
                      occasion={
                        occasionsForTheDay.length > 0
                          ? occasionsForTheDay[0][1]
                          : null
                      }
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDay && <Occasions day={selectedDay} />}
    </div>
  );
};

export default CalendarTable;
