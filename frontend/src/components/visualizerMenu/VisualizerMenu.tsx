import React from "react";
import { VisualizerTopBar } from "./TopBar/VisualizerTopBar";
import { SongsDisplayer } from "../songsDisplayer/SongsDisplayer";
import { useVisualizerContext } from "../../contexts/VisualizerContext";
import { PropertiesDisplayer } from "../visualizerProperties/PropertiesDisplayer";
import { ScreenShake } from "../visualizerProperties/properties/screenShake/ScreenShake";
import { ColorGradient } from "../visualizerProperties/properties/colorGradient/ColorGradient";

export const VisualizerMenu = () => {
  const { menus, setMenusVisibility } = useVisualizerContext();

  return (
    <>
      <VisualizerTopBar onSampleSongsClicked={() => setMenusVisibility({ ...menus, songsVisible: !menus.songsVisible })}
                        onVisualizerPropertiesClicked={() => setMenusVisibility({ ...menus, settingsVisible: !menus.settingsVisible })} />

      <SongsDisplayer />

      <PropertiesDisplayer>
        <ScreenShake />
        <ColorGradient />
      </PropertiesDisplayer>
    </>
  );
};
