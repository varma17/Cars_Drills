// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function compare(car1, car2){
    let car1_model = car1.car_model.toLowerCase();
    let car2_model = car2.car_model.toLowerCase();
    if (car1_model > car2_model){
        return 1;
    }
    else if (car1_model < car2_model){
        return -1;
    }
    else{
        return 0;
    }
}

function problem3(inventory){
    return inventory.sort(compare);
}

export { problem3 };