export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonthName = (monthIndex: number): string => {
  return monthNames[monthIndex - 1];
};
export const getMonthIndex = (monthName: string): number => {
  return monthNames.indexOf(monthName) + 1;
};
