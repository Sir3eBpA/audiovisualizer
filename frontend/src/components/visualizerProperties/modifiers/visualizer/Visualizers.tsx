import React from "react";
import { MenuItem } from "@mui/material";
import { DropdownProperty } from "../../genericProperties/dropdownProperty/DropdownProperty";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers, VisualizerType } from "../../../../Constants";
import { SingleLine } from "./SingleLine";
import { GroupAccordeon } from "../../genericProperties/groupAccordeon/GroupAccordeon";
import { MultiLine } from "./MultiLine";
import { Circle } from "./Circle";

export const GetVisualizer = (mode: string) => {
  switch (mode) {
    case VisualizerType.SINGLE_LINE: return <SingleLine/>
    case VisualizerType.MULTI_LINE: return <MultiLine/>
    case VisualizerType.CIRCLE: return <Circle/>
    default: return <></>
  }
};

export const Visualizers = () => {
  const { data, setData } = useModifiersContext();
  const visualizerData = data[Modifiers.VISUALIZER];

  const onGroupSetActive = (active: boolean) => {
    visualizerData["active"] = active;
    setData({ ...data, data });
  };

  const onModeChanged = (value: any) => {
    visualizerData["mode"] = value;
    setData({ ...data, data });
  };

  return (
    <GroupAccordeon text="Visualizer"
                    active={visualizerData["active"] || false}
                    setActive={onGroupSetActive}>
      <DropdownProperty value={visualizerData["mode"] || VisualizerType.SINGLE_LINE}
                        setValue={onModeChanged}
                        folded title="Mode">
        <MenuItem value={VisualizerType.SINGLE_LINE}>Single Line</MenuItem>
        <MenuItem value={VisualizerType.MULTI_LINE}>Multi Line</MenuItem>
        <MenuItem value={VisualizerType.CIRCLE}>Circle</MenuItem>
      </DropdownProperty>
      <>
        {GetVisualizer(visualizerData["mode"])}
      </>
    </GroupAccordeon>
  );
};
