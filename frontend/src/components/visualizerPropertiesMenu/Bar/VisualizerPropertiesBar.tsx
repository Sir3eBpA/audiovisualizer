import React, { useState } from "react";
import { MenuButton } from "../../songsDisplayer/SongsDisplayerElements";
import { MdAudiotrack, MdOutlineSettingsInputComponent } from "react-icons/md";
import { Container } from "./VisualizerPropertiesBarElements";

export type PropertiesBarSettings = {
  onSampleSongsClicked: () => void,
  onVisualizerPropertiesClicked: () => void,
}

export const VisualizerPropertiesBar = (props: PropertiesBarSettings) => {
  return (
    <Container>
      <MenuButton onClick={() => props.onSampleSongsClicked()} variant="contained">
        <MdAudiotrack size={35} />
      </MenuButton>

      <MenuButton onClick={() => props.onVisualizerPropertiesClicked()} variant="contained">
        <MdOutlineSettingsInputComponent size={42} />
      </MenuButton>
    </Container>
  );
};
