import React, { useState } from "react";
import {
  TextField
} from "@mui/material";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { ColorPicker } from "../../genericProperties/colorPicker/ColorPicker";

export const ColorGradient = () => {
  const [active, setActive] = useState(false);

  const [minColor, setMinColor] = useState("");
  const [maxColor, setMaxColor] = useState("");

  return (
    <GroupSwitch text="Colors" active={active} setActive={setActive}>
      <FieldAccordeon title="Color gradient">
          <ColorPicker label="Min" setColor={setMinColor} />
          <ColorPicker label="Max" setColor={setMaxColor} />
      </FieldAccordeon>
      <FieldAccordeon title="Color step">
        <TextField margin="dense"
                   label="Color threshold"
                   size="small"
                   variant="outlined"
                   type="number"
                   onChange={e => {
                   }} />
      </FieldAccordeon>
    </GroupSwitch>
  );
};
