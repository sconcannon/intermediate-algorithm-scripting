function myReplace(str, before, after) {
	// create regex with 'before' called beforeRegEx
	let beforeRegExp = new RegExp(before, "i");
	// return regex match, check case
	if (str.match(beforeRegExp)[0][0] != str.match(beforeRegExp)[0][0].toLowerCase()) {
		after = after[0].toUpperCase() + after.slice(1); //    if case is proper, make 'after' proper
	}
	// replace beforeRegex with 'after'
	str = str.replace(beforeRegExp, after);
	return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");