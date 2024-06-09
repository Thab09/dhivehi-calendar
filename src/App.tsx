import CalendarTable from "./components/CalendarTable.tsx";
import { useTranslation } from "react-i18next";
import Layout from "./components/Layout.tsx";

const App = () => {
  const { i18n } = useTranslation("common");
  //Delete LanguageSelector File
  // return (
  //   <div className="max-w-3xl mx-auto font-poppins">
  //     <Header />
  //     <CalendarTable />
  //   </div>
  // );
  return (
    <div
      className={`${
        i18n.language === "en" ? "font-mona" : "font-rasmee"
      }h-screen bg-white dark:bg-smoke-900`}
    >
      <Layout />
    </div>
  );
};

export default App;
