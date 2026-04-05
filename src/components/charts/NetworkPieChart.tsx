import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getNetworkChartData } from "../../utils/summary";
import BadgePie from "./BadgePie";

ChartJS.register(ArcElement, Tooltip, Legend);

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

const NetworkPieChart = () => {
  const data = getNetworkChartData();

  return (
    <div className="p-4">
      <h3 className="mb-4 font-semibold">Network Status</h3>

      <div className="w-60">
        <Pie data={data} options={options} />
        <div className="flex gap-7 justify-center mt-5">
          <BadgePie color="#83c8ff" title="Down" />
          <BadgePie color="#0068c9" title="Up" />
        </div>
      </div>
    </div>
  );
};

export default NetworkPieChart;
