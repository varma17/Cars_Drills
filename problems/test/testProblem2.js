import { problem2 } from '../problem2.js';
import { inventory } from '../../inventory.js';
var carData = {};

carData = problem2(inventory);

console.log("Last car is a "+carData.car_make+" "+carData.car_model);

