import React from "react";
import {
  MenuItem,
  TextField
} from "@mui/material";
import { MinMaxNumber } from "../../genericProperties/minMaxNumber/MinMaxNumber";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { DropdownProperty } from "../../genericProperties/dropdownProperty/DropdownProperty";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";

export const ScreenShake = () => {
  const { data, setData } = useModifiersContext();
  const shakeData = data[Modifiers.SCREENSHAKE_KEY];

  const onMinMaxChanged = (min: number, max: number) => {
    shakeData["min"] = min;
    shakeData["max"] = max;
    setData({...data, data});
  };

  const onGroupSetActive = (active: boolean) => {
    shakeData["active"] = active;
    setData({...data, data});
  }

  const onModeChanged = (value: any) => {
    shakeData["mode"] = value;
    setData({...data, data});
  }

  const onShakeSpeedChanged = (value: number) => {
    shakeData["speed"] = value;
    setData({...data, data});
  }

  return (
    <GroupSwitch text="Screenshake"
                 active={shakeData["active"] || false}
                 setActive={onGroupSetActive}>
      <MinMaxNumber min={shakeData["min"]}
                    max={shakeData["max"]}
                    title="Min/Max"
                    onChanged={onMinMaxChanged} />
      <DropdownProperty value={shakeData["mode"] || "Single"}
                        setValue={onModeChanged}
                        folded title="Mode">
        <MenuItem value="single">Single</MenuItem>
        <MenuItem value="group">Group</MenuItem>
      </DropdownProperty>
      <FieldAccordeon title="Shake speed">
        <TextField margin="dense"
                   label="Speed"
                   size="small"
                   variant="outlined"
                   type="number"
                   defaultValue={shakeData["speed"] || 100}
                   onChange={e => onShakeSpeedChanged(parseFloat(e.target.value))} />
      </FieldAccordeon>
    </GroupSwitch>
  );
};
