// Find prime number in given array.

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};
let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let result = numbers.filter(isPrime);
console.log(result);

// export default isPrime;
