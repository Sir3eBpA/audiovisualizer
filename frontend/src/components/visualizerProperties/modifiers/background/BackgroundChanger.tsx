import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { BackgroundType, Modifiers } from "../../../../Constants";
import { GroupAccordeon } from "../../genericProperties/groupAccordeon/GroupAccordeon";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { NumberInput } from "../../genericProperties/numberInput/NumberInput";
import { ColorPicker } from "../../genericProperties/colorPicker/ColorPicker";
import { DropdownProperty } from "../../genericProperties/dropdownProperty/DropdownProperty";
import { MenuItem } from "@mui/material";
import React from "react";
import { SolidBackgroundEditor } from "./SolidBackground";
import { GradientBackgroundEditor } from "./GradientBackgroundEditor";
import { VideoBackgroundEditor } from "./VideoBackgroundEditor";

export const DrawBackgroundEditor = (type?: string) => {
  if (!type) return <SolidBackgroundEditor />;

  switch (type) {
    case BackgroundType.SOLID: return <SolidBackgroundEditor />;
    case BackgroundType.GRADIENT: return <GradientBackgroundEditor />;
    case BackgroundType.VIDEO: return <VideoBackgroundEditor />
  }
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

      <DropdownProperty value={bgData["type"]}
                        setValue={onTypeChanged}
                        folded title="Type">
        <MenuItem value={BackgroundType.SOLID}>Solid color</MenuItem>
        <MenuItem value={BackgroundType.GRADIENT}>Gradient</MenuItem>
        <MenuItem value={BackgroundType.VIDEO}>Youtube Embedded Video</MenuItem>
      </DropdownProperty>

      <>
        {DrawBackgroundEditor(bgData["type"])}
      </>

    </GroupAccordeon>
  );
}
