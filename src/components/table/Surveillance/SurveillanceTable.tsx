import { useState } from "react";
import type { SurveillanceType } from "../../../types/surveillance.type";
import SearchInput from "../../form/SearchInput";
import type { Column } from "../BaseTable";
import { BaseTable } from "../BaseTable";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import PageRow from "../../form/PageRow";
import { usePageRowContext } from "../../../app/PageRowContext";
import Select from "../../form/Select";

const surveillanceColumns: Column<SurveillanceType>[] = [
  {
    key: "name",
    label: "Camera",
    render: (value: string) => <strong>{value}</strong>,
  },
  { key: "type", label: "Type" },
  { key: "location", label: "Location" },
  { key: "alerts", label: "Alerts" },
  {
    key: "status",
    label: "Status",
    render: (value: string) => (
      <span
        className={`px-2 py-1 rounded-full text-xs text-white ${
          value === "active" ? "bg-success" : "bg-warning"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "aiEnabled",
    label: "AI Enabled",
    render: (value: boolean) => (
      <div className="mx-auto">
        {value ? (
          <FaCircleCheck className="text-green-500" />
        ) : (
          <IoMdCloseCircle className="text-red-500 text-[17px]" />
        )}
      </div>
    ),
  },
  {
    key: "lastUpdate",
    label: "Last Update",
    render: (value: string) => {
      const date = new Date(value);
      return date.toLocaleDateString("ID-id");
    },
  },
];

const aiFilterOptions = [
  { label: "All Camera", value: "all" },
  { label: "AI Enabled", value: "enabled" },
  { label: "Non AI", value: "disabled" },
];

const SurveillanceTable = ({ data }: { data: SurveillanceType[] }) => {
  const [search, setSearch] = useState("");
  const [aiFilter, setAiFilter] = useState<"all" | "enabled" | "disabled">(
    "all",
  );

  const { pageRow } = usePageRowContext();

  const filteredData = data.filter((item) => {
    const searchCondition =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    if (aiFilter === "enabled") {
      return searchCondition && item.aiEnabled;
    }
    if (aiFilter === "disabled") {
      return searchCondition && !item.aiEnabled;
    }
    return searchCondition;
  });

  return (
    <div className="mt-9">
      <h2 className="text-xl font-semibold mb-5">Surveillance Table</h2>
      <div>
        <form className="flex gap-5">
          <div className="flex-1">
            <SearchInput
              placeholder="Search cameras or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-1.5">
            <Select
              options={aiFilterOptions}
              value={aiFilter}
              onChange={(v) => setAiFilter(v as any)}
            />
            <PageRow dataLength={filteredData.length} />
          </div>
        </form>
        <div className="bg-white rounded-lg overflow-hidden mt-5 mb-14">
          <BaseTable
            columns={surveillanceColumns}
            data={filteredData.slice(0, pageRow - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default SurveillanceTable;
