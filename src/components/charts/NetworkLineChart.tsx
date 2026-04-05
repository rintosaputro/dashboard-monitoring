import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { getInitialLatencySeries } from "../../utils/network";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const labels = Array.from({ length: 10 }, (_, i) => `T-${10 - i}`);

export default function NetworkLineChart() {
  const [series, setSeries] = useState(getInitialLatencySeries());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries((prev) =>
        prev.map((device) => {
          const lastValue = device.data[device.data.length - 1];

          const newValue = lastValue + Math.floor(Math.random() * 10 - 5);

          return {
            ...device,
            data: [...device.data.slice(1), Math.max(newValue, 0)],
          };
        }),
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: series.map((device, index) => ({
      label: device.name,
      data: device.data,
      borderColor:
        index === 0 ? "#3b82f6" : index === 1 ? "#22c55e" : "#f59e0b",
      backgroundColor: "transparent",
      tension: 0.4,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e2e8f0",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
        },
      },
      y: {
        ticks: {
          color: "#94a3b8",
        },
      },
    },
  };

  return (
    <div className="p-4 rounded-2xl flex-1">
      <h3 className="text-white mb-4 font-semibold">
        Network Latency (Realtime)
      </h3>

      <Line data={data} options={options} />
    </div>
  );
}
