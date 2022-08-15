import { Quaternion, Vector3 } from "@babylonjs/core";
import { Deg2Rad, Rad2Deg } from "./MathUtils";

export const FromToRotation = (a: Vector3, b: Vector3, normal: Vector3 = Vector3.UpReadOnly) : Quaternion => {
  const axis = Vector3.Cross(a, b);
  const angle = Vector3.GetAngleBetweenVectors(a, b, normal) * Rad2Deg;
  return AngleAxis(angle, axis.normalize()).invertInPlace();
}

export const AngleAxis = (angle: number, axis: Vector3) : Quaternion => {
  axis.normalize();
  const rad = angle * Deg2Rad * 0.5;
  axis.scaleInPlace(Math.sin(rad));
  return new Quaternion(axis.x, axis.y, axis.z, Math.cos(rad));
}
