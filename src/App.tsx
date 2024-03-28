import LanguageSelector from "./components/LanguageSelector.tsx";
import CalendarTable from "./components/CalendarTable.tsx";

function App() {
  return (
    <div className="max-w-3xl mx-auto font-poppins">
      <LanguageSelector />
      <CalendarTable />
    </div>
  );
}

export default App;
