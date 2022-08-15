import * as React from "react";
import { AudioVisualizer } from "../../components/audioVisualizer/AudioVisualizer";
import { VisualizerMenu } from "../../components/visualizerMenu/VisualizerMenu";
import { BottomRightContainer } from "../../components/bottomRightContainer/BottomRightContainer";
import { UtilityButton } from "../../components/utilityButton/UtilityButton";
import { AiFillSave, AiOutlineEye } from "react-icons/ai";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";
import { BackgroundPlayer } from "../../components/backgroundPlayer/BackgroundPlayer";
import { SavePopup } from "../../components/savePopup/SavePopup";
import { PresetLoader } from "../../components/presetLoader/PresetLoader";

export const Visualizer = () => {

  return (
    <>
      <PresetLoader/>
      <SavePopup/>
      <VisualizerMenu />
      <AudioVisualizer />
      <BottomRightContainer>
        <UtilityButton icon={AiFillSave} tooltipText="Save and get public url"
                       onClick={() => Emitter.emit(EmitterEvents.SAVE_PRESET)} />
        <UtilityButton icon={AiOutlineEye} tooltipText="Reset camera"
                       onClick={() => Emitter.emit(EmitterEvents.RESET_CAMERA)} />
      </BottomRightContainer>
      <BackgroundPlayer/>
    </>
  );
};

