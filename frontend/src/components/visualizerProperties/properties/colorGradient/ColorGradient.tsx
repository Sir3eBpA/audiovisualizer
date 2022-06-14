import React, { useState } from "react";
import {
  Box, MenuItem,
  Select,
  TextField
} from "@mui/material";
import { MinMaxNumber } from "../../genericProperties/minMaxNumber/MinMaxNumber";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { DropdownProperty } from "../../genericProperties/dropdownProperty/DropdownProperty";

export const ColorGradient = () => {
  const [active, setActive] = useState(false);
  const [age, setAge] = React.useState("");

  const onMinMaxChanged = (min: number, max: number) => {
    console.log("%f ; %f", min, max);
  };

  return (
    <GroupSwitch text="Colors" active={active} setActive={setActive}>
      <MinMaxNumber title="Min/Max" onChanged={onMinMaxChanged} />
      <FieldAccordeon title="Step">
        <TextField margin="dense"
                   label="Screenshake threshold"
                   size="small"
                   variant="outlined"
                   type="number"
                   onChange={e => {}} />
      </FieldAccordeon>
      <DropdownProperty value={age} setValue={setAge} folded title="Mode">
        <MenuItem value="single">Single</MenuItem>
        <MenuItem value="group">Group</MenuItem>
      </DropdownProperty>
    </GroupSwitch>
  );
};
