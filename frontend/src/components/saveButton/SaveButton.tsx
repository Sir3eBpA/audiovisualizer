import React from "react";
import { AiFillSave } from "react-icons/ai";
import { FabSave, SaveButtonContainer } from "./SaveButtonElments";
import { TooltipText } from "../../shared/SharedStyles";
import { Tooltip } from "@mui/material";

export type SaveButtonSettings = {
  onClick: () => void
}

export const SaveButton = (props: SaveButtonSettings) => {
  return (
    <SaveButtonContainer>
      <Tooltip title={<TooltipText>Save and get public url</TooltipText>} arrow placement="bottom">
        <FabSave onClick={props.onClick} size="large" color="default" aria-label="share">
          <AiFillSave size={35} />
        </FabSave>
      </Tooltip>
    </SaveButtonContainer>
  );
};
