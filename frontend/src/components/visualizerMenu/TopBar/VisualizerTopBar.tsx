import React from "react";
import { MenuButton } from "../../songsDisplayer/SongsDisplayerElements";
import { MdAudiotrack, MdOutlineSettingsInputComponent } from "react-icons/md";
import { Container } from "./VisualizerTopBarElements";
import Tooltip from "@mui/material/Tooltip";
import { TooltipText } from "../../../shared/SharedStyles";

export type PropertiesBarSettings = {
  onSampleSongsClicked: () => void,
  onvisualizerModifiersClicked: () => void,
  paddingRight?: number|string,
}

export const VisualizerTopBar = (props: PropertiesBarSettings) => {
  return (
    <Container style={{ paddingRight: props.paddingRight || 0 }}>
      <Tooltip title={<TooltipText>Sample songs (CC0 license)</TooltipText>} arrow placement="bottom">
        <MenuButton onClick={() => props.onSampleSongsClicked()} variant="contained">
          <MdAudiotrack size={35} />
        </MenuButton>
      </Tooltip>

      <Tooltip title={<TooltipText>Visualizer settings</TooltipText>} arrow placement="bottom">
        <MenuButton onClick={() => props.onvisualizerModifiersClicked()} variant="contained">
          <MdOutlineSettingsInputComponent size={42} />
        </MenuButton>
      </Tooltip>
    </Container>
  );
};
