// console.log("all numbers between -10 and 19 WHILE LOOP");
// c= -10;
// while (c<20){
// 	console.log(c);
// 	c++;
// }

// console.log("all numbers between -10 and 19 FOR LOOP");
// for (c=-10; c<=19; c++ ){
// 	console.log(c);
// }


// console.log("all even between 10 and 40  WHILE LOOP");
// c= 10;
// while (c<=40){
// 	if (c%2===0){
// 		console.log(c);
// 	}
// 	c++;	
// }

// console.log("all even between 1 and 40  FOR LOOP");

// for (c=10; c<=40; c+=2){
// 	console.log(c);
// }


// console.log("all odd nbs btw 300 and 333  WHILE LOOP");
// var c= 300;
// while (c<=333){
// 	if (c % 2 !== 0){
// 		console.log(c);
// 	}
// 	c++;
// }

// console.log("all odd nbs btw 300 and 333  FOR LOOP");
// for (c=300; c<=333; c++){
// 	if (c %2 !== 0){
// 		console.log(c);
// 	}
// }


// console.log("divisible by 5 and 3 btw 5 and 50  WHILE LOOP");
// var c= 5;
// while (c <=50){
// 	if (c % 5 === 0 && c % 3 === 0){
// 		console.log(c);
// 	}
// 	c++;
// }

// console.log("divisible by 5 and 3 btw 5 and 50  FOR LOOP");
// for (c=5; c<=50; c++){
// 	if (c % 5 ===0 && c % 3 ===0){
// 		console.log(c);
// 	}

// }



// function isEven(x){

// 	if (x % 2 === 0) {
// 		return true;
// 	} 
// 	else {
// 		return false;
// 	}
// }

// function fac(y){

// 	var res = 1

// 	for (i=1; i<=y; i++){
// 		res *= i;
		
// 	}
// 	return res;

// }

// function kebab(str){
// 	var a = str.replace(/_/g , "-");
// 	return a;
// }


var todos = [];

var input = prompt("What woud you like to do?");

while(input !== "quit"){

// Handle input

	if (input === "list") {
		todos.forEach(function(i){
			console.log(i);
		}

			);
	} else if (input === "new") {

//add to todos array

		var newTodo = prompt ("Enter new todo");
		todos.push(newTodo);
	}
}











