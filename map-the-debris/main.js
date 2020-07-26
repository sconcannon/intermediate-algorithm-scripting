function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let newArr = [];
    for (let obj in arr) {
        // a is the axis for the orbital body = earth radius + average altitude
        var a = earthRadius + arr[obj]["avgAlt"]; // a is the axis
        // orbit time in seconds from formula found here - https://en.wikipedia.org/wiki/Orbital_period
        // T = 2*[i]* the square root of ((axis cubed)/GM)
        let orbPer = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
        // then round the time to the nearest second
        let orbPerSec = Math.round(orbPer);
        // save the result in the format required by the challenge
        newArr.push({ name: arr[obj]["name"], orbitalPeriod: orbPerSec });
    }
    return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);