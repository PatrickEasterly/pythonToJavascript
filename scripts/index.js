//variables

// turkey_legs_consumed = 3
var turkeyLegsConsumed = 3;
// or

// let is better because:
// you can limit it to a specific if/else or a specific loop

let turkeysCooked = 2;

// `const` is like `let`, but:
// - You must assign it when you declare it
// - You can never reassign it. 

const numberOfTurkeysICanEat = 1;

// How to use these keywords: 
// 1. Create your variables using const
// 2. If you find out that you need to reassign it, change it to `let` 


//print('hello world')
console.log('Hello World!');

//print(turkeysCooked)
console.log(turkeysCooked);

//print(f"I ate {turkeysCooked} turkeys!")
console.log(`I ate ${turkeysCooked} turkeys!`);
// `money braces` or `cash curleys`
// - Template Strings
// - Template Literals

// print(f"I ate {NumberOfTurkeysICanEat - turkeysCooked}")
console.log(`I ate ${turkeysCooked - numberOfTurkeysICanEat} Turkeys...`);
// inside of ${}, you can put any valid javascript expression

let petName = `oakley`;
// When do I do upper-casing in HTML vs CSS vs JavaSript? 
// - wherever you have control, is where you do it. 
// - If it won't change for a looong time: HTML
// - if you can't change the HTML: CSS
// - if you get the data from a server: JavaScript

console.log(`${petName.toLowerCase()} is ${petName.length} characters long.`);
// .toUpperCase is a method (ie a function that belongs to an object)
// .length is a property (ie a variable that belongs to an object)

const aboutMyPet = `${petName.toLowerCase()} is ${petName.length} characters long.`;
console.log(aboutMyPet);

// everything after debugger doesn't run
// debugger;

petName = 'Millaaaa';

console.log(aboutMyPet);

// stuff we'll do with collections

// Create 
const turkeyDinner = ['sausage balls', 'turkey', 'dressing', 'pecan pie'];
// how do i copy a list? 
// Retrieve
// print(turkeyDinner[2])
console.log(turkeyDinner[2]);
// How do I retrieve a portion? ('slice' in python)
// How do I retrieve based on a condition? 
// How do I transform each item and put that into a new list? 

// Update
// turkeyDinner[1] = "Tofurkey"
turkeyDinner[1] = "Tofurkey";

// Delete
// turkeyDinner.pop[1]
// del turkeyDinner[1]
// delete(turkeyDinner[1]); //["sausage balls", empty, "dressing", "pecan pie"]
// leaves a hole

// instead, you can splice
turkeyDinner.splice(1, 1);
// .splice(.startingIndex, howManyIndexes);

console.log(turkeyDinner);


///// For loops
// Python:
// for item in turkeyDinner:
//      print(f"For turkey day, I ate {item}")

// In JavaScript
// 1. "classic" for-loop
// for (let count = 10; count > 0; count --){
//     console.log(`${count} seconds until detonation. `);
// }
for(let count = 0; count < turkeyDinner.length; count++){
    console.log(`You ate ${turkeyDinner[count]}.`)
}


// 2. "new-fangled" for-loop, or a "for-of loop"

let itemCount = 0; // if you really need the index...
for(let item of turkeyDinner) {
    console.log(`I ate ${item}`);
    turkeyDinner[itemCount] = 'PIE';
    itemCount++;
}


// 3. .forEach() and friends


// converting numbers to/from strings 
// a_num = "5"
// no_really_a_number = int(a_num)
const aNum = "5";
// const reallyANumber = Number(aNum);
const reallyANumber = parseInt(aNum, 10);

const aFloat = "5.5555555";
const reallyAFloat = parseFloat(aFloat);

// original_string = str(no_really_a_number)
const stringFloatAgain = String(reallyAFloat);
const stringNumberAgain = String(reallyANumber);

// comparison

// In python, this is false.
// "5" == 5
// 5 == "5";      //true

// in JavaScript, the == operator AUTOMATICALLY converts types

// but...
// 5 === "5";     //false

// if you use the "threequel", it is false
// 1. it compares the types
// 2. it compare the values


// 5 < 6       //true
// 6 < 6       //false
// 6 <= 6      //true

// "7" <= 7    //true



// and/or equivalents
const petAge = 9;

//python
//petAge < 10 and petAge > 5

// isPetAge = petAge < 10 && petAge > 5;   //true
// isPetAge = petAge < 10 || petAge > 5;   //true

// Too much!
// petAge < 10 && petAge > 5 || petAge === 8;

const isYoungEnough = petAge < 10;
const isOldEnough = petAge > 5;
const isJustRight = petAge === 8;

// if/else 

if(isYoungEnough && isOldEnough) {
    if(isJustRight) {
        console.log(`You are exactly the right age.`)
    } else {
        console.log(`You're cool anyway. `)
    }
}

// 1. Create an array of numbers 
// 2. Loop through the array
// 3. Print out only the even numbers

const numArray = [11, 25, 33, 42, 54, 65, 7, -8, 92];
// for(let i = 0; i < numArray.length; i++) {
//     if(numArray[i] % 2 === 0) {
//         console.log(numArray[i]);
//     }
// }

// if you use (let item in array), if will give you the indexes
// use (let item of array)
// for (let number of numArray) {
//     if(number % 2 === 0) {
//         console.log(`Yeet ${number}`)
//     }
// }

// I want the even numberrs in their own array! 
const evensOnly = [];
for (let number of numArray) {
    if(number % 2 === 0) {
        // console.log(`Yeet ${number}`)
        evensOnly.push(number);
    }
}
console.log(evensOnly);

const aBunchOfStuff = ["a", 1, "hello", 300];
for (let thing of aBunchOfStuff) {
    console.log(`${thing} !`);
}



///////  const is like sharpie written on the box; you can change what's inside, but you can't remove that 
// label and stick it somewhere else
// it's not "unchangeable", it's "no reassignment"




/*
let odds = [];
for(let i = 0; i < 100; i++) {
     if(i % 2 != 0){
         odds.push(i);
     }
}
console.log(odds);
*/


// maybe...
// dictionaries
