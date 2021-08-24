
import {AngleUtils} from './angle-utils';

/** A helper class to provide you the qibla direction
 * relative to True North based on provided coordinates */
export class Qibla {
  /**
  * Calculates the qibla direction relative to True North
  * @param {number} latitude The latitude
  * @param {number} longitude The longitude
  * @return {number} The Qibla angle from True North
  */
  public static degreesFromTrueNorth(
      latitude: number,
      longitude: number): number {
    // Kaaba: https://www.google.com/maps/place/Kaaba/@21.4224576,39.8260568,63m
    const qiblaLocationLat = 21.4224576;
    const qiblaLocationLong = 39.8260568;

    const phiS = AngleUtils.toRadians(latitude);
    const phiF = AngleUtils.toRadians(qiblaLocationLat);
    const deltaL = AngleUtils.toRadians(longitude - qiblaLocationLong);

    return AngleUtils.adjust(
        AngleUtils.toDegrees(
            Math.atan2(
                Math.sin(deltaL),
                Math.cos(phiS) * Math.tan(phiF) -
                    Math.sin(phiS) * Math.cos(deltaL))));
  }
}
