// Find the factorial of given number.

function factorial(num) {
  if (num < 0) return "Factorial is not defined for negative numbers";
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}
let num = 5;
let result = factorial(num);
console.log(result);

// export default factorial;