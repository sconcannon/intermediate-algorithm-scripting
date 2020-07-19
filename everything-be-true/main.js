function truthCheck(collection, pre) {
	// freecodecamp: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
	// loop through the array
	for (let obj in collection){
		// check for truthiness
		if (!(collection[obj][pre])){
			// one false value means the function returns false
			return false;
		}

	}
	// no false values found, return true
	return true;
  }
  
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
  