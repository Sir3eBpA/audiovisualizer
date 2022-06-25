import { SceneExtension } from "../SceneExtension";
import { Matrix, Mesh, Scalar, Scene, Vector4 } from "@babylonjs/core";
import { AudioInput } from "../../AudioInput";
import { Modifiers } from "../../../../Constants";
import { calculateModeMultiplier, getInfluenceModeFromString, InfluenceMode } from "../common/InfluenceMode";

export class ScreenShakeExtension extends SceneExtension {
  private static _ProjectionMatrixCache: Matrix|undefined;

  private _r: Vector4 = new Vector4(0,0,0,0);
  private _t: number = 0;
  private _projectionMatrix: Matrix = new Matrix();

  constructor(inputData: any) {
    super(inputData);
    this._inputData = inputData[Modifiers.SCREENSHAKE_KEY];
  }

  initialize(scene: Scene): void {
    if(!scene._activeCamera) return;

    this._projectionMatrix = scene._activeCamera.getProjectionMatrix() || new Matrix();

    // restore projection matrix on component modification to avoid camera translations
    if(ScreenShakeExtension._ProjectionMatrixCache) {
      const row: Vector4 = ScreenShakeExtension._ProjectionMatrixCache.getRow(3) || Vector4.Zero();
      this._projectionMatrix.setRow(3, row);
    }

    // cache projection matrix if we have any available
    if(!ScreenShakeExtension._ProjectionMatrixCache && this._projectionMatrix) {
      ScreenShakeExtension._ProjectionMatrixCache = this._projectionMatrix.clone();
    }

    this._r = this._projectionMatrix.getRow(3) || Vector4.Zero();
  }

  onBeforeSceneRender(scene: Scene, visuals: Mesh[], audioData: AudioInput): void {
    if (!this._inputData["active"]) return;

    const mode = getInfluenceModeFromString(this._inputData["mode"] || "single");
    const modeMultiplier = calculateModeMultiplier(mode, visuals.length, audioData);

    const shakeSpeed = this._inputData["speed"] || 100;
    const dt = scene.getEngine().getDeltaTime() / 1000;

    const x = (this._inputData["min"] || 0) * modeMultiplier;
    const y = (this._inputData["max"] || 0) * modeMultiplier;

    this._r.x += Scalar.MoveTowards(0, Math.cos(this._t) * x, shakeSpeed * dt);
    this._r.y += Scalar.MoveTowards(0, Math.sin(this._t) * y, shakeSpeed * dt);
    this._projectionMatrix.setRowFromFloats(3, this._r.x, this._r.y, this._r.z, this._r.w);
    this._t += 81337.18;
  }
}
