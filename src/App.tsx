import Calendar from "./components/Calendar.tsx";
import Header from "./components/Header.tsx";
import OccasionBox from "./components/OccasionBox.tsx";
import PrayerTimes from "./components/PrayerTimes.tsx";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="pb-12 bg-white dark:bg-zinc-900">
      <div className="max-w-3xl mx-auto ">
        <Header />
        <Calendar />
        <OccasionBox />
        <PrayerTimes />
      </div>
      <Analytics />
    </div>
  );
};

export default App;
