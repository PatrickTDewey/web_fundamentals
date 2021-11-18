/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
     // create array to store next days
    let dayArray = [];
    console.log(array)
    // iterate through temperatures array
    for(let i = 0; i < temperatures.length; i++){
        // grab current temperature
        let currentTemp = temperatures[i];
        // initialize days to 0
        let days = 0;
        // nextDayIndex is equal to i + 1
        let nextDayIndex = i + 1
        // while the nextDayIndex less than the length of temperatures check the next temp
        while(nextDayIndex < temperatures.length){
            // if we are at the end, and we haven't found a higher temp, and the last temp is not greater than or
            if (nextDayIndex === temperatures.length - 1 && currentTemp >= temperatures[nextDayIndex]) {
                days = 0;
                break;
            }
            // increment days
            days++
            //if we found hotter temp, stop
            if(currentTemp < temperatures[nextDayIndex]){
                break;
            }
            nextDayIndex++;
        }
        dayArray.push(days)
    }
    return dayArray;
};

console.log(dailyTemperatures([73,74,75,71,69,76,72,73]))
// [1,1,4,2,1,1,0,0]