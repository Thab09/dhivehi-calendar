const getHijriDate = (month: number[][][]) => {
  let firstHijriMonth: number | null = null;
  let secondHijriMonth: number | null = null;
  let firstHijriYear: number | null = null;
  let secondHijriYear: number | null = null;

  //find the first hijri month
  for (const week of month) {
    for (const day of week) {
      if (day[0] !== 0) {
        firstHijriMonth = day[4];
        firstHijriYear = day[5];
        break;
      }
    }
    if (firstHijriMonth !== null) break;
  }

  //find the second hijri month
  for (const week of [...month].reverse()) {
    for (const day of [...week].reverse()) {
      if (day[0] !== 0) {
        secondHijriMonth = day[4];
        secondHijriYear = day[5];
        break;
      }
    }
    if (secondHijriMonth !== null) break;
  }

  return { firstHijriMonth, secondHijriMonth, firstHijriYear, secondHijriYear };
};

export default getHijriDate;
