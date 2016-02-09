var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDiplay = document.querySelector("#colorDisplay");
var answerDisplay = document.querySelector("#answer");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBottons = document.querySelectorAll(".mode");


init();

function init(){

	//mode buttons event listeners
	for (var i = 0; i < modeBottons.length; i++){
	modeBottons[i].addEventListener("click", function(){
		modeBottons[0].classList.remove("selected");
		modeBottons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});	
	}

	//squares listeners
	for (var i= 0; i<colors.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
	if (clickedColor === pickedColor){
		answerDisplay.textContent = "Correct!";
		changeColor(clickedColor);
		resetButton.textContent = "Play Again!"
	} else {
		this.style.background = "#232323";
		answerDisplay.textContent = "Try Again...";
			}	
	})	
	}

	reset();
}





function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// change color display to match picked color
	colorDiplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	answerDisplay.textContent = "";
	colorDiplay.textContent = pickedColor;
	resetButton.textContent = "new colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}




resetButton.addEventListener("click", function(){
	reset();
})






function changeColor(color){
	for (var i=0; i<colors.length; i++){
		squares[i].style.background = color;
		h1.style.background = color;
	}
}


function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}


function generateRandomColors(num){
	var arr = [];
	for (var i=0; i<num; i++){
		 arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";

// rgb(0, 0, 0)
}


