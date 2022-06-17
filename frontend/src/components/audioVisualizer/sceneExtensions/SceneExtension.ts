import { KeyValueStructure } from "../../../contexts/ModifiersContext";
import { Scene } from "@babylonjs/core";
import { AudioInput } from "../AudioInput";

export abstract class SceneExtension {
  protected _inputData: KeyValueStructure = {};

  constructor(inputData: any) {}

  public abstract initialize(): void;
  public abstract onBeforeSceneRender(scene: Scene, audioData: AudioInput): void;
}
