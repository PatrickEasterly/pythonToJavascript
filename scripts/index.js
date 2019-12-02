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
console.log('Hello World!')
//print(turkeysCooked)
console.log(turkeysCooked)

//print(f"I ate {turkeysCooked} turkeys!")
console.log(`I ate ${turkeysCooked} turkeys!`)
// `money braces` or `cash curleys`
// - Template Strings
// - Template Literals

// print(f"I ate {NumberOfTurkeysICanEat - turkeysCooked}")
console.log(`I ate ${turkeysCooked - numberOfTurkeysICanEat} Turkeys...`)
// inside of ${}, you can put any valid javascript expression

let petName = `oakley`;
// When do I do upper-casing in HTML vs CSS vs JavaSript? 
// - wherever you have control, is where you do it. 
// - If it won't change for a looong time: HTML
// - if you can't change the HTML: CSS
// - if you get the data from a server: JavaScript

console.log(`${petName.toLowerCase()} is ${petName.length} characters long.`)
// .toUpperCase is a method (ie a function that belongs to an object)
// .length is a property (ie a variable that belongs to an object)

const aboutMyPet = `${petName.toLowerCase()} is ${petName.length} characters long.`
console.log(aboutMyPet)

// everything after debugger doesn't run

debugger;
petName = 'Millaaaa';

console.log(aboutMyPet)

// Create
// Retrieve
// Update
// Delete

