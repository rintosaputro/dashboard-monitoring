// import type { SummaryCardType } from "../components/summary/summary.types";
import networkData from "../dataset/network_dataset.json";
import surveillanceData from "../dataset/surveillance_dataset.json";

// export function getSummaryData(): SummaryCardType[] {
//   const devicesUp = networkData.filter((item) => item.status === "up").length;

//   const devicesDown = networkData.filter(
//     (item) => item.status === "down",
//   ).length;

//   const activeCameras = surveillanceData.filter(
//     (item) => item.status === "active",
//   ).length;

//   const totalAlerts = surveillanceData.reduce(
//     (acc, item) => acc + item.alerts,
//     0,
//   );

//   return [
//     {
//       title: "Devices Up",
//       subtitle: "Network",
//       value: devicesUp,
//       status: "up",
//     },
//     {
//       title: "Devices Down",
//       subtitle: "Network",
//       value: devicesDown,
//       status: "down",
//     },
//     {
//       title: "Active Cameras",
//       subtitle: "Surveillance",
//       value: activeCameras,
//       status: "up",
//     },
//     {
//       title: "Total Alerts",
//       subtitle: "Surveillance",
//       value: totalAlerts,
//       status: "warning",
//     },
//   ];
// }

export function getNetworkChartData() {
  const up = networkData.filter((d) => d.status === "up").length;
  const down = networkData.filter((d) => d.status === "down").length;

  return {
    labels: ["Up", "Down"],
    datasets: [
      {
        data: [up, down],
        backgroundColor: ["#0068c9", "#83c8ff"],
        borderWidth: 0,
      },
    ],
  };
}

export function getAlertsChartData() {
  return {
    labels: surveillanceData.map((d) => d.name),
    datasets: [
      {
        label: "Alerts",
        data: surveillanceData.map((d) => d.alerts),
        backgroundColor: "#3b82f6",
      },
    ],
  };
}
