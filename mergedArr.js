// Given two array of integers, merge both array in single array.

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8];
const mergedArr = (arr1, arr2) => {
  let len = arr1.length + arr2.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    if (i < arr1.length) {
      result.push(arr1[i]);
    }
    if (i < arr2.length) {
      result.push(arr2[i]);
    }
  }
  console.log(result);
  return result;
};
mergedArr(arr1, arr2);
