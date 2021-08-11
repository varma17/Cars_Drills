// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

import { problem3 } from '../problem3.js';
import { inventory } from '../../inventory.js';
var sortedInventory = [];

sortedInventory = problem3(inventory);

console.log(sortedInventory);
