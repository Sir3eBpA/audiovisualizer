import { ArcRotateCamera, Mesh, Scalar, Scene } from "@babylonjs/core";
import { AudioInput } from "../../AudioInput";
import { Modifiers } from "../../../../Constants";
import { calculateModeMultiplier, getInfluenceModeFromString } from "../common/InfluenceMode";
import { Time } from "../../../../engine/Time";
import { VisualizerExtension } from "../VisualizerExtension";
import { IBeforeSceneRendererExtension } from "../../types/IBeforeSceneRendererExtension";
import { IVisualizer } from "../../visualizers/IVisualizer";

export class CameraDistanceExtension extends VisualizerExtension implements IBeforeSceneRendererExtension {
  private static radius: number = 0;

  constructor(inputData: any) {
    super(inputData);
    this._inputData = inputData[Modifiers.CAM_DISTANCE];
  }

  initialize(scene: Scene): void {
    if(!scene._activeCamera) return;

    if(CameraDistanceExtension.radius < Number.EPSILON) {
      CameraDistanceExtension.radius = (scene._activeCamera as ArcRotateCamera).radius;
    }
  }

  onBeforeSceneRender(scene: Scene, visuals: IVisualizer, audioData: AudioInput): void {
    if (!this._inputData["active"]) return;
    if (!scene._activeCamera) return;

    const mode = getInfluenceModeFromString(this._inputData["mode"] || "single");
    const modeMultiplier = calculateModeMultiplier(mode, visuals.TotalVisuals, audioData);

    const x = (this._inputData["min"] || 0) * modeMultiplier;
    const y = (this._inputData["max"] || 0) * modeMultiplier;

    const speed = this._inputData["speed"] || 100;
    const cam = scene._activeCamera as ArcRotateCamera;

    const finalRadius = Scalar.MoveTowards(cam.radius, CameraDistanceExtension.radius + Math.random() * y - x, speed * Time.Dt);
    cam.radius = finalRadius;
  }
}
