import { useTranslation } from "react-i18next";
import CalendarTableCell from "./CalendarTableCell";
import CalendarTableHeader from "./CalendarTableHeader";
import calendar from "../assets/calendar/2024.json";

type MonthData = number[][][];

const CalendarTable = () => {
  const { t } = useTranslation("2024");
  const occasions = t("february");

  // const selectedMonth: string = "january";
  const month: MonthData = calendar.february;

  return (
    <div>
      <table className="table-fixed w-full mt-5">
        <CalendarTableHeader />
        <tbody className="text-gray-800">
          {/* {month.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex} className="border border-neutral-100">
                  <CalendarTableCell day={day} />
                </td>
              ))}
            </tr>
          ))} */}
          {month.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => {
                // Find occasions for the current day
                const occasionsForTheDay = Object.entries(occasions).filter(
                  ([date]) => Number(date) === day[0]
                );
                // Object.entries(occasions).map(([date, occasion]) =>
                //   console.log(date, occasion)
                // );

                return (
                  <td key={dayIndex}>
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
    </div>
  );
};

export default CalendarTable;
