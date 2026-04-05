import { useState } from "react";
import type { NetworkType } from "../../../types/network.type";
import SearchInput from "../../form/SearchInput";
import { BaseTable, type Column } from "../BaseTable";
import PageRow from "../../form/PageRow";
import { usePageRowContext } from "../../../app/PageRowContext";
import SiteButton from "./SiteButton";
import { useSortContext } from "../../../app/SortContext";

const networkColumns: Column<NetworkType>[] = [
  {
    key: "name",
    label: "Router",
    render: (value: string) => <strong>{value}</strong>,
  },
  {
    key: "site",
    label: <SiteButton />,
  },
  { key: "bandwidth", label: "Bandwidth" },
  { key: "latency", label: "Latency" },
  { key: "packetLoss", label: "Packet Loss" },
  {
    key: "status",
    label: "Status",
    render: (value: string) => (
      <span
        className={`px-2 py-1 rounded-full text-xs text-white ${
          value === "up" ? "bg-success" : "bg-warning"
        }`}
      >
        {value}
      </span>
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

const NetworkTable = ({ data }: { data: NetworkType[] }) => {
  const [search, setSearch] = useState("");

  const { pageRow, setPageRow } = usePageRowContext();
  const { sort, setSort } = useSortContext();

  const filteredData = data
    .filter((item) => {
      const searchCondition =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.site.toLowerCase().includes(search.toLowerCase());

      return searchCondition;
    })
    .sort((a, b) => {
      const numA = parseInt(a.site.replace(/\D/g, ""), 10);
      const numB = parseInt(b.site.replace(/\D/g, ""), 10);

      if (sort === "asc") return numA - numB;
      if (sort === "desc") return numB - numA;

      return 0;
    });

  const handleResetFilter = () => {
    setSearch("");
    setPageRow(10);
    setSort(null);
  };

  return (
    <div className="mt-9">
      <h2 className="text-xl font-semibold mb-5">Surveillance Table</h2>
      <div>
        <form className="flex gap-5">
          <div className="flex-1">
            <SearchInput
              placeholder="Search router or site..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-1.5">
            <PageRow dataLength={filteredData.length} />
            <button
              title="Reset Filter"
              type="button"
              onClick={handleResetFilter}
              className="bg-primary text-white rounded-md px-5 cursor-pointer hover:opacity-50"
            >
              Reset
            </button>
          </div>
        </form>
        <div className="bg-white rounded-lg overflow-hidden mt-5 mb-14">
          <BaseTable
            columns={networkColumns}
            data={filteredData.slice(0, pageRow - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default NetworkTable;
