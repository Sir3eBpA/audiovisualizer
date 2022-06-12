import * as React from "react";
import { AudioVisualizer } from "../components/audioVisualizer/AudioVisualizer";
import { VisualizerMenu } from "../components/visualizerMenu/VisualizerMenu";
import { SaveButton } from "../components/saveButton/SaveButton";

export const Visualizer = () => {
  return (
    <>
      <VisualizerMenu />
      <AudioVisualizer />
      <SaveButton onClick={() => {}}/>
    </>
  );
};

