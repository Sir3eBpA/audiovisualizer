import { VisualizerExtension } from "../VisualizerExtension";
import { Scalar, Scene, Vector3} from "@babylonjs/core";
import { AudioInput } from "../../AudioInput";
import { KeyValueStructure } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { Time } from "../../../../engine/Time";
import { IFrameRenderExtension } from "../../types/IFrameRenderExtension";
import { IVisualizer } from "../../visualizers/IVisualizer";

export class BoxesScaleExtension extends VisualizerExtension implements IFrameRenderExtension {
  protected _inputData: KeyValueStructure;
  protected _centerPivot: Vector3;
  protected _bottomPivot: Vector3;

  public initialize(scene: Scene): void {
  }

  constructor(inputData: any) {
    super(inputData);
    this._inputData = inputData[Modifiers.BOXES_SCALE];

    this._centerPivot = Vector3.Zero();
    this._bottomPivot = new Vector3(0, -0.5, 0);
  }

  onFrameRender(scene: Scene, visuals: IVisualizer, audioData: AudioInput): void {
    const minHeight = this._inputData["minHeight"] || 0.1;
    const maxHeight = this._inputData["maxHeight"] || 15.0;
    const alignHeight = this._inputData["alignHeight"] || false;
    const scaleSpeed = this._inputData["scaleSpeed"] || 100;

    for (let i = 0; i < visuals.TotalVisuals; ++i) {
      const ndx = i * audioData.frequencyBinCount / visuals.TotalVisuals | 0;
      const audioValue = audioData.audioData[ndx] / 255.0;

      visuals.setMeshData(i, mesh => {
        const targetHeight = Math.max((audioValue * maxHeight), minHeight);
        const height = Scalar.MoveTowards(mesh.scaling.y, targetHeight, scaleSpeed * Time.Dt);
        mesh.scaling.y = height;

        mesh.setPivotPoint(alignHeight ? this._bottomPivot : this._centerPivot);
      });
    }
  }
}
