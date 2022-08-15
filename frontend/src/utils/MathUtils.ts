import { Vector3 } from "@babylonjs/core";

export const Deg2Rad = Math.PI * 2 / 360;
export const Rad2Deg = 1 / Deg2Rad;

export const FibonacciSphere = (i: number, totalPoints: number, out: Vector3) => {
  const k = i + .5;

  const phi = Math.acos(1 - 2 * k / totalPoints);
  const theta = Math.PI * (1 + Math.sqrt(5)) * k;

  const x = Math.cos(theta) * Math.sin(phi);
  const y = Math.sin(theta) * Math.sin(phi);
  const z = Math.cos(phi);

  out.set(x, y, z);
}
