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
  console.log(prayerHeaders);

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
      <div className="flex items-center gap-4 mt-2">
        <p className="font-normal text-sm">{prayerSelectorCaption}</p>
        <SelectTrigger className="w-44 justify-between rounded-sm border-none shadow-none focus:ring-transparent text-sm font-medium text-sky-50 bg-sky-700 dark:text-stone-100 dark:bg-stone-700">
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
    <div className="mt-3">
      <table className="table-fixed w-full">
        <thead className="bg-gray-50">
          <tr>
            {Object.entries(prayerHeaders).map(([key, header]) => (
              <th
                key={key}
                className="font-medium text-center py-2 text-xs text-slate-800"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedRows.map((row, index) => (
            <tr key={index} className="">
              <td className="text-center text-xs tabular-nums font-medium pt-2">
                {getDateFromDayOfYear(Number(row[0]) + 1, selectedDate.year)}
              </td>
              <td className="text-center text-xs font-light tabular-nums pt-2">
                {convertMinutesToHours(Number(row[1]))}
              </td>
              <td className="text-center text-xs font-light tabular-nums pt-2">
                {convertMinutesToHours(Number(row[2]))}
              </td>
              <td className="text-center text-xs font-light tabular-nums pt-2">
                {convertMinutesToHours(Number(row[3]))}
              </td>
              <td className="text-center text-xs font-light tabular-nums pt-2">
                {convertMinutesToHours(Number(row[4]))}
              </td>
              <td className="text-center text-xs font-light tabular-nums pt-2">
                {convertMinutesToHours(Number(row[5]))}
              </td>
              <td className="text-center text-xs font-light tabular-nums pt-2">
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
