import styled from "styled-components";

export interface FullscreenIFrameSettings {
  opacity?: number|string,
  visible: boolean
}

export const FullscreenIframe = styled.iframe<FullscreenIFrameSettings>`
  width: 100%;
  height: calc((100vw*9) /16);;
  margin: auto;
  opacity: ${props => `${props.opacity}%` || "15%"};
  pointer-events: none;
  left: 0;
  top: 0;
  border: 0;
  z-index: -2;
  position: fixed;
  display: ${props => props.visible ? "block" : "none"};
`
