import CalendarTableCell from "./CalendarTableCell";
import CalendarTableHeader from "./CalendarTableHeader";
import calendar from "../assets/calendar-2024.json";

interface DayData {
  startDayInWeek: number;
  MonthNumber: number;
  secondHijriMonthStartDate: number;
}

type MonthData = {
  [key: string]: [number, number, string] | DayData;
};

const CalendarTable = () => {
  const selectedMonth: string = "january";
  const month: MonthData = Object.entries(calendar.january);
  console.log(selectedMonth, month, calendar.january);

  return (
    <div>
      <CalendarTableCell />
      <table className="table-fixed w-full mt-5 rounded border-separate border-spacing-1">
        <CalendarTableHeader />
        <tbody className="text-gray-800 text-[0.6rem]">
          <tr className="">
            <td>
              <CalendarTableCell>
                <p>1</p>
                <p>22</p>
              </CalendarTableCell>
            </td>
            <td className="border p-2 rounded-sm">60001</td>
            <td className="border p-2 rounded-sm">60001</td>
            <td className="border p-2 rounded-sm">60001</td>
            <td className="border p-2 rounded-sm">60001</td>
            <td className="border p-2 rounded-sm">60001</td>
            <td className="border p-2 rounded-sm">60001</td>
          </tr>
          <tr className="bg-slate-100">
            <td className="p-4">60001</td>
            <td className="p-4"></td>
            <td className="p-4">6/21/2022</td>
            <td className="p-4">Not </td>
            <td className="p-4">Not </td>
            <td className="p-4">Not </td>
            <td className="p-4">Not </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable;
