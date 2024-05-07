import { useState } from "react";
import { useTranslation } from "react-i18next";
import CalendarTableCell from "./CalendarTableCell";
import CalendarTableHeader from "./CalendarTableHeader";
import OccasionDetails from "./OccasionDetails";
import calendar from "../assets/calendar/2024.json";

type MonthData = number[][][];

const CalendarTable = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>();
  const { t } = useTranslation("2024");
  const occasions = t("april");

  // const selectedMonth: string = "january";
  const month: MonthData = calendar.april;

  const handleSelectedDay = (day: number | null) => {
    setSelectedDay(day);
  };

  const getOccasions = (day: number | null): [string, string][] => {
    return Object.entries(occasions).filter(([date]) => Number(date) === day);
  };

  return (
    <div>
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
      {selectedDay && <OccasionDetails day={selectedDay} />}
    </div>
  );
};

export default CalendarTable;
