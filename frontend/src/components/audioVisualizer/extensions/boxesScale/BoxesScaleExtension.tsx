import { VisualizerExtension } from "../VisualizerExtension";
import { Mesh, Scalar, Scene, Vector3 } from "@babylonjs/core";
import { AudioInput } from "../../AudioInput";
import { KeyValueStructure } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { Time } from "../../../../engine/Time";

export class BoxesScaleExtension extends VisualizerExtension {
  protected _inputData: KeyValueStructure;

  constructor(inputData: any) {
    super(inputData);
    this._inputData = inputData[Modifiers.BOXES_SCALE];
  }

  initialize(): void {
  }

  process(scene: Scene, visuals: Mesh[], audioData: AudioInput): void {
    const minHeight = this._inputData["minHeight"] || 0.1;
    const maxHeight = this._inputData["maxHeight"] || 15.0;
    const alignHeight = this._inputData["alignHeight"] || false;
    const scaleSpeed = this._inputData["scaleSpeed"] || 100;

    for(let i = 0; i < visuals.length; ++i) {
      const ndx = i * audioData.frequencyBinCount / visuals.length | 0;
      const audioValue = audioData.audioData[ndx] / 255.0;

      const targetHeight = Math.max((audioValue * maxHeight), minHeight);
      const height = Scalar.MoveTowards(visuals[i].scaling.y, targetHeight, scaleSpeed * Time.Dt);
      visuals[i].scaling.set(1, height, 1);

      if(alignHeight) {
        visuals[i].position.y = (height / 2.0);
      } else {
        visuals[i].position.y = 0;
      }
    }
  }
}
