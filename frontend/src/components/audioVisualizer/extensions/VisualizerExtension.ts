import { Mesh, Scene } from "@babylonjs/core";
import { AudioInput } from "../AudioInput";
import { KeyValueStructure } from "../../../contexts/ModifiersContext";

export abstract class VisualizerExtension {
  protected _inputData: KeyValueStructure = {};

  constructor(inputData: any) {}

  public abstract initialize(scene: Scene): void;
}
