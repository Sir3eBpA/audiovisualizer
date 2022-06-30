import { useEffect, useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { Button } from "@mui/material";

export type MultiColorSettings = {
  label?: string,
  colors?: string[]
  setColors: (colors: string[]) => void,
  limit?: number,
}

export const RenderColors = (colors: string[], onSetColor: (c: string, i: number) => void, onDeleteColor: (i: number) => void) => {
  return (
    <>
      {
        colors.map((x, index) => [
            <ColorPicker key={index} color={x} label={`Color ${index}`} setColor={color => onSetColor(color, index)} />,
            <Button key={`btn_${x}`} onClick={() => onDeleteColor(index)}>Del</Button>
          ]
        )
      }
    </>
  );
}

export const MultiColorPicker = (props: MultiColorSettings) => {
  const [colors, setColors] = useState(props.colors || ["#000000"]);

  const onSetColor = (color: string, index: number) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const onColorAdded = () => {
    setColors([...colors, "#000000"]);
  };

  const onColorDeleted = (index: number) => {
    let newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  // notify listener that colors have changed
  useEffect(() => props.setColors(colors), [colors]);

  return (
    <>
      { RenderColors(colors, onSetColor, onColorDeleted) }
      <Button color="secondary"
              variant="outlined"
              onClick={onColorAdded}>
        Add
      </Button>
    </>
  );
};
