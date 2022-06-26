export class Time {
  private static _dt: number = 0;

  public static get Dt(): number {
    return this._dt;
  }

  public static set Dt(dt: number) {
    this._dt = dt;
  }
}
