import { Quaternion, Vector3 } from "@babylonjs/core";

const Deg2Rad = Math.PI * 2 / 360;
const Rad2Deg = 1 / Deg2Rad;

export const FromToRotation = (a: Vector3, b: Vector3) : Quaternion => {
  const axis = Vector3.Cross(a, b);
  const angle = Vector3.GetAngleBetweenVectors(a, b, Vector3.UpReadOnly) * Rad2Deg;
  return AngleAxis(angle, axis.normalize()).invertInPlace();
}

export const AngleAxis = (angle: number, axis: Vector3) : Quaternion => {
  axis.normalize();
  const rad = angle * Deg2Rad * 0.5;
  axis.scaleInPlace(Math.sin(rad));
  return new Quaternion(axis.x, axis.y, axis.z, Math.cos(rad));
}
