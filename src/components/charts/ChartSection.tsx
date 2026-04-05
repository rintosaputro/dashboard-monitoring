import NetworkPieChart from "./NetworkPieChart";
import AlertsBarChart from "./AlertsBarChart";
import NetworkLineChart from "./NetworkLineChart";

const ChartSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-7 rounded-2xl bg-white">
        <NetworkPieChart />
        <NetworkLineChart />
      </div>
      <AlertsBarChart />
    </section>
  );
};

export default ChartSection;
