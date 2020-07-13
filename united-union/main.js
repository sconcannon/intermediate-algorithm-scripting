function uniteUnique(arr,...arrs) {
 // ...arrs - using the spread operator in case user adds more than one additional array to the arguments

  // find the longest array - completely unecessary for this exercise
//   let extent = arr.length;
//   for (let item in arrs){
//     if (arrs[item].length > extent){
//       extent = arrs[item].length;
//     } 
//   }
  let product = [];
  //adds the initial array to the subsequent arrays
  arrs.unshift(arr);
   // loop through all of the arrays, add any unique value found to result
  for(let item in arrs){
    for(let memb in arrs[item]){
      if(!product.includes(arrs[item][memb])){
        product.push(arrs[item][memb]);
      }
    }
  }
console.log(product);
return product;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);