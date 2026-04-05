import { useNetworkStore } from "../../../store/NetworkStore";
import { Bar } from "../BaseChart";

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const NetworkPacketLossChart = () => {
  const { data } = useNetworkStore();

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: "Packet Loss",
        data: data.map((d) => d.packetLoss),
        backgroundColor: "#4fc7d3",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="bg-white rounded-sm p-4">
      <h2 className="font-bold mb-5">Packet Loss</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default NetworkPacketLossChart;
