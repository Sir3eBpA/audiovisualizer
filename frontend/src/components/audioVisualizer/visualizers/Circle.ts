import { IVisualizer } from "./IVisualizer";
import { AbstractMesh, MeshBuilder, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";
import { VisualizerType } from "../../../Constants";

export class Circle implements IVisualizer {
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

  get Name(): string { return VisualizerType.CIRCLE; }

  despawn(scene: Scene): void {
    for(let i = 0; i < this._meshes.length; ++i) {
      scene.removeMesh(this._meshes[i]);
    }
    this._meshes.length = 0;
  }

  spawn(scene: Scene, data?: any): void {
    const amount = data["amount"] || 0;
    const radius = data["radius"] || 1;

    for (let i = 0; i < amount; ++i) {
      // Our built-in 'box' shape.
      const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
      // Move the box upward 1/2 its height
      const angle = i * Math.PI * 2 / amount;
      box.position.y = 0;
      box.position.x = Math.cos(angle) * radius;
      box.position.z = Math.sin(angle) * radius;

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

  get CanBeAligned(): boolean { return true; }

  get Up(): Vector3 { return Vector3.UpReadOnly; }
}
