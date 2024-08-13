// Rotate the element clockwise of given array.

let arr = [1, 2, 3, 4, 5];
let n = 1;
const rotateElement = (arr, n) => {
  let m = arr.length;
  if (m < 2) {
    console.log(arr);
    return arr;
  }
  for (let i = 0; i < n; i++) {
    let temp = 0;
    temp = arr[0];
    for (let j = 1; j < m; j++) {
      arr[j - 1] = arr[j];
    }
    arr[m - 1] = temp;
  }
  console.log(arr);
  return arr;
};
rotateElement(arr, n);

export default rotateElement;
