import { AbstractMesh, Mesh, Scene, Vector3 } from "@babylonjs/core";

export interface IVisualizer {
  get TotalVisuals(): number;

  spawn(scene: Scene, data?: any): void;

  despawn(scene: Scene): void;

  getMesh(visualIndex: number): AbstractMesh | null;

  getAllMeshes(): AbstractMesh[] | null;

  getCenterPosition(): Vector3;

  setMeshData(visualIndex: number, setCallback: (mesh: AbstractMesh) => void): void;
}
