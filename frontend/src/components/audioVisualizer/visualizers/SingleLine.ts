import { IVisualizer } from "./IVisualizer";
import { AbstractMesh, MeshBuilder, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";

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

  get TotalVisuals(): number {
    return this.getAllMeshes()?.length || 0;
  }

  despawn(scene: Scene): void {
    for(let i = 0; i < this._meshes.length; ++i) {

    }
  }

  spawn(scene: Scene, data?: any): void {
    const amount = data["amount"] || 0;

    for (let i = 0; i < amount; ++i) {
      // Our built-in 'box' shape.
      const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
      // Move the box upward 1/2 its height
      box.position.y = 0;
      box.position.x = i * 1.2;
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
}
