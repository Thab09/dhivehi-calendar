import Calendar from "./Calendar";
import Header from "./Header";
import OccasionBox from "./OccasionBox";

const Layout = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      <Calendar />
      <OccasionBox />
    </div>
  );
};

export default Layout;
