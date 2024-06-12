import { useTranslation } from "react-i18next";
const CalendarHeader = () => {
  const { t, i18n } = useTranslation("common");
  const days = t("daysOfWeek");

  return (
    <thead>
      <tr>
        {Object.entries(days).map(([key, day]) => (
          <th
            key={key}
            className="text-black font-mona rounded-sm font-medium text-xs sm:text-sm py-3"
          >
            <p
              className={`${
                i18n.language === "dv" && "text-sm font-semibold"
              } sm:hidden font-bold text-smoke-400 dark:text-white`}
            >
              {i18n.language === "en"
                ? day.substring(0, 1).toUpperCase()
                : day.substring(0, 4)}
            </p>
            <p
              className={`${
                i18n.language === "dv" && "text-lg font-semibold"
              } hidden sm:inline text-sm font-semibold text-smoke-300 dark:text-white`}
            >
              {i18n.language === "en" ? day.substring(0, 3).toUpperCase() : day}
            </p>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CalendarHeader;
