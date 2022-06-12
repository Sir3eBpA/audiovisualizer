import * as React from "react";
import { AudioVisualizer } from "../components/audioVisualizer/AudioVisualizer";
import { VisualizerMenu } from "../components/visualizerMenu/VisualizerMenu";
import { ShareButton } from "../components/shareButton/ShareButton";

export const Visualizer = () => {
  return (
    <>
      <VisualizerMenu />
      <AudioVisualizer />
      <ShareButton onClick={() => {}}/>
    </>
  );
};

