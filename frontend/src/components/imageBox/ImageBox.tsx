import { Box } from "@mui/material";
import { ReactElement } from "react";

export type ImageBoxSettings = {
  objectFit?: string,
  width?: number|string,
  height?: number|string,
  src: string,
  children?: ReactElement
}

export const ImageBox = (props: ImageBoxSettings) => {
  return (
    <Box component="img"
         sx={{objectFit: props.objectFit || "cover"}}
         width={props.width || "100%"}
         height={props.height || 100}
         src={props.src}>
      {props.children}
    </Box>
  );
};
