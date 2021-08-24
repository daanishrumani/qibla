/* eslint-disable max-len */
import {describe, it} from 'mocha';
import {expect} from 'chai';
import {Qibla} from '../src/qibla';

describe('Qibla Calculations', () => {
  it('Special Case 1: {+ve LAT, +ve LONG, To the right and at same LAT} - 274', () => {
    // Kaaba: https://www.google.com/maps/place/Kaaba/@21.4224576,39.8260568,63m
    const lat = 21.4224576;
    const long = 59.8260568;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(274);
  });

  it('Special Case 2: {+ve LAT, +ve LONG, To the left and at same LAT} - 86', () => {
    // Kaaba: https://www.google.com/maps/place/Kaaba/@21.4224576,39.8260568,63m
    const lat = 21.4224576;
    const long = 19.8260568;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(86);
  });

  it('Special Case 3: {+ve LAT, +ve LONG, same LONG and below} - 0', () => {
    // Kaaba: https://www.google.com/maps/place/Kaaba/@21.4224576,39.8260568,63m
    const lat = 11.4224576;
    const long = 39.8260568;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(0);
  });

  it('Special Case 4: {+ve LAT, +ve LONG, same LONG and above} - 180', () => {
    // Kaaba: https://www.google.com/maps/place/Kaaba/@21.4224576,39.8260568,63m
    const lat = 31.4224576;
    const long = 39.8260568;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(180);
  });

  it('Special Case 5: {+ve LAT, -ve LONG, To the left and at same LAT} - 78', () => {
    // Kaaba: https://www.google.com/maps/place/Kaaba/@21.4224576,39.8260568,63m
    const lat = 21.4224576;
    const long = -19.8260568;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(78);
  });

  it('Special Case 6: {-ve LAT, +ve LONG, same LONG and below} - 0', () => {
    // Kaaba: https://www.google.com/maps/place/Kaaba/@21.4224576,39.8260568,63m
    const lat = -21.4224576;
    const long = 39.8260568;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(0);
  });

  it('Mumbai: {+ve LAT, +ve LONG, To the right and below} - 280', () => {
    // Mumbai: https://www.google.com/maps/place/Mumbai,+Maharashtra,+India/@19.0826881,72.6009796,87886m
    const lat = 19.0826881;
    const long = 72.6009796;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(280);
  });

  it('Dubai: {+ve LAT, +ve LONG, To the right and above} - 258', () => {
    // Dubai: https://www.google.com/maps/place/Dubai/@25.2071712,55.204569,26503m
    const lat = 25.2071712;
    const long = 55.204569;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(258);
  });

  it('Khatoum: {+ve LAT, +ve LONG, To the left and below} - 49', () => {
    // Khartoum: https://www.google.com/maps/place/Khartoum,+Sudan/@15.5018319,32.4325069,44807m
    const lat = 15.5018319;
    const long = 32.4325069;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(49);
  });

  it('Hanover: {+ve LAT, +ve LONG, To the left and above} - 131', () => {
    // Hanover: https://www.google.com/maps/place/Hanover,+Germany/@52.3797932,9.6213866,28384m
    const lat = 52.3797932;
    const long = 9.6213866;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(131);
  });

  it('New York: {+ve LAT, -ve LONG, To the left and above} - 58', () => {
    // New York: https://www.google.com/maps/place/New+York,+NY,+USA/@40.6971478,-74.2605505,94009m
    const lat = 40.6971478;
    const long = -74.2605505;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(58);
  });

  it('Dakar: {+ve LAT, -ve LONG, To the left and below} - 74', () => {
    // Dakar: https://www.google.com/maps/place/Dakar,+Senegal/@14.6331539,-17.7488272,92512m
    const lat = 14.6331539;
    const long = -17.7488272;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(74);
  });

  it('Buenos Aires: {-ve LAT, -ve LONG, To the left and below} - 76', () => {
    // Buenos Aires: https://www.google.com/maps/place/Buenos+Aires,+Argentina/@-34.6158036,-58.5035101,25511m
    const lat = -34.6158036;
    const long = -58.5035101;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(76);
  });

  it('Cape Town: {-ve LAT, +ve LONG, To the left and below} - 24', () => {
    // Cape Town: https://www.google.com/maps/place/Cape+Town,+South+Africa/@-33.9142626,18.0942437,205800m
    const lat = -33.9142626;
    const long = 18.0942437;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(24);
  });

  it('Perth: {-ve LAT, +ve LONG, To the right and below} - 295', () => {
    // Perth: https://www.google.com/maps/place/Perth+WA,+Australia/@-32.0397544,115.680662,105108m
    const lat = -32.0397544;
    const long = 115.680662;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(295);
  });

  it('Puerto Santa Cruz: {-ve LAT, -ve LONG, To the far right and far below} - 89', () => {
    // Puerto Santa Cruz: https://www.google.com/maps/place/Puerto+Santa+Cruz,+Santa+Cruz+Province,+Argentina/@-50.0230627,-68.5477225,4979m
    const lat = -50.0230627;
    const long = -68.5477225;
    expect(Qibla.degreesFromTrueNorth(lat, long))
        .to.equal(89);
  });
});
