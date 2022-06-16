import * as React from "react";
import { AudioContext, AudioData} from "./contexts/AudioContext";
import { useState } from "react";
import { MenusVisibility, VisualizerContext} from "./contexts/VisualizerContext";
import { ModifiersContext } from "./contexts/ModifiersContext";
import { Modifiers } from "./Constants";

interface ChildrenProps {
  children: React.ReactNode;
}

const BuildModifiersList = () => {
  const modifiers = Object.values(Modifiers);
  return Object.fromEntries(modifiers.map(key => [key, {}]));
}

export const AppContexts = ({children}: ChildrenProps) => {
  const [audioData, setAudioData] = useState<AudioData>();
  const [menus, setMenusVisibility] = useState<MenusVisibility>({songsVisible: false, settingsVisible: false});
  const [data, setData] = useState(BuildModifiersList());

  return (
    <AudioContext.Provider value={{audioData, setAudioData}}>
      <VisualizerContext.Provider value={{menus, setMenusVisibility}}>
        <ModifiersContext.Provider value={{data, setData}}>
          {children}
        </ModifiersContext.Provider>
      </VisualizerContext.Provider>
    </AudioContext.Provider>
  );
}
