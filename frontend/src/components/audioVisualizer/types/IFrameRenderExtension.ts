import { Mesh, Scene } from "@babylonjs/core";
import { AudioInput } from "../AudioInput";

export interface IFrameRenderExtension {
  onFrameRender(scene: Scene, visuals: Mesh[], audioData: AudioInput): void
}
