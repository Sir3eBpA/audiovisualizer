import { useEffect, useState } from "react";
import { VisualizerData } from "../../../models/VisualizerData";
import { asyncGetTopVisualizers } from "../../../services/Visualizer";
import { PresetsList } from "../PresetsList";
import InfiniteScroll from "react-infinite-scroll-component";

export type BrowsePresetsListContainerSettings = {
  prefetchAmount?: number,
}

export const BrowsePresetsListContainer = (props: BrowsePresetsListContainerSettings) => {
  const prefetchAmount = props.prefetchAmount || 15;

  const [data, setData] = useState<VisualizerData[]>([]);
  const [amount, setAmount] = useState(prefetchAmount);

  useEffect(() => { fetchData(); }, []);

  const fetchData = () => {
    async function pullMoreData() {
      try {
        const returnData = await asyncGetTopVisualizers(prefetchAmount, data.length);
        const visualizers = returnData.visualizers;
        setAmount(returnData.totalAmount);
        setData(data.concat(visualizers));
      }
      catch (ex) { console.log(ex); }
    }

    pullMoreData();
  };

  return (
    <InfiniteScroll next={fetchData}
                    hasMore={data.length <= amount}
                    loader={<h1>LOADING...</h1>}
                    dataLength={data.length}>
      <PresetsList data={data} />
    </InfiniteScroll>
  );

};
