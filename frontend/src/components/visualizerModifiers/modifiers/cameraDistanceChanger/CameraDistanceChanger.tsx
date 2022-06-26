import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { MinMaxNumber } from "../../genericProperties/minMaxNumber/MinMaxNumber";
import { DropdownProperty } from "../../genericProperties/dropdownProperty/DropdownProperty";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";

export const CameraDistanceChanger = () => {
  const { data, setData } = useModifiersContext();
  const camDistanceData = data[Modifiers.CAM_DISTANCE_KEY];

  const onGroupSetActive = (active: boolean) => {
    camDistanceData["active"] = active;
    setData({...data, data});
  }

  const onDistanceMinMaxChanged = (min: number, max: number) => {
    camDistanceData["min"] = min;
    camDistanceData["max"] = max;
    setData({...data, data });
  }

  const onCamDistanceModeChanged = (mode: any) => {
    camDistanceData["mode"] = mode;
    setData({...data, data});
  }

  const onSpeedChanged = (speed: number) => {
    camDistanceData["speed"] = speed;
    setData({...data, data});
  }

  return (
    <GroupSwitch text="Camera Distance" active={camDistanceData["active"] || false} setActive={onGroupSetActive}>
      <MinMaxNumber title="Zoom Min/Max"
                    min={camDistanceData["min"]}
                    max={camDistanceData["max"]}
                    onChanged={onDistanceMinMaxChanged}/>

      <FieldAccordeon title="Speed">
        <TextField margin="dense"
                   label="Speed"
                   size="small"
                   variant="outlined"
                   type="number"
                   defaultValue={camDistanceData["speed"] || 100}
                   onChange={e => onSpeedChanged(parseFloat(e.target.value))} />
      </FieldAccordeon>

      <DropdownProperty value={camDistanceData["mode"] || "Single"}
                        setValue={onCamDistanceModeChanged}
                        folded title="Mode">
        <MenuItem value="single">Single</MenuItem>
        <MenuItem value="group">Group</MenuItem>
      </DropdownProperty>

    </GroupSwitch>
  );
};
