//print reverse

var arr = [1,2,3,4];
var letters = ["a", "b", "c", "d", "e"];

function printReverse(array){
for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	};	
}

printReverse(arr);


//elements are uniform

var arr2 = [1,1,1,1];
var arr3 = [1,1,1,2];

function uniform(array){
for (var i = array.length - 1; i >= 0; i--) {
	if (array[i] !== array[0]){
		return false;
	} else 
	{
		return true;
	}
}};

// Adding each cell to the next one

arr4 = [1,2,3];

function sumArray(array){
	var add = 0;
	for (var i = array.length - 1; i >= 0; i--) {
add += array[i];
	};
	return add;
}

//test avec forEach:

arr5 =[10,20,30];

function sumArray(array){
	var add = 0;
	array.forEach(function(test) {
add += test;
	});
	return add;
	return test;
}


// Max function

arr6 = [1,29,3,-4,5];

function max(array){
	var max= array[0];
	array.forEach(function(test){
		if (array[test]>max){
			max = array[test];
		}

	}


		)
	return max;
	
}

arr6 = [1,29,3,-4,5];

function max(array){
	var max= array[0];
	for (i=1; i<array.length; i++){
		if (array[i]>max){
			max=array[i];
		}
	}
	return max;
}


