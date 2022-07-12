import { Box, Button, Paper, Switch, Typography } from "@mui/material";
import React, { ReactElement } from "react";

export type GroupAccordeonSettings = {
  text: string;
  active: boolean;
  setActive: (active: boolean) => void;
  children?: ReactElement | ReactElement[];
}

export const GroupAccordeon = (props: GroupAccordeonSettings) => {
  return (
    <Paper elevation={2} sx={{ minWidth: "350px" }}>
      <Button variant="text"
              color="primary"
              fullWidth
              onClick={e => props.setActive(!props.active)}>
        {props.text}
      </Button>
      {props.active &&
        <Box>
          {props.children}
        </Box>
      }
    </Paper>
  );
};
