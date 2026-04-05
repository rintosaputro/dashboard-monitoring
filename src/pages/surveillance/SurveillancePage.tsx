import SummarySection from "../../components/summary/SummarySection";
import { getSurveillanceSummary } from "../../utils/surveillance";
import surveillanceInitialData from "../../dataset/surveillance_dataset.json";
import { simulateSurveillance } from "../../utils/surveillance";
import { useRealtimeData } from "../../hooks/useRealtimeData";
import SurveillanceStatusChart from "../../components/charts/SurveillanceStatusChart";
import SurveillanceAlertsChart from "../../components/charts/SurveillanceAlertsChart";
import SurveillanceTable from "../../components/table/Surveillance/SurveillanceTable";

const SurveillancePage = () => {
  const data = useRealtimeData(
    surveillanceInitialData,
    simulateSurveillance,
    2000,
  );

  return (
    <div className="flex flex-col gap-8">
      <SummarySection data={getSurveillanceSummary(data)} type="Surveillance" />
      <div className="flex justify-between items-center gap-9 bg-white rounded-sm py-4 px-7">
        <div className="flex-1">
          <SurveillanceAlertsChart data={data} />
        </div>
        <SurveillanceStatusChart data={data} />
      </div>
      <SurveillanceTable data={data} />
    </div>
  );
};

export default SurveillancePage;
