// Riverse the given array.

let arr = [1, 4, 3, 4, 9, 6];
const revArr = (arr) => {
  let len = arr.length - 1;
  let temp;
  for (let i = 0; i <= len; i++) {
    temp = arr[i];
    arr[i] = arr[len];
    arr[len] = temp;
    len--;
    // result.push(arr[i]);
  }
  console.log(arr);
  return arr;
};
revArr(arr);
