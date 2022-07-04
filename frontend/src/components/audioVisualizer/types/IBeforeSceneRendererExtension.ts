import { Mesh, Scene } from "@babylonjs/core";
import { AudioInput } from "../AudioInput";

export interface IBeforeSceneRendererExtension {
  onBeforeSceneRender(scene: Scene, visuals: Mesh[], audioData: AudioInput): void
}
