import { isHexColor } from "./ColorUtil";

export const CreateVignette = (radius: number, color: string) : string => {
  if(radius < Number.EPSILON)
    return "none";
  return `inset 0 0 ${radius}px ${color}`;
}

export const CreateSolidBackground = (color: string) : string => {
  if(!isHexColor(color))
    return "white";
  return color;
}

export const CreateGradientBackground = (colors: string[], angle: number = 90) : string => {
  if(!colors || colors.length === 0)
    return "white";

  return `linear-gradient(${angle}deg, ${colors.filter(x => null != x)})`;
}
