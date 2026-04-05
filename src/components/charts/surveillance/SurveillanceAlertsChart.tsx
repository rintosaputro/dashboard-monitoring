import { useSurveillanceStore } from "../../../store/SurveillanceStore";
import { Bar } from "../BaseChart";

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

const SurveillanceAlertsChart = () => {
  const { data } = useSurveillanceStore();

  const chartData = {
    labels: data.map((d) => `cmr ${d.name.split(" ")[1]}`),
    datasets: [
      {
        label: "Alerts",
        data: data.map((d) => d.alerts),
        backgroundColor: "#3b82f6",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div>
      <h3 className="mb-4 font-bold">Alerts</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SurveillanceAlertsChart;
