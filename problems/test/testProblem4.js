// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

import { problem4 } from '../problem4.js';
import { inventory } from '../../inventory.js';
var carYears = [];

carYears = problem4(inventory);

console.log(carYears);

