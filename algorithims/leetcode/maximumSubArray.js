let nums = [-2,1,-3,4,-1,2,1,-5,4];
let test = [1,2,3,4]
// The subarrays are (1), (2), (3), (4), (1,2), (2,3), (3,4), (1,2,3), (2,3,4) and (1,2,3,4)
const maximumSumSubArray = (array) => {
    // set max and current to be equal to the first index of array
    let max = curr = array[0];
    // iterate starting at first index
    array.slice(1).forEach(num => {
	    curr < 0 ? curr = num : curr += num
   	    if(max < curr){
		max = curr;	
	    } 
	})
    return max;
}
const quadraticSumSubArray = (array) => {
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < array.length; i++){
	let curr = array[i];	
        for(let j = i+1; j < array.length; j++){
	    curr += array[j]; 
	    if( curr > max) max = curr;
	}
    }
    return max;	
}
const cubedTimeComplexitySolution = (array) => {
  for(let i = 0; i < array.length; i++){
   for(let j = i; j < array.length; j++){
    for(let k = i; k <= j; k++){
	

    }
   }
  }
}
console.log(maximumSumSubArray(nums))
console.log(quadraticSumSubArray(nums))
