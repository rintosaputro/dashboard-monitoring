import type { SurveillanceType } from "../types/surveillance.type";

export const getSurveillanceSummary = (data: SurveillanceType[]) => {
  const total = data.length;
  const active = data.filter((d) => d.status === "active").length;
  const inactive = data.filter((d) => d.status === "inactive").length;
  const alerts = data.reduce((acc, d) => acc + d.alerts, 0);

  return { total, active, inactive, alerts };
};

const updateAlerts = (prev: number) => {
  const change = Math.floor(Math.random() * 3) - 1;
  const next = prev + change;
  return Math.max(0, Math.min(5, next));
};

export const simulateSurveillance = (data: SurveillanceType[]) => {
  return data.map((item) => {
    const random = Math.random();

    return {
      ...item,
      status:
        random > 0.9
          ? item.status === "active"
            ? "inactive"
            : "active"
          : item.status,
      alerts: updateAlerts(item.alerts),
      lastUpdate: new Date().toISOString(),
    };
  });
};
