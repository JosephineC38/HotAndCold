    var actNum = parseInt((Math.random() * 100) + 1);
    var guessNum = 50;
    var guessLeft = 5;
    var logText = "";
    var didWin = false;
    numText = document.getElementById("numText");
    leftText = document.getElementById("leftText");
    resText = document.getElementById("response");
    logText = document.getElementById("log");
    console.log(actNum);

function add(number) {
    if(guessNum + number <= 100) {
        guessNum += number;
        numText.innerHTML = "Your current guess is: " + guessNum;
    }
}

function subtract(number) {
    if(guessNum - number >= 0) {
        guessNum -= number;
        numText.innerHTML = "Your current guess is: " + guessNum;
    }
}

function commit() {
    if(!didWin) {
        guessLeft --;
    }
   
    if(guessLeft >= 1) {
        leftText.innerHTML = "You have " + guessLeft + " guesses left.";
    } else if (guessLeft == -1) {
        leftText.innerHTML = "You can't guess anymore, please press the reset button.";
        resText.innerHTML = " ";
    } else if (guessLeft == -2) {
        leftText.innerHTML = "If you want to guess again, hit the reset button. It's right there.";
        resText.innerHTML = " ";
    } else if (guessLeft == -3) {
        leftText.innerHTML = "There is literally no point in hitting this button, just reset.";
        resText.innerHTML = " ";
    } else if (guessLeft == -4) {
        leftText.innerHTML = "Press this button again and get reset anyways.";
        resText.innerHTML = " ";
    } else if (guessLeft <= -5) {
        reset();
    }
   
    if(actNum == guessNum) {
        resText.innerHTML = "Congrats! You got the number! The number was " + actNum;
        didWin = true;

    } else if ( (actNum - 5 <= guessNum && actNum > guessNum) ||  (actNum + 5 >= guessNum && actNum < guessNum) ) {
        resText.innerHTML = guessNum + " is very hot.";
        guessLeft ++;

    } else if ( (actNum - 6 <= guessNum && actNum >= guessNum - 8) ||  (actNum + 6 >= guessNum && actNum + 8 <= guessNum) ) {
        resText.innerHTML = guessNum + " is hot.";

    } else if ( (actNum - 9 <= guessNum && actNum >= guessNum - 15) ||  (actNum + 9 >= guessNum && actNum + 15 <= guessNum) ) {
        resText.innerHTML = guessNum + " is very warm.";

    } else if ( (actNum - 16 <= guessNum && actNum >= guessNum - 20) ||  (actNum + 16 >= guessNum && actNum + 20 <= guessNum) ) {
        resText.innerHTML = guessNum + " is warm.";

    } else if ( (actNum - 21 <= guessNum && actNum >= guessNum - 30) ||  (actNum + 21 >= guessNum && actNum + 30 <= guessNum) ) {
        resText.innerHTML = guessNum + " is cool.";

    } else if ( (actNum - 31 <= guessNum && actNum >= guessNum - 40) ||  (actNum + 31 >= guessNum && actNum + 40 <= guessNum) ) {
        resText.innerHTML = guessNum + " is very cool.";
    }

    else if ( (actNum - 41 <= guessNum && actNum >= guessNum - 55) ||  (actNum + 41 >= guessNum && actNum + 55 <= guessNum) ) {
        resText.innerHTML = guessNum + " is cold.";
    }

    else if ( (actNum - 56 >= guessNum) ||  (actNum + 56 <= guessNum) ) {
        resText.innerHTML = guessNum + " is very cold.";
    }


    if(guessLeft > 0) {
        logText.innerHTML += resText.innerHTML + "<br/> <br/>";
    }
   


    if (guessLeft == 0 && !didWwin) {
        leftText.innerHTML = "You have run out of guesses. Tha actual number was " + actNum + ". Please press the reset button to try again.";
    }


}


function reset() {
    actNum = parseInt((Math.random() * 100) + 1);
    console.log(actNum);
    guessNum = 50;
    guessLeft = 5;
    numText.innerHTML = "Your current guess is: " + guessNum;
    leftText.innerHTML = "You have " + guessLeft + " guesses left.";
    logText.innerHTML = " ";
    resText.innerHTML = " ";
}
