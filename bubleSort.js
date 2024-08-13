// Given an array of integer, sort in accending order and find largest number.

const largestNum = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
let array = [9, 15, 6, 4, 77, 21, 3, 37, 56, 29];
let result = largestNum(array);
console.log(result);
console.log(result[array.length - 1]);
