import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { GroupAccordeon } from "../../genericProperties/groupAccordeon/GroupAccordeon";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { NumberInput } from "../../genericProperties/numberInput/NumberInput";
import { ColorPicker } from "../../genericProperties/colorPicker/ColorPicker";
import { DropdownProperty } from "../../genericProperties/dropdownProperty/DropdownProperty";
import { MenuItem } from "@mui/material";
import React from "react";
import { SolidBackground } from "./SolidBackground";
import { GradientBackground } from "./GradientBackground";

export const GetBackgroundRenderer = (type?: string) => {
  return !type || type === "solid" ? <SolidBackground/> : <GradientBackground/>;
}

export const BackgroundChanger = () => {
  const { data, setData } = useModifiersContext();
  const bgData = data[Modifiers.BACKGROUND];

  const onGroupSetActive = (active: boolean) => {
    bgData["active"] = active;
    setData({ ...data, data });
  };

  const onVignetteRadiusSet = (val: number) => {
    bgData["vignetteRadius"] = val;
    setData({ ...data, data });
  }

  const onVignetteColorSet = (color: string) => {
    bgData["vignetteColor"] = color;
    setData({ ...data, data });
  }

  const onTypeChanged = (type: any) => {
    bgData["type"] = type;
    setData({...data, data});
  }

  return (
    <GroupAccordeon text="Background"
                    active={bgData["active"]}
                    setActive={onGroupSetActive}>

      <FieldAccordeon title="Vignette">
        <NumberInput label="Radius"
                     onSetValue={onVignetteRadiusSet}
                     minValue={0}
                     defaultValue={bgData["vignetteRadius"]}/>
        <ColorPicker label="Color"
                     setColor={onVignetteColorSet}
                     color={bgData["vignetteColor"]}/>
      </FieldAccordeon>

      <DropdownProperty value={bgData["type"] || "solid"}
                        setValue={onTypeChanged}
                        folded title="Type">
        <MenuItem value="solid">Solid color</MenuItem>
        <MenuItem value="gradient">Gradient</MenuItem>
      </DropdownProperty>

      <>
        {GetBackgroundRenderer(bgData["type"])}
      </>

    </GroupAccordeon>
  );
}
