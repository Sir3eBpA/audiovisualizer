import React from "react";
import { VisualizerTopBar } from "./TopBar/VisualizerTopBar";
import { SongsDisplayer } from "../songsDisplayer/SongsDisplayer";
import { useVisualizerContext } from "../../contexts/VisualizerContext";
import { PropertiesDisplayer } from "../visualizerProperties/PropertiesDisplayer";
import { ScreenShake } from "../visualizerProperties/properties/screenShake/ScreenShake";
import { ColorLerp } from "../visualizerProperties/properties/colorLerp/ColorLerp";
import { BoxesScale } from "../visualizerProperties/properties/boxesScale/BoxesScale";

export const VisualizerMenu = () => {
  const { menus, setMenusVisibility } = useVisualizerContext();

  return (
    <>
      <VisualizerTopBar onSampleSongsClicked={() => setMenusVisibility({ ...menus, songsVisible: !menus.songsVisible })}
                        onVisualizerPropertiesClicked={() => setMenusVisibility({ ...menus, settingsVisible: !menus.settingsVisible })} />

      <SongsDisplayer />

      <PropertiesDisplayer>
        <ScreenShake />
        <ColorLerp />
        <BoxesScale />
      </PropertiesDisplayer>
    </>
  );
};
