// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:

import { problem2 } from '../problem2.js';
import { inventory } from '../../inventory.js';
var carData = {};

carData = problem2(inventory);

console.log("Last car is a "+carData.car_make+" "+carData.car_model);

