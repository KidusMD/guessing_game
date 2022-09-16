//*********************************** */
//How/what to do something...
//(something) take this and do something with it

//normal function

//DO!
//(something) = this is what you will take
// countCharactersInString('')
//******************************* */
//make a game to guess random numbers from 1 to 10
let turnBoolean = true
let randomNumber = Math.random();
let guessedNumbers = [];

function MakeRandomNum() {
    let multipliedNumber = randomNumber * 10;
    let finalNumber = Math.round(multipliedNumber)

    let player1 = document.getElementById('name1').value;

    let player2 = document.getElementById('name2').value;

    let guessedNumber = parseInt(document.getElementById('guessed').value);

    if (guessedNumber === finalNumber) {
        guessedNumbers = []
        document.getElementById('guessed_numbers').innerHTML = null;

        document.getElementById('winner').style.display === ""
        if (turnBoolean === true) {
            document.getElementById('winner').innerHTML = player1.toUpperCase() + '  WINS!'
        } else {
            document.getElementById('winner').innerHTML = player2.toUpperCase() + ' WINS!'
        }
        randomNumber = Math.random();

    } else {
        if (guessedNumbers.includes(guessedNumber)) {
            console.log('same number guessed')
        } else {
            guessedNumbers.push(guessedNumber);
            guessedNumbers = guessedNumbers.sort(function (a, b) {
                return a - b;
            });
            console.log(guessedNumbers)
            document.getElementById('guessed_numbers').innerHTML = guessedNumbers.join(' , ')
            document.getElementById('winner').innerHTML = null
        }
    }

    if (turnBoolean === true) {
        document.getElementById('gamer').innerHTML = 'It is ' + player1 + "'s turn!"
    } else {
        document.getElementById('gamer').innerHTML = 'It is ' + player2 + "'s turn!"
    }
    turnBoolean = !turnBoolean

    console.log('guessed', guessedNumber)
    console.log('finalNumber', finalNumber)
}