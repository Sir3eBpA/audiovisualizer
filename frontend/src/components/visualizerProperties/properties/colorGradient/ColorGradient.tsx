import React, { useState } from "react";
import {
  TextField
} from "@mui/material";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { ColorPicker } from "../../genericProperties/colorPicker/ColorPicker";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";

export const ColorGradient = () => {
  const { data, setData } = useModifiersContext();

  const colorData = data[Modifiers.COLOR_GRADIENT_KEY];

  const colorChanged = (field: string, value: any) => {
    setData(data);
  }

  const onGroupSetActive = (active: boolean) => {
    colorData["active"] = active;
    setData({...data, data});
  }

  const onColorStepSet = (val: string) => {
    colorData["step"] = parseFloat(val);
    setData({...data, data});
  }

  return (
    <GroupSwitch text="Colors" active={colorData["active"] || false} setActive={onGroupSetActive}>
      <FieldAccordeon title="Color gradient">
          <ColorPicker label="Min" setColor={() => {}} />
          <ColorPicker label="Max" setColor={() => {}} />
      </FieldAccordeon>
      <FieldAccordeon title="Color step">
        <TextField margin="dense"
                   label="Color threshold"
                   size="small"
                   variant="outlined"
                   type="number"
                   defaultValue={colorData["step"] || 0}
                   onChange={e => onColorStepSet(e.target.value)} />
      </FieldAccordeon>
    </GroupSwitch>
  );
};
