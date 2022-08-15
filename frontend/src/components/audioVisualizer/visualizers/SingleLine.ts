import { IVisualizer } from "./IVisualizer";
import { AbstractMesh, MeshBuilder, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";
import { VisualizerType } from "../../../Constants";

export class SingleLine implements IVisualizer {
  private _meshes: AbstractMesh[];

  constructor() {
    this._meshes = [];
  }

  getCenterPosition(): Vector3 {
    if(this.TotalVisuals === 0)
      return Vector3.Zero();

    const centerMesh = this.getMesh(this.TotalVisuals / 2 - 1);
    if (centerMesh)
      return centerMesh.position;
    return Vector3.Zero();
  }

  get Name(): string { return VisualizerType.SINGLE_LINE; }

  get TotalVisuals(): number {
    return this.getAllMeshes()?.length || 0;
  }

  despawn(scene: Scene): void {
    for(let i = 0; i < this._meshes.length; ++i) {
      scene.removeMesh(this._meshes[i]);
    }
    this._meshes.length = 0;
  }

  spawn(scene: Scene, data?: any): void {
    const amount = data["amount"] || 64;
    const size = data["size"] || 1;
    const spacing = data["spacing"] || 1.2;

    for (let i = 0; i < amount; ++i) {
      // Our built-in 'box' shape.
      const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
      // Move the box upward 1/2 its height
      box.position.y = 0;
      box.position.x = i * (size * spacing);
      box.scaling.x = size;
      box.scaling.z = size;
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

  get Up(): Vector3 { return Vector3.UpReadOnly; }

}
