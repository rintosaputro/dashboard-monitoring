import type { SummaryCardType } from "./summary.types";

export default function SummaryCard({
  title,
  value,
  subtitle,
}: SummaryCardType) {
  return (
    <div className="bg-primary text-white/70 rounded-lg p-4 shadow-md flex flex-col gap-6">
      <span className="text-sm font-semibold">{title.toLocaleUpperCase()}</span>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{value}</h2>
      </div>

      <span className="text-xs">{subtitle}</span>
    </div>
  );
}
