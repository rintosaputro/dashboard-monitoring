export interface SurveillanceType {
  id: number;
  name: string;
  type: string;
  location: string;
  status: string;
  aiEnabled: boolean;
  lastUpdate: string;
  alerts: number;
}
