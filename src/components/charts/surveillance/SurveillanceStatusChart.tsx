import type { SurveillanceType } from "../../../types/surveillance.type";
import BadgePie from "../BadgePie";
import { Pie } from "../BaseChart";

const options = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
};

const SurveillanceStatusChart = ({ data }: { data: SurveillanceType[] }) => {
  const active = data.filter((d) => d.status === "active").length;
  const inactive = data.filter((d) => d.status === "inactive").length;

  const chartData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [active, inactive],
        backgroundColor: ["#02a499", "#f8b425"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="h-full">
      <h3 className="mb-4 font-semibold text-center">Status</h3>

      <div className="w-60">
        <Pie data={chartData} options={options} />
        <div className="flex flex-col gap-7 items-center justify-center mt-5">
          <BadgePie color="#f8b425" title={`Inactive: ${inactive}`} />
          <BadgePie color="#02a499" title={`Active: ${active}`} />
        </div>
      </div>
    </div>
  );
};

export default SurveillanceStatusChart;
