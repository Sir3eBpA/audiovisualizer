import * as React from "react";
import { AudioVisualizer } from "../components/audioVisualizer/AudioVisualizer";
import { VisualizerMenu } from "../components/visualizerMenu/VisualizerMenu";
import { BottomRightContainer } from "../components/bottomRightContainer/BottomRightContainer";
import { UtilityButton } from "../components/utilityButton/UtilityButton";
import { AiFillSave, AiOutlineEye } from "react-icons/ai";

export const Visualizer = () => {
  return (
    <>
      <VisualizerMenu />
      <AudioVisualizer />
      <BottomRightContainer>
        <UtilityButton icon={AiFillSave} tooltipText="Save and get public url" onClick={() => {}}/>
        <UtilityButton icon={AiOutlineEye} tooltipText="Reset camera" onClick={() => {}}/>
      </BottomRightContainer>
    </>
  );
};

