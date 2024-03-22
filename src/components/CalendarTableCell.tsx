import { ReactNode } from "react";

type CalendarTableCellProps = {
  children?: ReactNode;
};
const CalendarTableCell = ({ children }: CalendarTableCellProps) => {
  return (
    <div className="border p-2 rounded-sm flex justify-between">{children}</div>
  );
};

export default CalendarTableCell;
