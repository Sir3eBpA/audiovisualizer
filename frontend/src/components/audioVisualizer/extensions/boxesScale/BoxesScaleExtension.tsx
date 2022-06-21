import { VisualizerExtension } from "../VisualizerExtension";
import { Mesh, Vector3 } from "@babylonjs/core";
import { AudioInput } from "../../AudioInput";
import { KeyValueStructure } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";

export class BoxesScaleExtension extends VisualizerExtension {
  protected _inputData: KeyValueStructure;

  constructor(inputData: any) {
    super(inputData);
    this._inputData = inputData[Modifiers.BOXES_SCALE_KEY];
  }

  initialize(): void {
  }

  process(visuals: Mesh[], audioData: AudioInput): void {
    const minHeight = this._inputData["minHeight"] || 0.1;
    const maxHeight = this._inputData["maxHeight"] || 15.0;
    const alignHeight = this._inputData["alignHeight"] || false;

    for(let i = 0; i < visuals.length; ++i) {
      const ndx = i * audioData.frequencyBinCount / visuals.length | 0;
      const audioValue = audioData.audioData[ndx] / 255.0;

      const height = Math.max((audioValue * maxHeight), minHeight);
      visuals[i].scaling.set(1, height, 1);

      if(alignHeight) {
        visuals[i].position.y = (height / 2.0);
      } else {
        visuals[i].position.y = 0;
      }
    }
  }
}
