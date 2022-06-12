import React from "react";
import { FiShare } from "react-icons/fi";
import { FabShare, ShareButtonContainer } from "./ShareButtonElments";

export type ShareButtonSettings = {
  onClick: () => void
}

export const ShareButton = (props: ShareButtonSettings) => {
  return (
    <ShareButtonContainer>
      <FabShare onClick={props.onClick} size="large" color="default" aria-label="share">
        <FiShare size={35} />
      </FabShare>
    </ShareButtonContainer>
  );
};
