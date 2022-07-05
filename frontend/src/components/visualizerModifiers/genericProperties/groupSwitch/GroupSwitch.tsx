import { Box, Paper, Switch} from "@mui/material";
import React, { ReactElement } from "react";
import { Label, SwitchContainer } from "./GroupSwitchElements";

export type GroupSwitchSettings = {
  text: string;
  active: boolean;
  setActive: (active: boolean) => void;
  children?: ReactElement | ReactElement[];
}

export const GroupSwitch = (props: GroupSwitchSettings) => {
  return (
    <Paper elevation={2} sx={{ minWidth: "350px" }}>
      <SwitchContainer>
        <Switch
          checked={props.active}
          onChange={e => props.setActive(!props.active)}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Label variant="button" color="primary">{props.text}</Label>
      </SwitchContainer>
      {props.active &&
        <Box>
          {props.children}
        </Box>
      }
    </Paper>
  );
};
