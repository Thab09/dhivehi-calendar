import { create } from "zustand";

type DateStore = {
  selectedDate: { day: number; month: number; year: number };
  setSelectedDate: (date: { day: number; month: number; year: number }) => void;
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
  };
});

export default useDateStore;
