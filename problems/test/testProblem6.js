// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

import { problem6 } from '../problem6.js';
import { inventory } from '../../inventory.js';

var BMWAndAudi = [];

BMWAndAudi = problem6(inventory);

console.log(JSON.stringify(BMWAndAudi));

