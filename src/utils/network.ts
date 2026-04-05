import networkData from "../dataset/network_dataset.json";
import type { NetworkType } from "../types/network.type";

export function getInitialLatencySeries() {
  const devices = networkData.slice(0, 3);

  return devices.map((device) => ({
    name: device.name,
    data: Array.from({ length: 10 }, () => device.latency),
  }));
}

export const getNetworkSummary = (data: NetworkType[]) => {
  const total = data.length;
  const up = data.filter((d) => d.status === "up").length;
  const down = data.filter((d) => d.status === "down").length;
  const avgLatency = data.reduce((acc, d) => acc + d.latency, 0) / total;

  return { total, up, down, avgLatency: Math.round(avgLatency) };
};

export const simulateNetwork = (data: NetworkType[]) => {
  return data.map((item) => {
    if (Math.random() < 0.7) return item;

    const newBandwidth = item.bandwidth + (Math.random() * 20 - 10);
    const newLatency = item.latency + (Math.random() * 10 - 5);
    const newPacketLoss = item.packetLoss + (Math.random() - 0.5);

    return {
      ...item,
      status:
        Math.random() > 0.95
          ? item.status === "up"
            ? "down"
            : "up"
          : item.status,

      bandwidth: Math.max(0, Math.min(1000, newBandwidth)),
      latency: Math.max(1, Math.min(200, newLatency)),
      packetLoss: Math.max(0, Math.min(5, newPacketLoss)),

      lastUpdate: new Date().toISOString(),
    };
  });
};
