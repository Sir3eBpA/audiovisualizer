import { Box, Typography } from "@mui/material";
import { RoundedIcon } from "../roundedIcon/RoundedIcon";
import { IconType } from "react-icons/lib";

export type IconWithTextItemSettings = {
  icon: IconType,
  header: string,
  body: string,
  iconSize?: number|undefined,
  iconBackgroundColor?: string|undefined,
  iconPadding?: number,
}

export const IconWithTextItem = (props: IconWithTextItemSettings) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="row">
      <Box paddingRight={3} marginLeft={2}>
        <RoundedIcon icon={props.icon}
                     iconSize={props.iconSize || 45}
                     backgroundColor={props.iconBackgroundColor || "white"}
                     padding={props.iconPadding || 0.9}
                     borderRadius={90} />
      </Box>
      <Box>
        <Typography variant="h3" fontWeight="bold">{props.header}</Typography>
        <Typography>
          {props.body}
        </Typography>
      </Box>
    </Box>
  );
};
