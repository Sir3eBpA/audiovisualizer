import React from "react";
import { VisualizerTopBar } from "./TopBar/VisualizerTopBar";
import { SongsDisplayer } from "../songsDisplayer/SongsDisplayer";
import { useVisualizerContext } from "../../contexts/VisualizerContext";
import { ScreenShake } from "../visualizerModifiers/modifiers/screenShake/ScreenShake";
import { ColorLerp } from "../visualizerModifiers/modifiers/colorLerp/ColorLerp";
import { BoxesScale } from "../visualizerModifiers/modifiers/boxesScale/BoxesScale";
import { PropertiesDisplayer } from "../visualizerModifiers/PropertiesDisplayer";
import { CameraDistanceChanger } from "../visualizerModifiers/modifiers/cameraDistanceChanger/CameraDistanceChanger";

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
      </PropertiesDisplayer>
    </>
  );
};
