import * as React from "react";
import { FullscreenIframe } from "./BackgroundPlayerElements";
import { useModifiersContext } from "../../contexts/ModifiersContext";
import { BackgroundType, Modifiers } from "../../Constants";

export const BackgroundPlayer = () => {
  const { data, setData } = useModifiersContext();
  const bgData = data[Modifiers.BACKGROUND];

  const isVisible = bgData["type"] === BackgroundType.VIDEO;

  return (
    <>
      <FullscreenIframe visible={isVisible} opacity={bgData["bgOpacity"]} src={bgData["bgSrc"]} allowFullScreen={true}/>
    </>
  );
}
