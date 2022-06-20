import { Box, Paper, Switch, Typography } from "@mui/material";
import React, { ReactElement } from "react";

export type GroupSwitchSettings = {
  text: string;
  active: boolean;
  setActive: (active: boolean) => void;
  children?: ReactElement | ReactElement[];
}

export const GroupSwitch = (props: GroupSwitchSettings) => {
  return (
    <Paper elevation={0} sx={{ minWidth: "350px" }}>
      <Switch
        checked={props.active}
        onChange={e => props.setActive(!props.active)}
        inputProps={{ "aria-label": "controlled" }}
      />
      {props.text}
      {props.active &&
        <Box>
          {props.children}
        </Box>
      }
    </Paper>
  );
};
