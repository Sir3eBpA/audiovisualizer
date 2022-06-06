import * as React from "react";
import { AudioButton, AudioButtonsGroup, Container } from "./AudioVisualizerElements";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

interface AudioPlayback {
  activeAudio?: HTMLAudioElement;
}

export const AudioVisualizer = () => {
  const [audioState, setAudioState] = useState<AudioPlayback>({});
  const [availableSongs, setAvailableSongs] = useState<string[]>();

  useEffect(() => {
    if (audioState.activeAudio) {
      const audio = audioState.activeAudio;
      audio.currentTime = 0;
      audio.load();
      audio.play();
    }
  }, [audioState]);

  const fetchDefaultAudio = useCallback(async () => {
    const response = await axios.get('api/v1/audio/default');
    setAvailableSongs(response.data);
  }, []);

  useEffect(() => {
    const res = fetchDefaultAudio().catch(console.error);
  }, [])

  const onPlayAudioClicked = (audioUrl: string) => {
    // reset active audio
    if (audioState.activeAudio) {
      audioState.activeAudio.src = "";
    }

    const ctx = new AudioContext();
    const analyser = ctx.createAnalyser();

    const numPoints = analyser.frequencyBinCount;
    const audioDataArray = new Uint8Array(numPoints);

    // Make an audio node
    const audio = new Audio();
    audio.loop = true;
    audio.autoplay = false;
    audio.src = audioUrl;
    audio.load();
    setAudioState({ ...audioState, activeAudio: audio });
  };

  return (
    <Container>
      <AudioButtonsGroup>
        {availableSongs?.map(x => <AudioButton key={x} onClick={() => onPlayAudioClicked(x)}>{x}</AudioButton>)}
      </AudioButtonsGroup>
    </Container>
  );
};
