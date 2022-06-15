import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { ClickAwayListener } from "@mui/material";
import { Label, Picker, Popover, Swatch } from "./ColorPickerElements";

export type ColorPickerSettings = {
  color?: string;
  label?: string;
  setColor: (color: string) => void;
}

export const ColorPicker = (props: ColorPickerSettings) => {
  const popover = useRef(null);
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  const color = props.color || "#aabbcc";

  return (
    <Picker>
      <Swatch style={{ backgroundColor: color }}
              onClick={() => toggle(true)} />

      {isOpen && (
        <ClickAwayListener onClickAway={close}>
          <Popover ref={popover}>
            <HexColorPicker color={color} onChange={e => props.setColor(e)} />
          </Popover>
        </ClickAwayListener>
      )}
      <Label>{props.label || ""}</Label>
    </Picker>
  );
};
