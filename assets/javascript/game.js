var words = ["cactus", "horse", "whip", "pistol", "badge", "duel", "fight", "robber", "whiskey", "sheriff", "west", "chaps", "spurs", "saddle", "outlaw", "boots"];
var word = "";
var blanks = [];
var userGuess = "";
var message = "";
var guessesLeft = 0;
var remainingLetters = 0;

	function randomWord(){
		word = words[Math.floor(Math.random() * words.length)];
		return;
	};

	function setBlanks(){
		blanks = [];
	 	for (var i = 0; i < word.length; i++) {
	    blanks[i] = "_";
	  	}
		document.getElementById("blanks").innerHTML = blanks.join(" ");
		return;
	};

	function setBoard(){
		guessesLeft = 10;
		document.getElementById("remaining").innerHTML = "Lives Remaining: " + guessesLeft;
		document.getElementById("start").style.visibility = "hidden";
		document.getElementById("img-tnt").style.visibility = "visible";
		document.getElementById("instruction").innerHTML = "Let's Go Russle Up Some Letters";
	}

	document.getElementById("start").onclick = function() {
		randomWord();
		setBlanks();
		setBoard();
		console.log(word);
	};

	document.onkeyup = function(e) {
		play();
	};

	function play() {
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	message = "";

  	if (userGuess.length !== 1) {
      message ="One letter at a time Tex!";
  	} else {
        // Update the game with the guess
        var i=0; // an indexer into the array 
        for (i = 0; i < word.length; i++) {
            if (word[i] === userGuess) {
                blanks[i] = userGuess;
                message = "Yehaw! " + "You wrangled an " + userGuess;
            }
        }

        remainingLetters = blanks.length;
        for (i = 0; i < blanks.length; i++) {
            if (blanks[i] !== '_') {
                remainingLetters -= 1;
            }
        }

        if (message === "") {
            message = "Ain't no " + userGuess + "'s" + " round these parts."
           	guessesLeft--;
           	document.getElementById("remaining").innerHTML = "Remaining Lives: " + guessesLeft;
        }

        if (remainingLetters == 0) {
            message = "You guessed " + word + "." + " Promoted to Marshall!";
            document.getElementById("btn_name").innerHTML = "Play Again";
            document.getElementById("start").style.visibility = "visible";
            document.getElementById("bullet").style.visibility = "visible";
            remaining_guesses = 10;      	
        }

        if (guessesLeft === 0) {
        	message = "GAME OVER";
        	document.getElementById("btn_name").innerHTML = "Try Again";
            document.getElementById("start").style.visibility = "visible";
            remaining_guesses =10;
        }

        document.getElementById("blanks").innerHTML = blanks.join(" ");

  }
  document.getElementById("instruction").innerHTML = message;
}





