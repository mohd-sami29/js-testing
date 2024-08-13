// Given an array of integer, make subarray and combined element equally as per given batch size. return array with subarrays.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let batchSize = 5;
const batchArray = (arr, batchSize) => {
  let n = arr.length;
  let result = [];
  let batch = [];
  for (let i = 0; i < n; i++) {
    batch.push(arr[i]);
    if ((i + 1) % batchSize === 0 || i === n - 1) {
      result.push(batch);
      batch = [];
    }
  }
  console.log(result);
  return result;
};
batchArray(arr, batchSize);

export default batchArray;
