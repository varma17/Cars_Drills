function problem5(carYears){
    let older_car_years = [];
    for(let i=0; i<carYears.length; i++){
        if(carYears[i] < 2000){
            older_car_years.push(carYears[i]);
        }
        
    }
    return older_car_years;
}

export { problem5 };