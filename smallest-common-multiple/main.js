function smallestCommons(arr) {
  // arr[0] is low, arr[1] is high
  arr.sort((a,b) => a-b);
  // array  of range
  let orig_range = [];
  for (let x=arr[0]; x<=arr[1]; x++){
    orig_range.push(x);
  }
  let check = arr[1];
  let not_found=true;
  while (not_found) {
	if (orig_range.reduce((a,num)=> {
		a = a && (check%num===0);
		return a;
		}, true)) return check;
	else {
		check = check + arr[1];
	}
	
  }
}