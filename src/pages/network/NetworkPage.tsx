import SummarySection from "../../components/summary/SummarySection";
import { useRealtimeData } from "../../hooks/useRealtimeData";
import { getNetworkSummary } from "../../utils/network";
import networkInitialData from "../../dataset/network_dataset.json";
import { simulateNetwork } from "../../utils/network";
import NetworkMultiLineChart from "../../components/charts/NetworkMultiLineChart";
import NetworkPacketLossChart from "../../components/charts/NetworkPacketLossChart";

const NetworkPage = () => {
  const data = useRealtimeData(networkInitialData, simulateNetwork, 2000);

  return (
    <div className="flex flex-col gap-8">
      <SummarySection data={getNetworkSummary(data)} type="Network" />
      <div className="grid grid-cols-2 gap-8">
        <div className="h-125">
          <NetworkMultiLineChart data={data} />
        </div>
        <div className="h-125">
          <NetworkPacketLossChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;
