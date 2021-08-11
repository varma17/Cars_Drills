// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

import { problem4 } from '../problem4.js';
import { problem5 } from '../problem5.js';
import { inventory } from '../../inventory.js';

var carYears = [];
var olderCarYears = [];
carYears = problem4(inventory);
olderCarYears = problem5(carYears);

console.log(olderCarYears);

