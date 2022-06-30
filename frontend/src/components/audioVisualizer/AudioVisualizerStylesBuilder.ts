import { CreateAnimation, CreateGradientBackground, CreateSolidBackground, CreateVignette } from "../../utils/CssUtils";
import { CSSProperties } from "react";
import { AnimationType } from "../../Constants";

export const CreateBackground = (type: string, data: any) => {
  switch (type) {
    default:
    case "solid":
      return CreateSolidBackground(data["bgColor"]);
    case "gradient":
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

  cssProps["backgroundImage"] = CreateBackground(data["type"], data);
  cssProps["backgroundSize"] = BuildBackgroundSize(data);

  cssProps["animation"] = TryCreateAnimation(data);

  return cssProps;
}
