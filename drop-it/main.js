function dropElements(arr, func) {
	do {
		if (func(arr[0])){
			return(arr);
		}
		arr.shift();
	} while (arr.length>0);
	return arr;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));