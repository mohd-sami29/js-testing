// Check palindrom or not of given word or sentence.

const isPalindrome = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
    if (str == revStr) return `${str} is palindrome`;
  }
  return `${str} is not palindrome`;
};

let str = "racecar";
let result = isPalindrome(str);
console.log(result);
// export default isPalindrome;