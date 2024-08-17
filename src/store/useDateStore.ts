import { create } from "zustand";

type DateStore = {
  selectedDate: { day: number; month: number; year: number };
  setSelectedDate: (date: { day: number; month: number; year: number }) => void;
  selectedHijriDate: { day: number; month: number; year: number };
  setSelectedHijriDate: (date: {
    day: number;
    month: number;
    year: number;
  }) => void;
  holidayLevel: number;
  setHolidayLevel: (level: number) => void;
};

const useDateStore = create<DateStore>((set) => {
  return {
    selectedDate: {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1, // Use month index (0-11)
      year: new Date().getFullYear(),
    },
    setSelectedDate: (date) => {
      set({ selectedDate: date });
    },
    selectedHijriDate: {
      day: 1,
      month: 1,
      year: 1445,
    },
    setSelectedHijriDate: (date) => {
      set({ selectedHijriDate: date });
    },
    holidayLevel: 0,
    setHolidayLevel: (level) => {
      set({ holidayLevel: level });
    },
  };
});

export default useDateStore;
