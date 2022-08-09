import { CreateAnimation, CreateGradientBackground, CreateSolidBackground, CreateVignette } from "../../utils/CssUtils";
import { CSSProperties } from "react";
import { AnimationType, BackgroundType } from "../../Constants";

export const CreateBackground = (type: string, data: any) => {
  switch (type) {
    default:
    case BackgroundType.SOLID:
      return CreateSolidBackground(data["bgColor"]);
    case BackgroundType.GRADIENT:
      return CreateGradientBackground(data["bgColors"], data["direction"]);
  }
};

export const TryCreateAnimation = (data: any) => {
  if (!data["animated"])
    return "none";

  const animType = data["animationType"] || AnimationType.HUE_ROTATE;
  const speed = data["animationSpeed"] || 0;

  return CreateAnimation(animType, speed);
};

export const BuildBackgroundSize = (data: any) => {
  if (!data["animated"])
    return "100% 100%";

  return `${data["bgSizeX"]}% ${data["bgSizeY"]}%`;
}

export const BuildCss = (data: any) : CSSProperties => {
  let cssProps: CSSProperties = {};

  cssProps["boxShadow"] = CreateVignette(data["vignetteRadius"], data["vignetteColor"]);

  const bgStyle: string = CreateBackground(data["type"], data);
  if(data["type"] === BackgroundType.SOLID)
    cssProps["backgroundColor"] = bgStyle;
  else if(data["type"] === BackgroundType.GRADIENT)
    cssProps["backgroundImage"] = bgStyle;

  cssProps["backgroundSize"] = BuildBackgroundSize(data);

  cssProps["animation"] = TryCreateAnimation(data);

  return cssProps;
}
