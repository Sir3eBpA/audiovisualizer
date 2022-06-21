import { KeyValueStructure } from "../../../contexts/ModifiersContext";
import { Mesh, Scene } from "@babylonjs/core";
import { AudioInput } from "../AudioInput";

export abstract class SceneExtension {
  protected _inputData: KeyValueStructure = {};

  constructor(inputData: any) {}

  public abstract initialize(scene: Scene): void;
  public abstract onBeforeSceneRender(scene: Scene, visuals: Mesh[], audioData: AudioInput): void;
}
