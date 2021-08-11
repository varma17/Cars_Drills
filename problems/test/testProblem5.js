import { problem4 } from '../problem4.js';
import { problem5 } from '../problem5.js';
import { inventory } from '../../inventory.js';
var carYears = [];
var olderCarYears = [];
carYears = problem4(inventory);
olderCarYears = problem5(carYears);

console.log(olderCarYears);

