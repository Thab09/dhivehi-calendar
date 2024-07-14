import Papa from "papaparse";

export const readCSVFile = (island: number): Promise<string[][]> => {
  return new Promise((resolve) => {
    fetch(`/prayertimes/${island}.csv`)
      .then((response) => response.text())
      .then((data) => {
        Papa.parse<string[]>(data, {
          header: false, // No headers in the CSV
          complete: (result) => {
            resolve(result.data);
          },
        });
      });
  });
};

export const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay) - 1;
};

export const getDateFromDayOfYear = (
  dayOfYear: number,
  year: number
): number => {
  if (dayOfYear < 1 || dayOfYear > 366) {
    throw new Error("Day of year must be between 1 and 366");
  }

  const date = new Date(year, 0, 1); // Initialize to Jan 1 of the given year

  // Check if it's a leap year
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (!isLeapYear && dayOfYear === 366) {
    throw new Error("Invalid day of year for a non-leap year");
  }

  // Adjust the date by the given day of the year
  date.setDate(dayOfYear);

  // Check if the resulting date is in the correct year
  if (date.getFullYear() !== year) {
    throw new Error("Invalid day of year for the given year");
  }

  return date.getDate();
};
