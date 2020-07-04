function sumFibs(num) {
  let fibs = [1,1];
  let total=2;
  let next = 0;
  do {
    next = fibs[fibs.length-1]+fibs[fibs.length-2];
    console.log(next);
    if (next%2!=0 && next<=num) total = total + next;
    fibs.push(next);
  } while (next<num);
  console.log(total);
  return total;
}