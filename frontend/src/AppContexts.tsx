import * as React from "react";
import { AudioContext, AudioData } from "./contexts/AudioContext";
import { useState } from "react";
import { MenusVisibility, VisualizerContext } from "./contexts/VisualizerContext";
import { ModifiersContext } from "./contexts/ModifiersContext";
import { Defaults, Modifiers } from "./Constants";
import { DefaultPageData, PageContext, PageData } from "./contexts/PageContext";

interface ChildrenProps {
  children: React.ReactNode;
}

const BuildModifiersList = () => {
  const modifiers = Object.values(Modifiers);
  let data = Object.fromEntries(modifiers.map(key => [key, {}]));
  data = Object.assign(data, Defaults);
  return data;
};

export const AppContexts = ({ children }: ChildrenProps) => {
  const [audioData, setAudioData] = useState<AudioData>();
  const [menus, setMenusVisibility] = useState<MenusVisibility>({ songsVisible: false, settingsVisible: false });
  const [data, setData] = useState(BuildModifiersList());
  const [pageData, setPageData] = useState<PageData>({...DefaultPageData});

  return (
    <AudioContext.Provider value={{ audioData, setAudioData }}>
      <VisualizerContext.Provider value={{ menus, setMenusVisibility }}>
        <ModifiersContext.Provider value={{ data, setData }}>
          <PageContext.Provider value={{ pageData, setPageData }}>
            {children}
          </PageContext.Provider>
        </ModifiersContext.Provider>
      </VisualizerContext.Provider>
    </AudioContext.Provider>
  );
};
