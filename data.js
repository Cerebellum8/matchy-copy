/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "dog";
animal.name = "Rose";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 
var noises = [];
noises[0] = "bark";
console.log(noises);
noises.push("growl");
noises.unshift("woof");
noises[noises.length] = "hum";
console.log(noises[noises.length -1]);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
animal.noises.push("whine");
console.log(noises);
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *Bracket, Dot, 
 * 2. What are the different ways of accessing elements on arrays?
 *assessor methods, bracket nota tion, reflection A
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; // Collection of animal objects

animals.push(animal); // Add our original 'animal' (Rose the dog)
 
var duck  = { 
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh" ]
 };
 var frog = {
  species: "frog",
  name: "Grunk",
  noises:["ribbit", "chirp"]
 };
 var cat = {
  species: "cat",
  name:"Garfield",
  noises : ["purr", "meow"]
 };

 animals.push(duck);
 animals.push(frog);
 animals.push(cat);

 console.log(animals);
 console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []; // A list of names

// Use any method to choose a random animal and add a friend
function getRandom(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

friends.push("Shevonda"); // Add a friend
friends.push("Snuff");
var randomAnimal = getRandom(animals);
randomAnimal.friends = friends; // Assign friends list to the chosen animal
animals[0].friends = friends;
console.log(friends);
console.log(animals[0]);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}