let button0 = document.getElementById('0')
let button1 = document.getElementById('1')
let button2 = document.getElementById('2')
let button3 = document.getElementById('3')
let button4 = document.getElementById('4')
let button5 = document.getElementById('5')
let button6 = document.getElementById('6')
let button7 = document.getElementById('7')
let button8 = document.getElementById('8')
let button9 = document.getElementById('9')

let turnBoolean = true
let randomNumber = Math.random();
let guessedNumbers = [];
let multipliedNumber = randomNumber * 10;
let finalNumber = Math.round(multipliedNumber)


let buttons = document.getElementsByClassName("button")
console.log(buttons)
for (let button of buttons) {
    console.log(button)
    button.addEventListener('click', function (e) {
        let player1 = document.getElementById('name1').value;

        let player2 = document.getElementById('name2').value;

        if (turnBoolean === true) {
            document.getElementById('gamer').innerHTML = 'It is ' + player1 + "'s turn!"
        } else {
            document.getElementById('gamer').innerHTML = 'It is ' + player2 + "'s turn!"
        }
        turnBoolean = !turnBoolean

        // let clickedButtons = document.getElementsByClassName("clicked")
        //take the clicked number and store itlet
        let clickedNumber = e.target.id
        console.log(clickedNumber)
        let clickedElement = document.getElementById(clickedNumber)
        //compare it with to guess no
        if (parseInt(clickedNumber) === finalNumber) {
            console.log("we win")
            document.getElementById('winner').style.display === ""
            if (turnBoolean === true) {
                document.getElementById('winner').innerHTML = player1.toUpperCase() + '  WINS!'
            } else {
                document.getElementById('winner').innerHTML = player2.toUpperCase() + ' WINS!'
            }
            clickedElement.classList.add("win")
            document.querySelectorAll(".clicked").forEach(div => {
                div.classList.remove("clicked");
            })
            // console.log(clickedButtons)
            // for (let clicked of clickedButtons) {
            //     clicked.classList.remove("clicked")
            //     console.log(clicked)
            // }

            // for (var i = 0; i < clickedButtons.length; i++) {
            //     clickedButtons[i].classList.remove("clicked")
            //     console.log(clickedButtons[i])
            // }

            randomNumber = Math.random()
            multipliedNumber = randomNumber * 10;
            finalNumber = Math.round(multipliedNumber)
            setTimeout(() => {
                clickedElement.classList.remove("win")
            }, 3000)
        } else {
            console.log("we lose")
            clickedElement.classList.add("clicked")
        }
        //if same , we win
        //else we add "clicked" to the element class
    });
}

//******************************* */
//make a game to guess random numbers from 1 to 10


function MakeRandomNum() {

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


const icons = document.querySelectorAll('.icon');
const body = document.querySelector('body');

console.log(buttons);

icons.forEach(function (icon) {
    icon.addEventListener('click', function (e) {
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'brown') {
            body.style.backgroundColor = e.target.id;
        }
    })
})