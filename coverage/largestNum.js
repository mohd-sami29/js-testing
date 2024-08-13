const largestNum = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

let array = [3, 1, 5, 2, 4, 9, 101];
let result = largestNum(array);
console.log(result);

module.exports = largestNum;
