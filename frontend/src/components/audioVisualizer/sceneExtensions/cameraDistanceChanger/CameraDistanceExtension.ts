import { SceneExtension } from "../SceneExtension";
import { ArcRotateCamera, Mesh, Scene } from "@babylonjs/core";
import { AudioInput } from "../../AudioInput";
import { Modifiers } from "../../../../Constants";
import { calculateModeMultiplier, getInfluenceModeFromString } from "../common/InfluenceMode";

export class CameraDistanceExtension extends SceneExtension {
  private static radius: number = 0;

  constructor(inputData: any) {
    super(inputData);
    this._inputData = inputData[Modifiers.CAM_DISTANCE_KEY];
  }

  initialize(scene: Scene): void {
    if(!scene._activeCamera) return;

    if(CameraDistanceExtension.radius < Number.EPSILON) {
      CameraDistanceExtension.radius = (scene._activeCamera as ArcRotateCamera).radius;
    }
  }

  onBeforeSceneRender(scene: Scene, visuals: Mesh[], audioData: AudioInput): void {
    if (!this._inputData["active"]) return;
    if (!scene._activeCamera) return;

    const mode = getInfluenceModeFromString(this._inputData["mode"] || "single");
    const modeMultiplier = calculateModeMultiplier(mode, visuals.length, audioData);

    const x = (this._inputData["min"] || 0) * modeMultiplier;
    const y = (this._inputData["max"] || 0) * modeMultiplier;

    const cam = scene._activeCamera as ArcRotateCamera;
    cam.radius = CameraDistanceExtension.radius + Math.random() * y - x;
  }
}