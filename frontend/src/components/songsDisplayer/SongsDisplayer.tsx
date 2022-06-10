import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { AudioContainer, MenuButton } from "../songsDisplayer/SongsDisplayerElements";
import { useAudioContext } from "../../contexts/AudioContext";
import { Divider, Drawer, Stack, Typography } from "@mui/material";
import { MdAudiotrack } from "react-icons/md";
import { SongButton } from "./SongButton";

export const SongsDisplayer = () => {
  const [availableSongs, setAvailableSongs] = useState<string[]>();
  const { audioData, setAudioData } = useAudioContext();
  const [menuOpen, setMenuOpen] = useState(false);

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
    audio.addEventListener("canplay", ev => {
      const source = ctx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(ctx.destination);
    });
    setAudioData({ ...audio, activeAudio: audio, analyser });
  };

  return (
    <>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}
                  variant="contained">
        <MdAudiotrack size={35} />
      </MenuButton>
      <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <AudioContainer>
          <Typography variant="h5"
                      component="h1"
                      textAlign="center"
                      color="text.primary"
                      fontWeight="bold"
                      marginBottom="0.35em">
            Default songs
          </Typography>
          <Stack direction="column"
                 spacing={0.5}
                 divider={<Divider orientation="horizontal" flexItem />}
                 margin="0.35em auto 0.5em auto">
            {availableSongs?.map(x => <SongButton songName={x} songUrl={x} onClick={onPlayAudioClicked} />)}
          </Stack>
        </AudioContainer>
      </Drawer>
    </>
  );
};
