// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.


function problem5(carYears){
    let older_car_years = [];
    if (carYears.length == 0){
        return [];
    }
    else{
        for(let i=0; i<carYears.length; i++){
            if(carYears[i] < 2000){
                older_car_years.push(carYears[i]);
            }
            
        }
        return older_car_years;
    }  
}

export { problem5 };