// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:

import { problem1 } from '../problem1.js';
import { inventory } from '../../inventory.js';

var carData = {};

carData = problem1(inventory);

console.log("Car 33 is a "+ carData.car_year+" "+carData.car_make+" "+carData.car_model); 