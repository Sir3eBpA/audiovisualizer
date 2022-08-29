import React from "react";
import { VisualizerTopBar } from "./TopBar/VisualizerTopBar";
import { SongsDisplayer } from "../songsDisplayer/SongsDisplayer";
import { useVisualizerContext } from "../../contexts/VisualizerContext";
import { ColorLerp } from "../visualizerProperties/modifiers/colorLerp/ColorLerp";
import { BoxesScale } from "../visualizerProperties/modifiers/boxesScale/BoxesScale";
import { PropertiesDisplayer } from "../visualizerProperties/PropertiesDisplayer";
import { CameraDistanceChanger } from "../visualizerProperties/modifiers/cameraDistanceChanger/CameraDistanceChanger";
import { BackgroundChanger } from "../visualizerProperties/modifiers/background/BackgroundChanger";
import { ScreenShake } from "../visualizerProperties/modifiers/screenShake/ScreenShake";
import { Visualizers } from "../visualizerProperties/modifiers/visualizer/Visualizers";
import { usePageContext } from "../../contexts/PageContext";

export const VisualizerMenu = () => {
  const { menus, setMenusVisibility } = useVisualizerContext();
  const { pageData, setPageData } = usePageContext();

  const songsClickedHandler = () => {
    setMenusVisibility({ ...menus, songsVisible: !menus.songsVisible });
  };

  const modifiersClickedHandler = () => {
    setMenusVisibility({ ...menus, settingsVisible: !menus.settingsVisible });
  }

  return (
    <>
      <VisualizerTopBar onSampleSongsClicked={songsClickedHandler}
                        onvisualizerModifiersClicked={modifiersClickedHandler}
                        paddingRight={pageData.right} />

      <SongsDisplayer />

      <PropertiesDisplayer>
        <ScreenShake />
        <ColorLerp />
        <CameraDistanceChanger />
        <BoxesScale />
        <BackgroundChanger />
        <Visualizers />
      </PropertiesDisplayer>
    </>
  );
};
