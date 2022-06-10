import React from "react";
import { VisualizerPropertiesBar } from "./Bar/VisualizerPropertiesBar";
import { SongsDisplayer } from "../songsDisplayer/SongsDisplayer";
import { useVisualizerContext } from "../../contexts/VisualizerContext";

export const VisualizerPropertiesMenu = () => {
  const { menus, setMenusVisibility } = useVisualizerContext();

  return (
    <>
      <VisualizerPropertiesBar onSampleSongsClicked={() => setMenusVisibility({...menus, songsVisible: !menus.songsVisible})}
                               onVisualizerPropertiesClicked={() => setMenusVisibility({...menus, settingsVisible: !menus.settingsVisible})}/>

      <SongsDisplayer/>
    </>
  )
}
