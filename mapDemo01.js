/* 
    In python, we can create a list using a list comprehension
    numbers = [1, 2, 3, 4, 5]
    copyNumbers = [number for number in numbers]
*/

// in JS, we use mapping to map information from one array to another
var numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// To map in JS, use .map() function
var copyNumbers = numbers.map(
    function(number) {
    return number;
    }
);

console.log(numbers);

// to get the number with the index
var numbersWithIndexes = numbers.map(
    function(item, index){
        return `Index ${index}, value ${item}`
    }
);

console.log(numbersWithIndexes);

// Array of students and colors of zoom backgrounds
let students = [
    {name: 'Rufin', background: 'Blurry'},
    {name: 'Jerry', background: 'Blue'},
    {name: 'Luz', background: 'Grey'}
]

// get the student names by using mapping
let names = students.map(function(studentObj) {
    return studentObj.name; // returns the name property from each studentObj
})

console.log(names)

// get the background colors by using mapping
let backgrounds = students.map(function(studentObj) {
    return studentObj.background; // returns the .background
                                  // returns the name property from each studentObj
})

console.log(backgrounds);

/*
    // To map in JS, use .map() function
    var copyNumbers = numbers.map(
    function(number) {
    return number;
    }
);
*/

// An arrow function ( '=>' allows us to remove the 'function' key word)
let mapArrow01 = numbers.map((number) => {
    return number;
});

console.log(mapArrow01);

/*
    Instead of the original arrow function
    let mapArrow01 = numbers.map((number) => {
    return number;
    }); 
*/
let mapArrow02 = numbers.map(number => number);

console.log(mapArrow02); 

/*
    // to get the number with the index
    var numbersWithIndexes = numbers.map(
    function(item, index){
        return `Index ${index}, value ${item}`
    }
);
*/
let mapArrow03 = numbers.map((item, index) => `Index ${index}, Value ${item}`);
console.log(mapArrow03);

console.log('-------------------------------------------------------')

// Array of heroines
heroines = [
    {name: 'Rapunzel', age: 18},
    {name: 'Mulan', age: 16},
    {name: 'Anna', age: 18},
    {name: 'Moana', age: 16}
];

// Create an array of just the names from the heroines array
let heroineNames01 = heroines.map(
    function(heroine) {
        return heroine.name; // return the name property
    }
);

console.log(heroineNames01)

// Arrow function version
let heroineName02 = heroines.map(heroine => heroine.name);
console.log(heroineName02);

// Create an array of strings for each heroine's name, followed by a colon, followed by their age
let heroineNameAndAges01 = heroines.map(
    function(heroine) {
        return `${heroine.name}: ${heroine.age}`;
    }
);

console.log(heroineNameAndAges01);

// Arrow function version
let heroineNameAndAges02 = heroines.map(heroine => 
    `${heroine.name}: ${heroine.age}`);
    
console.log(heroineNameAndAges02);