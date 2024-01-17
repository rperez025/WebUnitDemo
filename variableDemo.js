// variables in JS are very similar to python
// python - name = "Rufin"
// use var or let to declare a variable
let myName = 'Rufin';

// output the name to the console
console.log(`Hello ${myName}!`);

// numerical data
var monthNum = 12;
var dayNum = 14;
var yearNum = 2023;

// output today's date to console
console.log(`Today is ${monthNum}/${dayNum}/${yearNum}`)

// declare a constant - value that does not change
const NUMDAYSINWEEK = 7;

//NUMDAYSINWEEK = 8; // produces Uncaught TypeError: Assignment to constant variable.

// JS Objects = aka JSONs resemble Python dictionaries
let inky = {
    name: 'Inky',
    color: 'Blue'
};

let pinky = {
    name: 'Pinky',
    color: 'Pink'
};

let blinky = {
    name: 'Blinky',
    color: 'Red'
};

let clyde = {
    name: 'Clyde',
    color: 'Orange'
};

console.log(inky);

// make an array
let ghosts = [inky, pinky, blinky, clyde];

console.log(ghosts);