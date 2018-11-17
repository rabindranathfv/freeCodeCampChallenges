// sol 1

function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    //Looping through each key in arr object
    for (let prop in arr) {
        //Rounding off the orbital period value
        let orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
        //deleting the avgAlt property
        delete arr[prop].avgAlt;
        //adding orbitalPeriod property
        arr[prop].orbitalPeriod = orbitalPer;
    }

    return arr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);