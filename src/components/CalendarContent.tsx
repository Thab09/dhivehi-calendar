import CalendarCell from "./CalendarCell";
import CalendarTableCell from "./CalendarTableCell";
interface CalendarContentProps {
  month: number[][][];
}
const CalendarContent = ({ month }: CalendarContentProps) => {
  return (
    <tbody className="text-gray-800">
      {month.map((week, weekIndex) => (
        <tr key={weekIndex}>
          {week.map((day, dayIndex) => {
            // const occasionsForTheDay = getOccasions(day[0]);

            return (
              <td
                key={dayIndex}
                // onClick={() => {
                //   if (occasionsForTheDay.length > 0) {
                //     handleSelectedDay(day[0]);
                //   } else {
                //     handleSelectedDay(null);
                //   }
                // }}
                className="p-0"
              >
                <CalendarCell day={day} />
                {/* <CalendarTableCell
                  day={day}
                  occasion={
                    occasionsForTheDay.length > 0
                      ? occasionsForTheDay[0][1]
                      : null
                  }
                /> */}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default CalendarContent;
