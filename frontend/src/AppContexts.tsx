import * as React from "react";
import { AudioContext, AudioData, useAudioContext } from "./contexts/AudioContext";
import { useState } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export const AppContexts = ({children}: ChildrenProps) => {
  const [audioData, setAudioData] = useState<AudioData>();

  return (
    <AudioContext.Provider value={{audioData, setAudioData}}>
      {children}
    </AudioContext.Provider>
  );
}
