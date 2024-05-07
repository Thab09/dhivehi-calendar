import { useTranslation } from "react-i18next";

const CalendarTableHeader = () => {
  const { t, i18n } = useTranslation("common");
  const days = t("daysOfWeek");

  return (
    <thead>
      <tr>
        {Object.entries(days).map(([key, day]) => (
          <th
            key={key}
            className="text-white bg-sky-900 rounded-sm font-medium text-xs sm:font-semibold sm:text-sm py-3"
          >
            <p className="sm:hidden">
              {i18n.language === "en"
                ? day.substring(0, 3)
                : day.substring(0, 4).toUpperCase()}
            </p>
            <p className="hidden sm:inline">
              {i18n.language === "en" ? day.substring(0, 3) : day}
            </p>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CalendarTableHeader;
