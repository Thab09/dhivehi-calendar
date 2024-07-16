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

import {
  getDateFromDayOfYear,
  convertMinutesToHours,
} from "@/utils/prayerTimeUtils";
import useDateStore from "@/store/useDateStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      <Table>
        <TableHeader>
          <TableRow>
            {Object.entries(prayerHeaders).map(([key, header]) => (
              <TableHead
                key={key}
                className="font-normal text-center text-smoke-400"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedRows.map((row, index) => (
            <TableRow key={index} className="">
              <TableCell className="text-center">
                {getDateFromDayOfYear(Number(row[0]) + 1, selectedDate.year)}
              </TableCell>
              <TableCell className="text-center">
                {convertMinutesToHours(Number(row[1]))}
              </TableCell>
              <TableCell className="text-center">
                {convertMinutesToHours(Number(row[2]))}
              </TableCell>
              <TableCell className="text-center">
                {convertMinutesToHours(Number(row[3]))}
              </TableCell>
              <TableCell className="text-center">
                {convertMinutesToHours(Number(row[4]))}
              </TableCell>
              <TableCell className="text-center">
                {convertMinutesToHours(Number(row[5]))}
              </TableCell>
              <TableCell className="text-center">
                {convertMinutesToHours(Number(row[6]))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PrayerTimes;
