import React from "react";
import { AiFillSave } from "react-icons/ai";
import { ButtonElement } from "./UtilityButtonElments";
import { TooltipText } from "../../shared/SharedStyles";
import { Tooltip } from "@mui/material";
import { IconType } from "react-icons/lib";

export type UtilityButtonSettings = {
  onClick: () => void,
  tooltipText?: string,
  icon: IconType
}

export const UtilityButton = (props: UtilityButtonSettings) => {
  return (
    <Tooltip title={<TooltipText>{props.tooltipText}</TooltipText>} arrow placement="top">
      <ButtonElement onClick={props.onClick} size="large" color="default" aria-label="share">
        {React.createElement(props.icon, { size: 35 })}
      </ButtonElement>
    </Tooltip>
  );
};
