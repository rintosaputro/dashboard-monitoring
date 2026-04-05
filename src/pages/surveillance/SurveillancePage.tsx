import SummarySection from "../../components/summary/SummarySection";
import { getSurveillanceSummary } from "../../utils/surveillance";
import surveillanceInitialData from "../../dataset/surveillance_dataset.json";
import { simulateSurveillance } from "../../utils/surveillance";
import { useRealtimeData } from "../../hooks/useRealtimeData";
import SurveillanceStatusChart from "../../components/charts/surveillance/SurveillanceStatusChart";
import SurveillanceAlertsChart from "../../components/charts/surveillance/SurveillanceAlertsChart";
import SurveillanceTable from "../../components/table/Surveillance/SurveillanceTable";
import { useSurveillanceStore } from "../../store/SurveillanceStore";

const SurveillancePage = () => {
  const { data, setData } = useSurveillanceStore();
  useRealtimeData(surveillanceInitialData, simulateSurveillance, setData, 2000);

  return (
    <div className="flex flex-col gap-8">
      <SummarySection data={getSurveillanceSummary(data)} type="Surveillance" />
      <div className="flex justify-between items-center gap-9 bg-white rounded-sm py-4 px-7">
        <div className="flex-1">
          <SurveillanceAlertsChart />
        </div>
        <SurveillanceStatusChart />
      </div>
      <SurveillanceTable />
    </div>
  );
};

export default SurveillancePage;
