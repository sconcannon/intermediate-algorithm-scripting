function addTogether(...arg) {
	// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
	console.log(arg);
	// if any argument is not an integer return undefined
	for (let thing in arg){
		if (!Number.isInteger(arg[thing])) return undefined;
	}
	// if the argument array has two integers, return their sum
	if (arg.length === 2) {
		return arg[0] + arg[1];
	}
	// if the argument array is one integer, return a function to pick up a second integer
	if (arg.length === 1) {
		// save the original argument for later addition
		var c = arg[0];
		// this function will find the 2nd arg and add it to arg[0];
		return function(x) {
			console.log(x);
			// make sure second arg is an integer
			if (Number.isInteger(x)){
				return c + x;
			}
			else{
				return undefined;
			}
		}
	}
	
}
console.log(addTogether(2,3));
console.log(addTogether(5)(7));
console.log(addTogether(23, 30));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));