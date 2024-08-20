import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePrayerTime from "@/hooks/usePrayerTime";

const PrayerTimes = () => {
  const { t } = useTranslation(["islands", "common"]);
  const islands = t("islands");
  const prayerSelectorCaption = t("general.2", { ns: "common" });
  const prayerHeaders = t("prayers", { ns: "common" });

  const { island, selectIsland, selectedRows } = usePrayerTime();

  return (
    <div className="mx-2 mt-6">
      <IslandSelector
        islands={islands}
        island={island}
        selectIsland={selectIsland}
        prayerSelectorCaption={prayerSelectorCaption}
      />
      <PrayerTimesDisplay
        selectedRows={selectedRows}
        prayerHeaders={prayerHeaders}
      />
    </div>
  );
};

interface IslandSelectorProps {
  islands: string;
  island: number;
  selectIsland: (islandCode: number) => void;
  prayerSelectorCaption: string;
}

const IslandSelector = ({
  islands,
  island,
  selectIsland,
  prayerSelectorCaption,
}: IslandSelectorProps) => {
  const { i18n } = useTranslation("common");
  return (
    <Select
      onValueChange={(value) => {
        selectIsland(Number(value));
      }}
      dir={i18n.dir()}
    >
      <div className="flex items-center justify-center gap-4 mt-4 w-full py-2 rounded-sm">
        <p className="font-bold text-xs text-black dark:text-smoke-200">
          {prayerSelectorCaption}
        </p>
        <SelectTrigger className="w-44 h-8 justify-between rounded-sm border-none shadow-none focus:ring-transparent text-sm font-normal text-sky-950 bg-sky-50 dark:text-stone-100 dark:bg-stone-700">
          <SelectValue placeholder={islands[island]} />
        </SelectTrigger>
      </div>
      <SelectContent className="rounded-sm h-72">
        {Object.entries(islands).map(([key, island]) => (
          <div
            key={key}
            className="flex justify-center rounded-none text-smoke-600 dark:text-white hover:cursor-pointer"
          >
            <SelectItem value={key}>
              <p
                className={`${
                  i18n.language === "dv"
                    ? "font-rasmee text-sm"
                    : "font-mona text-xs font-medium sm:text-sm"
                }`}
              >
                {island}
              </p>
            </SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  );
};

import {
  getDateFromDayOfYear,
  convertMinutesToHours,
} from "@/utils/prayerTimeUtils";
import useDateStore from "@/store/useDateStore";

interface PrayerTimesDisplayProps {
  selectedRows: string[][] | null;
  prayerHeaders: string;
}

const PrayerTimesDisplay = ({
  selectedRows,
  prayerHeaders,
}: PrayerTimesDisplayProps) => {
  const { selectedDate } = useDateStore();

  if (!selectedRows) return <p>No data available</p>;

  return (
    <div className="mt-1">
      <table className="table-fixed w-full">
        <thead className="border-b">
          <tr>
            {Object.entries(prayerHeaders).map(([key, header]) => (
              <th key={key} className="font-semibold text-center py-2 text-xs">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedRows.map((row, index) => (
            <tr key={index}>
              <td className="text-center text-xs tabular-nums font-semibold pt-2">
                {getDateFromDayOfYear(Number(row[0]) + 1, selectedDate.year)}
              </td>
              <td className="text-center text-xs font-normal tabular-nums pt-2">
                {convertMinutesToHours(Number(row[1]))}
              </td>
              <td className="text-center text-xs font-normal tabular-nums pt-2">
                {convertMinutesToHours(Number(row[2]))}
              </td>
              <td className="text-center text-xs font-normal tabular-nums pt-2">
                {convertMinutesToHours(Number(row[3]))}
              </td>
              <td className="text-center text-xs font-normal tabular-nums pt-2">
                {convertMinutesToHours(Number(row[4]))}
              </td>
              <td className="text-center text-xs font-normal tabular-nums pt-2">
                {convertMinutesToHours(Number(row[5]))}
              </td>
              <td className="text-center text-xs font-normal tabular-nums pt-2">
                {convertMinutesToHours(Number(row[6]))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrayerTimes;
