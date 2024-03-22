import { useTranslation } from "react-i18next";

const CalendarTableHeader = () => {
  const { t, i18n } = useTranslation("common");
  const days = t("daysOfWeek");

  return (
    <thead>
      <tr className="bg-gradient-to-r from-sky-500 to-[#000080]">
        {Object.entries(days).map(([key, day]) => (
          // <th key={key}>{day}</th>
          <th key={key} className="text-gray-100 text-[0.65rem] rounded-sm p-1">
            {i18n.language === "en" ? day.substring(0, 3).toUpperCase() : day}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CalendarTableHeader;
