// freecodecamp https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
function binaryAgent(str) {
	// convert string to array
	let arr = str.split(" ");
	// turn each binary code into a character
	for(let binary in arr){
		// parseInt converts a binary value (arr[binary]) into a decimal value (which will return an ASCII value)
		// String.fromCharCode parses the decimal ascii value and returns an ascii character
		arr[binary] = String.fromCharCode(parseInt(arr[binary],2));
	}
	str = arr.join("");
	return str;
  }
    
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
