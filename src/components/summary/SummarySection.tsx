import type { SummarySectionType } from "./summary.types";
import SummaryCard from "./SummaryCard";

const SummarySection = ({ data, type }: SummarySectionType) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.keys(data).map((key) => (
        <SummaryCard
          key={key}
          title={key}
          value={Number(data[key as keyof typeof data])}
          subtitle={type}
        />
      ))}
    </div>
  );
};

export default SummarySection;
