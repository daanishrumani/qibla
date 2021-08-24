# The 'qibla' Library
A helper class (Qibla) to provide you the qibla direction relative to *True North* based on provided coordinates

# Installation
Install using the *Node Package Manager (NPM)*.
```bash
$ npm install qibla
```
OR
```bash
$ npm install qibla --save
```

# TypeScript Usage
Import the *Qibla* class. Call the static function `degreesFromTrueNorth()` with the coordinates of the current location `(lat, long)`. It returns the direction of *Kaaba* from the current location *i.e.* the *Qibla* as degrees from *True North*.
```typescript
import {Qibla} from 'qibla';

// Returns 280 for Mumbai
let qiblaFromTrueNorth = Qibla.degreesFromTrueNorth(19.0826881, 72.6009796);
```

# JavaScript Usage
Import the *Qibla* class. Call the static function `degreesFromTrueNorth()` with the coordinates of the current location `(lat, long)`. It returns the direction of *Kaaba* from the current location *i.e.* the *Qibla* as degrees from *True North*.
```javascript
let Qibla = require('qibla').Qibla;

// Returns 280 for Mumbai
let qiblaFromTrueNorth = Qibla.degreesFromTrueNorth(19.0826881, 72.6009796);
```

# What angle is the Qibla from True North?
The qibla angle returned represents the angle shown in a typical smartphone compass app. *i.e.* *North = **0 deg***, *East = **90 deg***, *South = **180 deg***, and *West = **270 deg***

It should be noted that the actual angle shown in a physical (non digital, non smartphone) magnetic compass would be different because it references the [*Magnetic North*](https://en.wikipedia.org/wiki/North_magnetic_pole). Smartphone compasses do not have such a problem as they automatically compensate and show the angles with respect to the [*True North*](https://en.wikipedia.org/wiki/True_north).

# Contributing
To build and run the tests you would need to have Node.js/NPM installed. Run the below command to check if the changes are ready to be published.
```bash
$ npm run prepare-for-publish
```
If the above command runs without errors then your changes are ready to go.

Make your changes in a new branch and create a merge request to be reviewed. Your changes would be merged and published at the descretion of the maintainers of this repo.
