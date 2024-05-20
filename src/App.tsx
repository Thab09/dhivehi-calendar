import CalendarTable from "./components/CalendarTable.tsx";
import Header from "./components/Header.tsx";

const App = () => {
  //Delete LanguageSelector File
  return (
    <div className="max-w-3xl mx-auto font-poppins">
      <Header />
      <CalendarTable />
    </div>
  );
};

export default App;
