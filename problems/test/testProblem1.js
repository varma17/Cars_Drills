import { problem1 } from '../problem1.js';
import { inventory } from '../../inventory.js';

var carData = {};

carData = problem1(inventory);

console.log("Car 33 is a "+ carData.car_year+" "+carData.car_make+" "+carData.car_model); 