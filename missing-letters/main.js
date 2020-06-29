function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str[0]);
    let end = alphabet.indexOf(str[str.length-1]);
    let part = alphabet.slice(start,end);
    let returnStr;
      for(let char in part){
        if(!str.includes(part[char])){
          returnStr = part[char];
        }
      }
    return returnStr;
    }