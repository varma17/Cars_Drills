// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function problem4(inventory){
    let car_years = [];
    for(let i=0; i<inventory.length; i++){
        car_years.push(inventory[i].car_year);
    }
    return car_years;
}

export { problem4 };