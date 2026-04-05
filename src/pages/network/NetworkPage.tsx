import SummarySection from "../../components/summary/SummarySection";
import { useRealtimeData } from "../../hooks/useRealtimeData";
import { getNetworkSummary } from "../../utils/network";
import networkInitialData from "../../dataset/network_dataset.json";
import { simulateNetwork } from "../../utils/network";
import NetworkMultiLineChart from "../../components/charts/network/NetworkMultiLineChart";
import NetworkPacketLossChart from "../../components/charts/network/NetworkPacketLossChart";
import NetworkTable from "../../components/table/Network/NetworkTable";

const NetworkPage = () => {
  const data = useRealtimeData(networkInitialData, simulateNetwork, 2000);

  return (
    <div className="flex flex-col gap-8">
      <SummarySection data={getNetworkSummary(data)} type="Network" />
      <div className="grid grid-cols-2 gap-8">
        <div className="h-auto">
          <NetworkMultiLineChart data={data} />
        </div>
        <div className="h-auto">
          <NetworkPacketLossChart data={data} />
        </div>
      </div>
      <NetworkTable data={data} />
    </div>
  );
};

export default NetworkPage;
