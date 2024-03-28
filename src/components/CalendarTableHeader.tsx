import { useTranslation } from "react-i18next";

const CalendarTableHeader = () => {
  const { t, i18n } = useTranslation("common");
  const days = t("daysOfWeek");

  return (
    <thead>
      <tr className="bg-gradient-to-r from-sky-600 to-[#000080] rounded-sm">
        {Object.entries(days).map(([key, day]) => (
          <th
            key={key}
            className="text-white border font-bold text-xs sm:text-sm px-2 py-3"
          >
            <p className="sm:hidden">
              {i18n.language === "en"
                ? day.substring(0, 3).toUpperCase()
                : day.substring(0, 4).toUpperCase()}
            </p>
            <p className="hidden sm:inline">
              {i18n.language === "en" ? day.substring(0, 3).toUpperCase() : day}
            </p>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CalendarTableHeader;
