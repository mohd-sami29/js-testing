const mergeArr = (arr1, arr2) => {
  let m = arr1.length;
  let n = arr2.length;
  let result = [];
  if (m >= n) {
    for (let i = 0; i < m; i++) {
      console.log("operations");
      if (i < m) {
        result.push(arr1[i]);
      }
      if (i < n) {
        result.push(arr2[i]);
      }
    }
  } else {
    for (let i = 0; i < n; i++) {
      console.log("Operations");
      if (i < m) {
        result.push(arr1[i]);
      }
      if (i < n) {
        result.push(arr2[i]);
      }
    }
  }
  return result;
};
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8];
let mergedResult = mergeArr(arr1, arr2);
console.log(mergedResult);

module.exports = mergeArr;
