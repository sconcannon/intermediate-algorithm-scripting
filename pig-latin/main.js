function translatePigLatin(str) {
	//TODO find first vowel
	const vowelRegEx = (/[aeiou]/);
	let firstVowel = 0;
	for (let x = 0; x < str.length; x++){
		if (vowelRegEx.test(str[x])) {firstVowel = x; break;}
		if (x == str.length - 1) {firstVowel = str.length;}
	}
	// if first vowel is 0, tack -way and return
	if (firstVowel == 0){
		str = str + "way";
	}
	else if (firstVowel == str.length) {
		str = str + "ay";
	}	
	else {
		str = str.substr(firstVowel,) + str.substr(0,firstVowel) +"ay";
	}
	
	// return string is from site of first vowel to end of string, then from start to site of first vowel, plus -ay
	return str;
  }
  
translatePigLatin("glove");
translatePigLatin("paragraphs");
translatePigLatin("california");
translatePigLatin("consonant");
translatePigLatin("rhythm");
translatePigLatin("schwartz");
translatePigLatin("eight");
translatePigLatin("algorithm");
translatePigLatin("rhythm");