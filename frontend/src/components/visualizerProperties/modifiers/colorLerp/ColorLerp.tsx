import React from "react";
import {
  TextField
} from "@mui/material";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { ColorPicker } from "../../genericProperties/colorPicker/ColorPicker";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";

export const ColorLerp = () => {
  const { data, setData } = useModifiersContext();
  const colorData = data[Modifiers.COLOR_LERP];

  const onColorChanged = (field: string, value: any) => {
    colorData[field] = value;
    setData({...data});
  }

  const onGroupSetActive = (active: boolean) => {
    colorData["active"] = active;
    setData({...data});
  }

  const onColorStepSet = (val: string) => {
    colorData["step"] = parseFloat(val);
    setData({...data});
  }

  return (
    <GroupSwitch text="Colors" active={colorData["active"] || false} setActive={onGroupSetActive}>
      <FieldAccordeon title="Colors range">
          <ColorPicker label="Min"
                       color={colorData["min"]}
                       setColor={color => onColorChanged("min", color)} />

          <ColorPicker label="Max"
                       color={colorData["max"]}
                       setColor={color => onColorChanged("max", color)} />
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
