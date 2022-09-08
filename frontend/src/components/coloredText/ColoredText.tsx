import { Theme, Typography, useTheme } from "@mui/material";
import { ReactElement } from "react";

export enum ColorType { Info, Success, Error, Warning }

export type ColoredTextSettings = {
  type: ColorType,
  text: string,
  fontSize?: number,
  fontWeight?: string,
  fontFamily?: string,
  marginTop?: number|string,
  padding?: number|string,
}

const GetColorFromColorType = (theme: Theme, type: ColorType) : string => {
  if(!theme) return 'white';

  const pallete = theme.palette;

  switch (type) {
    case ColorType.Info: return pallete.info.main;
    case ColorType.Success: return pallete.success.main;
    case ColorType.Error: return pallete.error.main;
    case ColorType.Warning: return pallete.warning.main;
    default: return 'white';
  }
};

export const ColoredText = (props: ColoredTextSettings) => {
  const theme = useTheme();
  const color = GetColorFromColorType(theme, props.type);

  return (
    <Typography color={color}
                marginTop={props.marginTop}
                padding={props.padding}
                fontSize={props.fontSize}
                fontWeight={props.fontWeight}
                fontFamily={props.fontFamily}>
      {props.text}
    </Typography>
  );
};
