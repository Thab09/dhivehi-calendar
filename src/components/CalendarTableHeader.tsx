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
            className="text-white bg-sky-700 rounded-sm font-medium text-xs sm:text-sm py-3"
          >
            <p
              className={`${
                i18n.language === "dv" && "text-sm font-semibold"
              } sm:hidden`}
            >
              {i18n.language === "en"
                ? day.substring(0, 3)
                : day.substring(0, 4).toUpperCase()}
            </p>
            <p
              className={`${
                i18n.language === "dv" && "text-base font-semibold"
              } hidden sm:inline`}
            >
              {i18n.language === "en" ? day.substring(0, 3) : day}
            </p>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CalendarTableHeader;
