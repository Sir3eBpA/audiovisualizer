import { useEffect, useState } from "react";
import { VisualizerData } from "../../../models/VisualizerData";
import { asyncGetTopVisualizers } from "../../../services/Visualizer";
import { PresetsList } from "../PresetsList";

export type HomePresetsListContainerSettings = {
  maxCols: number,
  rows: number,
}

export const HomePresetsListContainer = (props: HomePresetsListContainerSettings) => {
  const [data, setData] = useState<VisualizerData[]>([]);

  useEffect(() => {
    const rows = props.rows;
    const cols = props.maxCols;

    const fetchData = async () => {
      const returnData = await asyncGetTopVisualizers(cols * rows);
      const visualizers = returnData.visualizers;
      setData(visualizers);
    }

    fetchData();
  }, []);

  return (
    <PresetsList data={data}/>
  );
}
