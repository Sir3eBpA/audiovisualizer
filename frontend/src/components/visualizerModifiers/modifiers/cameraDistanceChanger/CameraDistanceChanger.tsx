import React from "react";
import { MenuItem } from "@mui/material";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { MinMaxNumber } from "../../genericProperties/minMaxNumber/MinMaxNumber";
import { DropdownProperty } from "../../genericProperties/dropdownProperty/DropdownProperty";

export const CameraDistanceChanger = () => {
  const { data, setData } = useModifiersContext();
  const camDistanceData = data[Modifiers.CAM_DISTANCE_KEY];

  const onGroupSetActive = (active: boolean) => {
    camDistanceData["active"] = active;
    setData({...data, data});
  }

  const onFovMinMaxChanged = (min: number, max: number) => {
    camDistanceData["min"] = min;
    camDistanceData["max"] = max;
    setData({...data, data });
  }

  const onFovModeChanged = (mode: any) => {
    camDistanceData["mode"] = mode;
    setData({...data, data});
  }

  return (
    <GroupSwitch text="Camera Distance" active={camDistanceData["active"] || false} setActive={onGroupSetActive}>
      <MinMaxNumber title="Zoom Min/Max"
                    min={camDistanceData["min"]}
                    max={camDistanceData["max"]}
                    onChanged={onFovMinMaxChanged}/>

      <DropdownProperty value={camDistanceData["mode"] || "Single"}
                        setValue={onFovModeChanged}
                        folded title="Mode">
        <MenuItem value="single">Single</MenuItem>
        <MenuItem value="group">Group</MenuItem>
      </DropdownProperty>

    </GroupSwitch>
  );
};
