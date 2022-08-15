import { IVisualizer } from "./IVisualizer";
import { AbstractMesh, MeshBuilder, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";
import { VisualizerType } from "../../../Constants";

export class MultiLine implements IVisualizer {
  private _mainMeshes: AbstractMesh[];
  private _additionalMeshes: AbstractMesh[];
  private _width: number;

  constructor() {
    this._mainMeshes = [];
    this._additionalMeshes = [];
    this._width = 1;
  }

  getCenterPosition(): Vector3 {
    if(this.TotalVisuals === 0)
      return Vector3.Zero();

    const centerMesh = this.getMesh(this.TotalVisuals / 2 - 1);
    if (centerMesh)
      return centerMesh.position;
    return Vector3.Zero();
  }

  get Name(): string { return VisualizerType.MULTI_LINE; }

  get TotalVisuals(): number {
    return this.getAllMeshes()?.length || 0;
  }

  despawn(scene: Scene): void {
    for(let i = 0; i < this._mainMeshes.length; ++i) {
      scene.removeMesh(this._mainMeshes[i]);
    }
    this._mainMeshes.length = 0;

    for(let i = 0; i < this._additionalMeshes.length; ++i) {
      scene.removeMesh(this._additionalMeshes[i]);
    }
    this._additionalMeshes.length = 0;
  }

  spawn(scene: Scene, data?: any): void {
    const amount = data["amount"] || 64;
    const width = data["width"] || 1;
    const size = data["size"] || 1;
    const spacing = data["spacing"] || 1.2;

    this._width = width;

    for (let i = 0; i < amount; ++i) {
      for (let j = 0; j < width; ++j) {
        // Our built-in 'box' shape.
        const box = MeshBuilder.CreateBox(`box_${i}_${j}`, { size: 1 }, scene);
        // Move the box upward 1/2 its height
        box.position.y = 0;
        box.position.x = i * (size * spacing);
        box.position.z = j * spacing;
        box.scaling.x = size;
        box.scaling.z = size;
        box.material = new StandardMaterial(`box_${i}_${j}`, scene);

        // if this is the first mesh then it's the main one
        if(j === 0)
          this._mainMeshes.push(box);
        else // otherwise, these are the copy meshes that follow the main one
          this._additionalMeshes.push(box);
      }
    }
  }

  getAllMeshes(): AbstractMesh[] | null {
    return this._mainMeshes;
  }

  getMesh(visualIndex: number): AbstractMesh | null {
    if(visualIndex >= 0 && visualIndex < this._mainMeshes.length)
      return this._mainMeshes[visualIndex];
    return null;
  }

  setMeshData(visualIndex: number, setDataCallback: (mesh: AbstractMesh) => void): void {
    const mesh = this.getMesh(visualIndex);
    if(mesh) {
      setDataCallback(mesh);
    }

    const additionalMeshesWidth = this._width - 1;

    // apply the same mesh data to additional meshes so they "copy" it
    for(let i = 0; i < additionalMeshesWidth; ++i) {
      const mesh = this._additionalMeshes[(visualIndex * additionalMeshesWidth) + i];
      if(mesh)
        setDataCallback(mesh);
    }
  }

  get Up(): Vector3 { return Vector3.UpReadOnly; }

}
