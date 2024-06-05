import CalendarTable from "./components/CalendarTable.tsx";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";

const App = () => {
  //Delete LanguageSelector File
  // return (
  //   <div className="max-w-3xl mx-auto font-poppins">
  //     <Header />
  //     <CalendarTable />
  //   </div>
  // );
  return (
    <div className="max-w-3xl mx-auto font-mona">
      <Header />
      <Main />
    </div>
  );
};

export default App;
