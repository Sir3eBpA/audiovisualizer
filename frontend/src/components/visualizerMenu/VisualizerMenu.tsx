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

export const VisualizerMenu = () => {
  const { menus, setMenusVisibility } = useVisualizerContext();

  return (
    <>
      <VisualizerTopBar onSampleSongsClicked={() => setMenusVisibility({ ...menus, songsVisible: !menus.songsVisible })}
                        onvisualizerModifiersClicked={() => setMenusVisibility({ ...menus, settingsVisible: !menus.settingsVisible })} />

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
