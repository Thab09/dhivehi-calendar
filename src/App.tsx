import Calendar from "./components/Calendar.tsx";
import Header from "./components/Header.tsx";
import OccasionBox from "./components/OccasionBox.tsx";
import PrayerTimes from "./components/PrayerTimes.tsx";

const App = () => {
  return (
    <div className="h-screen bg-white dark:bg-zinc-900">
      <div className="max-w-3xl mx-auto">
        <Header />
        <Calendar />
        <OccasionBox />
        <PrayerTimes />
      </div>
    </div>
  );
};

export default App;
