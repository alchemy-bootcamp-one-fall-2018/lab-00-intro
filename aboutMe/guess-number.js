/* exported checkGuessNumber, resetGuessNumber */


var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {
    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

 
    // eslint-disable-next-line eqeqeq
    if(guess == 45) {
        guessNumberResponse.textContent = 'you must be psychic!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 4) {
            guessNumberResponse.textContent = 'try again!';
        }
        else {
            guessNumberResponse.textContent = 'you lose';
            submit.disabled = true;
        }

    }  
}

function resetGuessNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumberResponse.textContent = '';
}