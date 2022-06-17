import { Mesh } from "@babylonjs/core";
import { AudioInput } from "../AudioInput";
import { KeyValueStructure } from "../../../contexts/ModifiersContext";

export abstract class VisualizerExtension {
  protected _inputData: KeyValueStructure = {};

  constructor(inputData: any) {}

  public abstract initialize(): void;
  public abstract process(visuals: Mesh[], audioData: AudioInput): void;
}
