import React from "react";
import { GroupSwitch } from "../../genericProperties/groupSwitch/GroupSwitch";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { MinMaxNumber } from "../../genericProperties/minMaxNumber/MinMaxNumber";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { Switch, Typography } from "@mui/material";
import { InlineContainer, SwitchLabel } from "../../../../shared/SharedStyles";

export const BoxesScale = () => {
  const { data, setData } = useModifiersContext();
  const scaleData = data[Modifiers.BOXES_SCALE_KEY];

  const onGroupSetActive = (active: boolean) => {
    scaleData["active"] = active;
    setData({ ...data, data });
  };

  const onHeightChanged = (min: number, max: number) => {
    scaleData["minHeight"] = min;
    scaleData["maxHeight"] = max;
    setData({ ...data, data });
  };

  const onSetAlignHeight = (val: boolean) => {
    scaleData["alignHeight"] = val;
    setData({ ...data, data });
  };

  return (
    <GroupSwitch text="Boxes scale" active={scaleData["active"] || false} setActive={onGroupSetActive}>
      <MinMaxNumber title="Height"
                    min={scaleData["minHeight"]}
                    max={scaleData["maxHeight"]}
                    onChanged={onHeightChanged} />

      <FieldAccordeon title="Align height">
        <InlineContainer>
          <SwitchLabel>Align boxes height: </SwitchLabel>
          <Switch checked={scaleData["alignHeight"] || false}
                  onChange={e => onSetAlignHeight(e.target.checked)} />
        </InlineContainer>
      </FieldAccordeon>

    </GroupSwitch>
  );
};
