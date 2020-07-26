// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods 
// that take an argument must accept only one argument and it has to be 
// a string. These methods must be the only available means of interacting 
// with the object.

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly

    this.getFullName = function() {
        // returns the firstAndLast name, but I am not clear on how this assigns it
        return firstAndLast;
    };
    this.getLastName = function() {
        // find the break between first name and last name
        let break_space = firstAndLast.indexOf(" ");
        // counting from the last character back to the break for the last name
        return firstAndLast.slice(break_space + 1, firstAndLast.length);
    };
    this.getFirstName = function() {
        // find the break between first name and last name
        let break_space = firstAndLast.indexOf(" ");
        // first name is the start of the string, up to but not including the break space
        return firstAndLast.slice(0, break_space);
    };
    this.setFullName = function(newLast) {
        // at first I made the parameter firstAndLast, but maybe that conflicted with the scope of the first and last variable
        firstAndLast = newLast;
        return firstAndLast;
    };
    this.setFirstName = function(first) {
        // I think this gets the last name from the current state of firstAndLast, and this expression assigns the new state of firstAndLast
        firstAndLast = first + " " + this.getLastName();
        // I think I need to return firstAndLast to maintain it's state?
        return first, firstAndLast;
    };
    this.setLastName = function(last) {
        // I think this gets the first name from the current state of firstAndLast, and this expression assigns the new state of firstAndLast
        firstAndLast = this.getFirstName() + " " + last;
        // I think I need to return firstAndLast to maintain it's state?
        return last, firstAndLast;
    };
};

var bob = new Person('Bob Ross');

console.log(bob.getFullName());
console.log(Object.keys(bob).length); // should return 6
console.log(bob instanceof Person); // should return true.
console.log(bob.firstName) // should return undefined.
console.log(bob.lastName) // should return undefined.
console.log(bob.getFirstName()) // should return "Bob".
console.log(bob.getLastName()) // should return "Ross".
console.log(bob.getFullName()) // should return "Bob Ross".
console.log(bob.getFullName()) // should return "Haskell Ross" after bob.setFirstName("Haskell").
console.log(bob.getFullName()) // should return "Haskell Curry" after bob.setLastName("Curry").
console.log(bob.getFullName()) // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()) // should return "Haskell" after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()) // should return "Curry" after bob.setFullName("Haskell Curry").

// the solution here https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-make-a-person/16020
// has you make a var fullName, which maintains state (or is reassigned whenever you use the object?)
// then you don't need to call the getter functions in the setter functions - you just reassign fullName 
// as needed.