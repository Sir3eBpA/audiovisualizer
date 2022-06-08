import styled from "styled-components";
import SceneComponent from "babylonjs-hook";

export const VisualsContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  // set z-index to be negative because DOM renders at 0 and higher
  z-index: -1;
  background: linear-gradient(90deg, #030101, #d71a1a, #000000);
  background-size: cover;
  background-blend-mode: screen;
  animation: hue-rotate 1.5s linear infinite;
  box-shadow: inset 0 0 150px black;

  @keyframes hue-rotate {
    from {
      -webkit-filter: hue-rotate(0);
      -moz-filter: hue-rotate(0);
      filter: hue-rotate(0);
    }
    to {
      -webkit-filter: hue-rotate(360deg);
      -moz-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }`;

export const BabylonScene = styled(SceneComponent)`
  width: 100%;
  height: 100%;
`;
