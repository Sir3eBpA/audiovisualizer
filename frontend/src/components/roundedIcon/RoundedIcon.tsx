import { Box } from "@mui/material";
import { IconType } from "react-icons/lib";
import React from "react";

export type RoundedIconSettings = {
  borderRadius?: number,
  borderColor?: string,
  backgroundColor?: string,
  width?: number | string,
  height?: number | string,
  icon: IconType,
  iconSize?: number,
  margin?: number | string,
  padding?: number | string
}

export const RoundedIcon = (props: RoundedIconSettings) => {
  return (
    <Box bgcolor={props.backgroundColor}
         borderRadius={props.borderRadius}
         borderColor={props.borderColor}
         width={props.width}
         height={props.height}
         margin={props.margin || "auto"}
         padding={props.padding || 0}
         display={"inline-flex"}
         overflow={"hidden"}
         textOverflow={"ellipsis"}
         textAlign={"center"}
         justifyContent={"center"}>
      {React.createElement(props.icon, { size: props.iconSize })}
    </Box>
  );
};
