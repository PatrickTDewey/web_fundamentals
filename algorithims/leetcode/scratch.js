function filterEvenElements(arr) {

    var newArray = []; 

    for (var x = 0; x < arr.length; x++) {

     if (arr[x] % 2 === 0) {

         newArray.push(arr[x]);
     }

    return newArray; 

    }
}
var output = filterEvenElements([2, 3, 4, 5, 6])

function times(arr){
	
	if(arr.length === 0){
		return 0;
	}
	for(let i = 0; i < arr.length; i++){
		console.log(arr[i]) 
	}
	// console.log(arr)
	var x = 1;
	// console.log(x);
}

var numberArray = [1,2,3,1,4]

times(3);