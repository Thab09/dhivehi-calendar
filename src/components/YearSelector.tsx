import useDateStore from "@/store/useDateStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const YearSelector = () => {
  const { selectedDate, setSelectedDate } = useDateStore();
  return (
    <Select
      onValueChange={(value) =>
        setSelectedDate({ month: selectedDate.month, year: Number(value) })
      }
    >
      <SelectTrigger className="w-24 border-none font-medium shadow-none focus:ring-0">
        <SelectValue placeholder={selectedDate.year} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2024">2024</SelectItem>
        <SelectItem disabled value="2025">
          2025
        </SelectItem>
        <SelectItem disabled value="2026">
          2026
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default YearSelector;
