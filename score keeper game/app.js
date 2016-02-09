
// // score
// var score = 0;

// // click on button Player 1
// var P1 = document.querySelector("#but-P-1");

// // score maximum set in input
// //var maxi = document.querySelector("#max");

// var maxi= 5;
//  document.querySelector("#max").innerHTML = maxi;


// //Player 1 click on button:

// P1.addEventListener("click", plusOne);

// function plusOne(){

// 	if (score < maxi){
// 	score ++;
// 	console.log(score);
// 	// Display score for player 1:
// 	document.querySelector("#score-display-1").innerHTML = score;
// 	  else {

// 	document.querySelector("#score-display-1").style.color = "red";
	

// }
// }
 


var p1Button = document.querySelector("#but-P-1");
var p2Button = document.querySelector("#but-P-2");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input[type = 'number']");
var p1Display = document.getElementById("score-display-1");
var p2Display = document.getElementById("score-display-2");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

function startAgain(){
	gameOver = false;
	p1Display.textContent = "0";
	p2Display.textContent = "0";
	p1Display.classList.remove("win");
	p2Display.classList.remove("win");
	p1Score = 0;
	p2Score = 0;
}


p1Button.addEventListener("click", function(){
	if (!gameOver){
		p1Score ++;
		if (p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("win");
		}
		p1Display.textContent = p1Score;
	}
})


p2Button.addEventListener("click", function(){
	if (!gameOver){
		p2Score ++;
		if (p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("win");
		}
		p2Display.textContent = p2Score;
	}
})

reset.addEventListener("click", startAgain)
	


numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	startAgain();
})






















