/*
This is written by BUBU
year 2022
*/

// logs things to the browser console
console.log(document.getElementById("bubu"));

//finding html elements by id or ...
document.getElementById("bubu").innerHTML = "Hello JavaScript sum is : " + 10 + 214312;

//variables
var bubuName = "kidus Mehretu"; //string
var bubuAge = 14; //number
var isBubuStudent = true;//boolean
var bubuBooks //undefined or nothing

let names = [{ name: 'zemichael', age: 12 }, 'muluwork', 'mehretu', 'mahdere', 'kidus'];// array

let zemichael = { name: 'zemichael', age: 28 } // key:value (object)

let bubu = { family: ['zemichael', 'mehretu'], name: 'Bubu', age: 14, bodyPart: ['head', 'nose'], school: "ABC" } //object

let grades = [
    {
        "subject": "math",
        "grade": 5
    },
    {
        "subject": "physics",
        "grade": 56
    }
] //array

//Object -> Properties , methods

//instraction on how to do something....

//how to run -> funciton
const run = () => console.log('running...' + name)

//run -> calling the funciton
run('bubu')

// do that thing

let purposedOfMouse = ['scroll', 'point', 'click'] //array
let purposedOfKeyboard = ['type', 'gaming'] //array

let mouses = [{ clicking: console.log('clicking...'), color: "black", purpose: purposedOfMouse, brand: 'logitech', light: 'insible', type: 'wireless', weight: 1.4 }, { color: "white", purpose: purposedOfMouse, brand: 'apple', light: 'vivle', type: 'wireless', weight: 1.4 }, { color: "black", purpose: purposedOfMouse, brand: 'dell', light: 'visisvbe', type: 'wired', weight: 3 }, { color: "black", purpose: purposedOfMouse, brand: 'samsung', light: 'insible', type: 'wireless', weight: 5 }] //array

console.log("My name is " + bubuName + ". I am " + bubuAge + " years old. if you ask me if I am a student, I will say " + isBubuStudent + ".")

let object = { key: 'value' } //obejct
let array = ['value', 'value2'] //array

console.log(bubu)

//functions
function clicking() {
    console.log('Clicking...')
}
function generateIntroduction() {
    console.log(mouses)
    console.log(1 + 1)
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    return "My name is " + name + ". I am " + age + " years old. if you ask me if I am a student, I will say " + isBubuStudent + "."
    document.getElementById("bubu").innerHTML = "My name is " + name + ". I am " + age + " years old. if you ask me if I am a student, I will say " + isBubuStudent + "."
}

function toCelsius(fahrenheit) {
    let convertedValue = ((5 / 9) * (fahrenheit - 32)).toFixed(2);
    return convertedValue;
}



//*********************************** */
//How/what to do something...
//(something) take this and do something with it
function countCharactersInString(string) {
    console.log('The given string is ', string.length, ' characters long.')
}



//DO!
//(something) = this is what you will take
countCharactersInString('')