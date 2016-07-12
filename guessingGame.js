/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
var playersGuess;
var winningNumber;
var trys;
/* **** Guessing Game Functions **** */

// Generate the Winning Number
generateWinningNumber();
alert("Welcome to Guess the Mystery Number Game!")
alert("You have 6 chances to get the correct number. Click the hint button for a hint!")
function generateWinningNumber(){
	// add code here
	trys=0;
	winningNumber =Math.floor(Math.random()*100);
}
// Fetch the Players Guess

function playersGuessSubmission(){
  	playersGuess = +document.getElementById("PlayerGuess").value;
  	document.getElementById("PlayerGuess").value = "";

}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(playersGuess,winningNumber){
	var higherorLower="";
	if(playersGuess>winningNumber){
		higherorLower="lower";
	}else{
		higherorLower="higher";
	};
	return higherorLower;
	// add code here
};

// Check if the Player's Guess is the winning number 

function checkGuess(playersGuess,winningNumber){
	// add code here
	if(playersGuess===winningNumber){
		alert("You got the answer right in "+trys+ " attempts!");
		alert("Resetting mystery number!");
		generateWinningNumber();

	}else{
		trys++;
	};
};

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
	alert("You really should guess a "+lowerOrHigher()+ " number");
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
	prompt("You lost. Resetting the mystery number.")
  	generateWinningNumber();
};


/* **** Event Listeners/Handlers ****  */
$(document).ready(function(){
	$( "#Button1" ).on("click",function(event) {
		event.stopPropagation();
		event.preventDefault();
	
		playersGuessSubmission();
		checkGuess(playersGuess,winningNumber);
  	if(trys===0){
  		alert("You have 6 chances to guess the mystery number.Good Luck!");
  	}else if(trys>5){
 		playAgain();
  	}else{
  		alert("Wrong number, you have " +(6-trys)+" chances left.")};
  		event.stopPropagation();
		event.preventDefault();

 });

	$( "#Button2" ).on("click",function() {
  		provideHint();
		event.stopPropagation();
		event.preventDefault();
	});

	$( "#Button3" ).on("click",function() {
  		alert("Resetting the Mystery Number");
  	  	generateWinningNumber();
		event.stopPropagation();
		event.preventDefault();
	});



});

