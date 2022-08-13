import { IVisualizer } from "./IVisualizer";
import { AbstractMesh, MeshBuilder, Quaternion, Scene, Space, StandardMaterial, Vector3 } from "@babylonjs/core";
import { FibonacciSphere } from "../../../utils/MathUtils";
import { VisualizerType } from "../../../Constants";
import { FromToRotation} from "../../../utils/QuaternionUtils";

export class Sphere implements IVisualizer {
  private _meshes: AbstractMesh[];

  constructor() {
    this._meshes = [];
  }

  getCenterPosition(): Vector3 {
    return Vector3.Zero();
  }

  get TotalVisuals(): number {
    return this.getAllMeshes()?.length || 0;
  }

  get Up(): Vector3 { return Vector3.RightHandedForwardReadOnly; }

  get Name(): string { return VisualizerType.SPHERE; }

  despawn(scene: Scene): void {
    for(let i = 0; i < this._meshes.length; ++i) {
      scene.removeMesh(this._meshes[i]);
    }
    this._meshes.length = 0;
  }

  spawn(scene: Scene, data?: any): void {
    const amount = data["amount"] || 0;
    const radius = data["radius"] || 5;

    const tempVec3 = new Vector3();
    for (let i = 0; i < amount; ++i) {
      // Our built-in 'box' shape.
      const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);

      FibonacciSphere(i, amount, tempVec3);

      box.rotationQuaternion = FromToRotation(Vector3.UpReadOnly, tempVec3);

      tempVec3.scaleAndAddToRef(radius, tempVec3);
      box.position.copyFrom(tempVec3);


      // look at from box position to zero, then invert
      //const lookAt = Matrix.LookAtLH(box.position, Vector3.ZeroReadOnly, Vector3.LeftReadOnly).invert();
      //box.rotationQuaternion = Quaternion.FromRotationMatrix(lookAt);

      box.material = new StandardMaterial("box" + i, scene);

      this._meshes.push(box);
    }
  }

  getAllMeshes(): AbstractMesh[] | null {
    return this._meshes;
  }

  getMesh(visualIndex: number): AbstractMesh | null {
    if(visualIndex >= 0 && visualIndex < this._meshes.length)
      return this._meshes[visualIndex];
    return null;
  }

  setMeshData(visualIndex: number, setDataCallback: (mesh: AbstractMesh) => void): void {
    const mesh = this.getMesh(visualIndex);
    if(mesh) {
      setDataCallback(mesh);
    }
  }

  get CanBeAligned(): boolean {return false;}
}
