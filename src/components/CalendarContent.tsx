import CalendarCell from "./CalendarCell";
interface CalendarContentProps {
  month: number[][][];
}
const CalendarContent = ({ month }: CalendarContentProps) => {
  return (
    <tbody className="text-gray-800">
      {month.map((week, weekIndex) => (
        <tr key={weekIndex}>
          {week.map((day, dayIndex) => {
            return (
              <td key={dayIndex} className="p-0">
                <CalendarCell day={day} />
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default CalendarContent;
