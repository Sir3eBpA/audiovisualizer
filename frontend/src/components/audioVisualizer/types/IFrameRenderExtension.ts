import { Scene } from "@babylonjs/core";
import { AudioInput } from "../AudioInput";
import { IVisualizer } from "../visualizers/IVisualizer";

export interface IFrameRenderExtension {
  onFrameRender(scene: Scene, visuals: IVisualizer, audioData: AudioInput): void
}
