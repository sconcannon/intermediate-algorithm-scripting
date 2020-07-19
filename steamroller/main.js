function steamrollArray(arr) {
	// newArr collects eligible values
	let newArr = [];
	//recursive function works  through nested arrays
	function valuizer(item){
		// if the array element is itself an array, break it down in valuizer
		if(Array.isArray(item)){
			for(let thing in item){
				valuizer(item[thing]);
			}
		}
		// if the array element is a value, push it to the result array
		else{
			if (item != undefined){
				newArr.push(item);
		}
	}
	}
	
	valuizer(arr);
	
  return newArr;
}



console.log(steamrollArray([1, [2], [3, [[4]]]]));