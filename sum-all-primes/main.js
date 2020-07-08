function sumPrimes(num) {
	const isPrime = num1 => {
	for(let i = 2; i < num1; i++)
	  if(num1 % i === 0) return false;
	return num1 > 1;
	}
	let primeTotal = 0;
	for (let x = 1; x<=num; x++){
	  if(isPrime(x)) primeTotal = primeTotal+x;
	}
	return primeTotal;
  }