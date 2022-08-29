import * as React from "react";
import { AudioVisualizer } from "../../components/audioVisualizer/AudioVisualizer";
import { VisualizerMenu } from "../../components/visualizerMenu/VisualizerMenu";
import { BottomRightContainer } from "../../components/bottomRightContainer/BottomRightContainer";
import { UtilityButton } from "../../components/utilityButton/UtilityButton";
import { AiFillSave, AiOutlineEye, AiFillBug } from "react-icons/ai";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";
import { BackgroundPlayer } from "../../components/backgroundPlayer/BackgroundPlayer";
import { SavePopup } from "../../components/savePopup/SavePopup";
import { PresetLoader } from "../../components/presetLoader/PresetLoader";
import { usePageContext } from "../../contexts/PageContext";

export const Visualizer = () => {
  const { pageData, setPageData } = usePageContext();

  return (
    <>
      <PresetLoader/>
      <SavePopup/>
      <VisualizerMenu />
      <AudioVisualizer />
      <BottomRightContainer right={pageData.right}>
        <UtilityButton icon={AiFillBug} tooltipText="Open Babylon Inspector"
                       onClick={() => {
                         const isInspectorOn = !pageData.inspectorOn;
                         const rightOffset = isInspectorOn ? 300 : 0;
                         setPageData({...pageData, right: rightOffset, inspectorOn: isInspectorOn});
                       }}/>
        <UtilityButton icon={AiOutlineEye} tooltipText="Reset camera"
                       onClick={() => Emitter.emit(EmitterEvents.RESET_CAMERA)} />
        <UtilityButton icon={AiFillSave} tooltipText="Save and get public url"
                       onClick={() => Emitter.emit(EmitterEvents.SAVE_PRESET)} />
      </BottomRightContainer>
      <BackgroundPlayer/>
    </>
  );
};

