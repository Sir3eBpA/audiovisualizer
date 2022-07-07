import { Scene } from "@babylonjs/core";
import { AudioInput } from "../AudioInput";
import { IVisualizer } from "../visualizers/IVisualizer";

export interface IBeforeSceneRendererExtension {
  onBeforeSceneRender(scene: Scene, visuals: IVisualizer, audioData: AudioInput): void
}
