function spinalCase(str) {
	// convert to array
	let strArr = str.split("");

	// TODO add dashes (cases- space, cap, underscore)
	for(let x=1; x<strArr.length;x++){
		if(strArr[x] == " " || strArr[x] == "_") {strArr[x] = "-";}
		if(strArr[x].toLowerCase() != strArr[x]){
			if(strArr[x-1] != "-"){
				strArr.splice(x,0,"-");
			}
		}

	}

	// TODO convert to lower
	str = strArr.join("");
	str = str.toLowerCase();

	return str;
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("thisIsSpinalTap");
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("Teletubbies say Eh-oh");
  spinalCase("AllThe-small Things");
