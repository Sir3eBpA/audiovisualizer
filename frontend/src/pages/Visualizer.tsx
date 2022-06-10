import * as React from "react";
import { AudioVisualizer } from "../components/audioVisualizer/AudioVisualizer";
import { VisualizerPropertiesMenu } from "../components/visualizerPropertiesMenu/VisualizerPropertiesMenu";

export const Visualizer = () => {
  return (
    <>
      <VisualizerPropertiesMenu />
      <AudioVisualizer />
    </>
  );
};

