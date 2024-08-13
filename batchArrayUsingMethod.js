// Given an array of integer, make subarray and combined element equally as per given batch size. return array with subarrays.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let batchSize = 3;
const batchArrayUsingMethod = (arr, batchSize) => {
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i = i + batchSize) {
    result.push(arr.slice(i, batchSize + i));
  }
  console.log(result);
  return result;
};
batchArrayUsingMethod(arr, batchSize);

export default batchArrayUsingMethod;
