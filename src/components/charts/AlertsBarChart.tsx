import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { getAlertsChartData } from "../../utils/summary";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AlertsBarChart = () => {
  const data = getAlertsChartData();

  return (
    <div className="bg-slate-800 p-4 rounded-2xl">
      <h3 className="text-white mb-4 font-semibold">Surveillance Alerts</h3>

      <Bar data={data} />
    </div>
  );
};

export default AlertsBarChart;
