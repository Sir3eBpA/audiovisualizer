import * as React from "react";
import { AudioContext, AudioData, useAudioContext } from "./contexts/AudioContext";
import { useState } from "react";
import { MenusVisibility, VisualizerContext, VisualizerState } from "./contexts/VisualizerContext";

interface ChildrenProps {
  children: React.ReactNode;
}

export const AppContexts = ({children}: ChildrenProps) => {
  const [audioData, setAudioData] = useState<AudioData>();
  const [menus, setMenusVisibility] = useState<MenusVisibility>({songsVisible: false, settingsVisible: false});

  return (
    <AudioContext.Provider value={{audioData, setAudioData}}>
      <VisualizerContext.Provider value={{menus, setMenusVisibility}}>
        {children}
      </VisualizerContext.Provider>
    </AudioContext.Provider>
  );
}
