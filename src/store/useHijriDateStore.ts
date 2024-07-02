import { create } from "zustand";

type HijriDateStore = {
  firstHijriMonth: number | null;
  secondHijriMonth: number | null;
  firstHijriYear: number | null;
  secondHijriYear: number | null;
  setHijriDates: (
    firstMonth: number | null,
    secondMonth: number | null,
    firstYear: number | null,
    secondYear: number | null
  ) => void;
};
const useHijriDateStore = create<HijriDateStore>((set) => {
  return {
    firstHijriMonth: null,
    secondHijriMonth: null,
    firstHijriYear: null,
    secondHijriYear: null,
    setHijriDates: (firstMonth, secondMonth, firstYear, secondYear) =>
      set({
        firstHijriMonth: firstMonth,
        secondHijriMonth: secondMonth,
        firstHijriYear: firstYear,
        secondHijriYear: secondYear,
      }),
  };
});

export default useHijriDateStore;
