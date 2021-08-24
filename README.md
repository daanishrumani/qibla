# The 'qibla' Library
A helper class (Qibla) to provide you the qibla direction relative to True North based on provided coordinates

# Installation
Install using the NPM Package Manager.
```bash
$ npm install qibla
```
OR
```bash
$ npm install qibla --save
```

# TypeScript Usage
Import the *Qibla* class. Call the static function `degreesFromTrueNorth()` to calcuate the degrees from *True North* for the provided coordinates `{lat, long}`.
```typescript
import {Qibla} from 'qibla';

// Returns 280 for Mumbai
let qiblaFromTrueNorth = Qibla.degreesFromTrueNorth(19.0826881, 72.6009796);
```

# JavaScript Usage
Import the *Qibla* class. Call the static function `degreesFromTrueNorth()` to calcuate the degrees from *True North* for the provided coordinates `{lat, long}`.
```javascript
let Qibla = require('qibla').Qibla;

// Returns 280 for Mumbai
let qiblaFromTrueNorth = Qibla.degreesFromTrueNorth(19.0826881, 72.6009796);
```

# What angle is the Qibla from True North?
The qibla angle returned represents the angle shown in a typical smartphone compass. *i.e.* *North = **0 deg***, *East = **90 deg***, *South = **180 deg***, and *West = **270 deg***

It should be noted that the actual angle as shown in a physical (non digital, non smartphone) magnetic compass would be different as it shows with reference to the [*Magnetic North*](https://en.wikipedia.org/wiki/North_magnetic_pole). Smartphone compasses do not have such a problem as they compensate automatically and show the angles with reference to the [*True North*](https://en.wikipedia.org/wiki/True_north).

# Contributing
To build and run the tests you would need to have Node.js/NPM installed. Run the below command to check if the changes are ready to be published.
```bash
$ npm run prepare-for-publish
```
If the above command runs without errors then your change are ready to go.

Please ensure you make your changes in a new branch and create a merge request to let me review it. Your changes would be merged and published at the descretion of the maintainers of this repo.
