function problem4(inventory){
    let car_years = [];
    for(let i=0; i<inventory.length; i++){
        car_years.push(inventory[i].car_year);
    }
    return car_years;
}

export { problem4 };