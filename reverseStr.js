// Riverse the given string.


const reversedStr = (str) => {
  let revStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
    // if (i > 0) revStr = revStr + ",";
  }
  return revStr;
};
let str = "sami";
let ans = reversedStr(str);
// let result=str.split("").reverse().join(",")
console.log(ans);
