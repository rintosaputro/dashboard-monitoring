import type { NetworkType } from "../../types/network.type";
import { Line } from "./BaseChart";

const options = {
  plugins: {
    legend: {
      labels: {
        color: "#000",
        padding: 20,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};

const NetworkMultiLineChart = ({ data }: { data: NetworkType[] }) => {
  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: "Bandwidth",
        data: data.map((d) => d.bandwidth),
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
      },
      {
        label: "Latency",
        data: data.map((d) => d.latency),
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white rounded-sm p-4">
      <h2 className="font-bold mb-5">Network Performance</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default NetworkMultiLineChart;
