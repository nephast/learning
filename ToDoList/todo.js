
var todos = ["buy new turtle"];

var input = prompt("What you like to do?");

while(input !== "quit"){

if (input === "list"){
	listTodo();

}	else if (input === "new") {
addTodo();
	

} 	else if (input ==="delete"){
	deleteTodo();


}

input = prompt("What you like to do?");

}

console.log("OK, BYE!!!");

function listTodo(){
	console.log("******");
	todos.forEach(function(todo, i){	
	console.log(i + ": " + todo);
	});
	console.log("******");
}

function addTodo(){
	var newTodo = prompt("Enter new Todo");
	todos.push(newTodo);
	console.log("ITEM ADDED")
}

function deleteTodo(){
	var efface = prompt("which idex of todo do you want to delete?")
	todos.splice(efface, 1);
	console.log("ITEM DELETED")
}

