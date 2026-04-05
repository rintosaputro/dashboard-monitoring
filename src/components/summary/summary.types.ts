export type SummaryCardType = {
  title: string;
  value: number;
  // status?: "up" | "down" | "warning";
  subtitle: string;
};

export interface SummarySectionType {
  data: Record<string, number>;
  type: "Network" | "Surveillance";
}
