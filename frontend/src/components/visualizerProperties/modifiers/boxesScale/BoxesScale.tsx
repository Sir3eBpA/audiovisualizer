import React from "react";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { MinMaxNumber } from "../../genericProperties/minMaxNumber/MinMaxNumber";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { Switch, TextField, Typography } from "@mui/material";
import { InlineContainer, SwitchLabel } from "../../../../shared/SharedStyles";
import { GroupAccordeon } from "../../genericProperties/groupAccordeon/GroupAccordeon";

export const BoxesScale = () => {
  const { data, setData } = useModifiersContext();
  const scaleData = data[Modifiers.BOXES_SCALE];

  const onGroupSetActive = (active: boolean) => {
    scaleData["active"] = active;
    setData({ ...data });
  };

  const onHeightChanged = (min: number, max: number) => {
    scaleData["minHeight"] = min;
    scaleData["maxHeight"] = max;
    setData({ ...data });
  };

  const onSetAlignHeight = (val: boolean) => {
    scaleData["alignHeight"] = val;
    setData({ ...data });
  };

  const onScaleSpeedChanged = (val: number) => {
    scaleData["scaleSpeed"] = val;
    setData({...data});
  }

  return (
    <GroupAccordeon text="Boxes scale"
                    active={scaleData["active"] || false}
                    setActive={onGroupSetActive}>

      <MinMaxNumber title="Height"
                    min={scaleData["minHeight"]}
                    max={scaleData["maxHeight"] || 10}
                    onChanged={onHeightChanged} />

      <FieldAccordeon title="Align height">
        <InlineContainer>
          <SwitchLabel>Align boxes height: </SwitchLabel>
          <Switch checked={scaleData["alignHeight"] || false}
                  onChange={e => onSetAlignHeight(e.target.checked)} />
        </InlineContainer>
      </FieldAccordeon>

      <FieldAccordeon title="Scale Speed">
        <TextField margin="dense"
                   label="Scale change speed"
                   size="small"
                   variant="outlined"
                   type="number"
                   defaultValue={scaleData["scaleSpeed"] || 100}
                   onChange={e => onScaleSpeedChanged(parseFloat(e.target.value))} />
      </FieldAccordeon>

    </GroupAccordeon>
  );
};
