import { VisualizerExtension } from "../VisualizerExtension";
import { AbstractMesh, Color3, Scene, StandardMaterial } from "@babylonjs/core";
import { AudioInput } from "../../AudioInput";
import { Modifiers } from "../../../../Constants";
import { IFrameRenderExtension } from "../../types/IFrameRenderExtension";

export class ColorLerpExtension extends VisualizerExtension implements IFrameRenderExtension {
  protected _startColor: Color3 = Color3.White();
  protected _endColor: Color3 = Color3.White();

  constructor(inputData: any) {
    super(inputData);
    this._inputData = inputData[Modifiers.COLOR_LERP];
  }

  initialize() {
    if (this._inputData["min"]) {
      this._startColor = Color3.FromHexString(this._inputData["min"]);
    }
    if (this._inputData["max"]) {
      this._endColor = Color3.FromHexString(this._inputData["max"]);
    }
  }

  onFrameRender(scene: Scene, visuals: AbstractMesh[], audioData: AudioInput): void {
    if(!this._inputData["active"]) return;

    for(let i = 0; i < visuals.length; ++i) {
      const mat = visuals[i].material;
      if(!mat) continue;

      const ndx = i * audioData.frequencyBinCount / visuals.length | 0;
      const audioValue = audioData.audioData[ndx] / 255.0;

      const standardMaterial = mat as StandardMaterial;
      Color3.LerpToRef(this._startColor, this._endColor, audioValue, standardMaterial.diffuseColor);
    }
  }
}
