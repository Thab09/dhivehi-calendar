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
  const { t } = useTranslation("islands");
  const islands = t("islands");
  const { island, selectIsland, selectedRows } = usePrayerTime();

  return (
    <div className="mx-2 mt-6 mb-80">
      <IslandSelector
        islands={islands}
        island={island}
        selectIsland={selectIsland}
      />
      <PrayerTimesDisplay selectedRows={selectedRows} />
    </div>
  );
};

interface IslandSelectorProps {
  islands: string;
  island: number;
  selectIsland: (islandCode: number) => void;
}

const IslandSelector = ({
  islands,
  island,
  selectIsland,
}: IslandSelectorProps) => {
  const { i18n } = useTranslation("common");
  return (
    <Select
      onValueChange={(value) => {
        selectIsland(Number(value));
      }}
      dir={i18n.dir()}
    >
      <div className="flex items-center gap-4 mt-2">
        <p className="">Prayer Times</p>
        <SelectTrigger className="w-44 justify-between rounded-sm shadow-none focus:ring-transparent text-sm font-medium text-sky-900 dark:text-stone-100 dark:bg-stone-700">
          <SelectValue placeholder={islands[island]} />
        </SelectTrigger>
      </div>
      <SelectContent className="rounded-sm h-72">
        {Object.entries(islands).map(([key, island]) => (
          <div
            key={key}
            className="flex justify-center rounded-sm text-smoke-600 dark:text-white hover:cursor-pointer"
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

import { getDateFromDayOfYear } from "@/utils/prayerTimeUtils";
import useDateStore from "@/store/useDateStore";

interface PrayerTimesDisplayProps {
  selectedRows: string[][] | null;
}

const PrayerTimesDisplay = ({ selectedRows }: PrayerTimesDisplayProps) => {
  const { selectedDate } = useDateStore();
  if (!selectedRows) return <p>No data available</p>;

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Date</th>
            <th>Fajr</th>
            <th>Sunrise</th>
            <th>Dhuhr</th>
            <th>Asr</th>
            <th>Magrib</th>
            <th>Isha</th>
          </tr>
        </thead>
        <tbody>
          {selectedRows.map((row, index) => (
            <tr key={index}>
              <td>
                {getDateFromDayOfYear(Number(row[0]) + 1, selectedDate.year)}
              </td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td> {row[3]}</td>
              <td>{row[4]}</td>
              <td> {row[5]}</td>
              <td> {row[6]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrayerTimes;
