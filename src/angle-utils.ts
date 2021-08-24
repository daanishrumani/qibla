
/** Static utils for angle adjustments and transformations */
export class AngleUtils {
  /**
  * Converts angle in degrees to radians
  * @param {number} deg Angle in degrees
  * @return {number} Angle in radians
  */
  public static toRadians(deg: number): number {
    return deg / 180.0 * Math.PI;
  }

  /**
  * Converts angle in radians to degrees
  * @param {number} rad Angle in radians
  * @return {number} Angle in degrees
  */
  public static toDegrees(rad: number): number {
    return rad * 180.0 / Math.PI;
  }

  /**
  * Converts calculated angle of approach to the corresponding compass angle.
  * E.g. North = 0deg, East = 90deg, South = 180deg, West = 270deg.
  * @param {number} result Angle of approach in degrees
  * @return {number} Compass angle in degrees
  */
  public static adjust(result: number): number {
    return Math.round(result <= 0 ? result * -1.0 : 360 - result);
  }
}
