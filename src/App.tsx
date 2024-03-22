import LanguageSelector from "./components/LanguageSelector.tsx";
import CalendarTable from "./components/CalendarTable.tsx";

function App() {
  return (
    <div className="max-w-sm mx-auto my-4">
      <LanguageSelector />
      <CalendarTable />
    </div>
  );
}

export default App;
