function uniteUnique(arr,...arrs) {
  // find the longest array
  let extent = arr.length;
  let product = [];
  for (let item in arrs){
    if (arrs[item].length > extent){
      extent = arrs[item].length;
    } 
  }
  arrs.unshift(arr);
  console.log(arrs);
   // loop that ends when length of longest array is met
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