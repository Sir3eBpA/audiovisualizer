import { AudioButton } from "./SongButtonElements";
import * as React from "react";

export type SongButtonSettings = {
  songName: string,
  songUrl: string,
  onClick: (url: string) => void
};

export const SongButton = (props: SongButtonSettings) => {
  return (
    <AudioButton sx={{ color: "text.primary" }}
                 variant="contained"
                 key={props.songUrl}
                 onClick={() => props.onClick(props.songUrl)}>
      {props.songName}
    </AudioButton>
  )
}
