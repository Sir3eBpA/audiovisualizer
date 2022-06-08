import {createContext, useContext} from "react";

// ====================
// Audio Context
// ====================

export type AudioData = {
  activeAudio?: HTMLAudioElement | null;
  analyser?: AnalyserNode;
}

export type AudioState = {
  audioData?: AudioData
  setAudioData: (data: AudioData) => void
};

export const AudioContext = createContext<AudioState>({
  audioData: {},
  setAudioData: () => {}
});

export const useAudioContext = () => useContext(AudioContext);
