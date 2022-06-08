import * as React from "react";
import { SongsDisplayer } from "../components/songsDisplayer/SongsDisplayer";
import { AudioVisualizer } from "../components/audioVisualizer/AudioVisualizer";

export const Visualizer = () => {
  return (
    <>
      <SongsDisplayer/>
      <AudioVisualizer/>
    </>
  );
}

