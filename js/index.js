/** 
 // Author: Ganesh Naykawadi.
 // Date Created: 14th Nov, 2024.
**/

console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "WebDevOpen";
let hacker2 = "Steve";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if (hacker1.length < hacker2.length)
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops

// capitalize and split
let capitalHacker1 = hacker1.toUpperCase();
capitalHacker1 = capitalHacker1.split("").join(" ");
console.log(capitalHacker1);

// name reverse
let reversedString = hacker2.split("").reverse().join("");
console.log(reversedString);

// names sorting
let names = [hacker1, hacker2];
// Case-insensitive sorting
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// check
if (names[0] == names[1]) console.log("What?! You both have the same name?");
else if (names[0] == hacker1 && names[1] == hacker2) console.log("The driver's name goes first.");
else if (names[0] == hacker2 && names[1] == hacker1) console.log("Yo, the navigator goes first definitely.");
