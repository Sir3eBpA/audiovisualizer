import styled from "styled-components";
import SceneComponent from "babylonjs-hook";

export interface Background {
  background?: string,
  animation?: string,
  boxShadow?: string,
}

export const VisualsContainer = styled.div<Background>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  // set z-index to be negative because DOM renders at 0 and higher
  z-index: -1;
  //background: #282c34;
  background-size: 400% 400%;
  background-blend-mode: screen;
  animation: none; //hue-rotate 1.5s linear infinite;
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
  }

  @keyframes infinite-scroll {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BabylonScene = styled(SceneComponent)`
  width: 100%;
  height: 100%;
`;
