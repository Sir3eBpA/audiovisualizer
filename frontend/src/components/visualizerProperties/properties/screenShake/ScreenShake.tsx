import React, { useState } from "react";
import { Box, Paper, Switch } from "@mui/material";
import { MinMaxNumber } from "../../genericProperties/minMaxNumber/MinMaxNumber";

export const RenderGroupSwitch = (text: string, active: boolean, setActive: (active: boolean) => void) => {
  return (
    <Paper elevation={0} sx={{ minWidth: "350px" }}>
      <Switch
        checked={active}
        onChange={e => setActive(!active)}
        inputProps={{ "aria-label": "controlled" }}
      />
      {text}
    </Paper>
  );
};

export const ScreenShake = () => {
  const [active, setActive] = useState(false);

  const onMinMaxChanged = (min: number, max: number) => {
    console.log("%f ; %f", min, max);
  };

  if (!active) {
    return (RenderGroupSwitch("Screen Shake", active, setActive));
  }

  return (
    <Box>
      {RenderGroupSwitch("Screen Shake", active, setActive)}
      <Paper>
        <MinMaxNumber title="Min/Max" onChanged={onMinMaxChanged} />
      </Paper>
    </Box>
  );
};
