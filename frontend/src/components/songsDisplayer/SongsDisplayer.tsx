import * as React from "react";
import { VerticalGroup } from "../../containers/verticalGroup/VerticalGroup";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { AudioButton } from "../songsDisplayer/SongsDisplayerElements";
import { useAudioContext } from "../../contexts/AudioContext";

export const SongsDisplayer = () => {
  const [availableSongs, setAvailableSongs] = useState<string[]>();
  const { audioData, setAudioData } = useAudioContext();

  const fetchDefaultAudio = useCallback(async () => {
    const response = await axios.get("api/v1/audio/default");
    setAvailableSongs(response.data);
  }, []);

  useEffect(() => {
    fetchDefaultAudio().catch(console.error);
  }, []);

  const onPlayAudioClicked = (audioUrl: string) => {
    // reset active audio
    if (audioData?.activeAudio) {
      audioData.activeAudio.src = "";
    }

    const ctx = new AudioContext();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;

    // Make an audio node
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.autoplay = false;
    audio.load();
    audio.addEventListener('canplay', ev => {
      const source = ctx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(ctx.destination);
    });
    setAudioData({...audio, activeAudio: audio, analyser});
  };

  return (
    <VerticalGroup>
      {availableSongs?.map(x => <AudioButton key={x} onClick={() => onPlayAudioClicked(x)}>{x}</AudioButton>)}
    </VerticalGroup>
  );
};
