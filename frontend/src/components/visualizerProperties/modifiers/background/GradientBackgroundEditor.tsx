import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { MultiColorPicker } from "../../genericProperties/multiColorPicker/MultiColorPicker";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { AnimationType, Modifiers } from "../../../../Constants";
import { InlineContainer, SwitchLabel } from "../../../../shared/SharedStyles";
import { MenuItem, Switch } from "@mui/material";
import React from "react";
import { NumberInput } from "../../genericProperties/numberInput/NumberInput";
import { DropdownProperty } from "../../genericProperties/dropdownProperty/DropdownProperty";

enum BackgroundSizeType { Width, Height }

export const GradientBackgroundEditor = () => {
  const { data, setData } = useModifiersContext();
  const bgData = data[Modifiers.BACKGROUND];

  const onBackgroundGradientSet = (colors: string[]) => {
    bgData["bgColors"] = colors;
    setData({ ...data });
  };

  const onSetIsAnimated = (animated: boolean) => {
    bgData["animated"] = animated;
    setData({ ...data });
  };

  const onGradientDirectionSet = (degree: number) => {
    bgData["direction"] = degree;
    setData({ ...data });
  };

  const onAnimationSpeedChanged = (speed: number) => {
    bgData["animationSpeed"] = speed;
    setData({ ...data });
  };

  const onAnimationTypeChanged = (newType: any) => {
    bgData["animationType"] = newType;
    setData({ ...data });
  };

  const onBackgroundSizeChanged = (value: number, dir: BackgroundSizeType) => {
    if (dir === BackgroundSizeType.Height)
      bgData["bgSizeY"] = value;
    else
      bgData["bgSizeX"] = value;
    setData({ ...data });
  };

  return (
    <>
      <FieldAccordeon title="Color">
        <MultiColorPicker colors={bgData["bgColors"]} setColors={onBackgroundGradientSet} />
      </FieldAccordeon>
      <FieldAccordeon title="Direction">
        <NumberInput onSetValue={onGradientDirectionSet}
                     label="Direction (0-360)"
                     defaultValue={bgData["direction"]}
                     minValue={0}
                     maxValue={360} />
      </FieldAccordeon>
      <FieldAccordeon title="Is Animated">
        <InlineContainer>
          <SwitchLabel>Is Animated: </SwitchLabel>
          <Switch checked={bgData["animated"] || false}
                  onChange={e => onSetIsAnimated(e.target.checked)} />
        </InlineContainer>
        {
          bgData["animated"] &&
          <>
            <DropdownProperty value={bgData["animationType"] || AnimationType.HUE_ROTATE}
                              setValue={onAnimationTypeChanged}
                              folded title="Type">
              <MenuItem value="hue-rotate">Hue Rotate</MenuItem>
              <MenuItem value="infinite-scroll">Infinite scroll</MenuItem>
            </DropdownProperty>
            <NumberInput onSetValue={onAnimationSpeedChanged}
                         label="Speed"
                         defaultValue={bgData["animationSpeed"]}
                         minValue={0}
                         maxValue={1000} />
            <NumberInput onSetValue={val => onBackgroundSizeChanged(val, BackgroundSizeType.Width)}
                         label="Background Size X"
                         defaultValue={bgData["bgSizeX"]}
                         minValue={100}
                         maxValue={10000} />
            <NumberInput onSetValue={val => onBackgroundSizeChanged(val, BackgroundSizeType.Height)}
                         label="Background Size Y"
                         defaultValue={bgData["bgSizeY"]}
                         minValue={100}
                         maxValue={10000} />
          </>
        }
      </FieldAccordeon>

    </>
  );
};
