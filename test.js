// Riverse the given array.

let array = [1, 2, 3, 4, 5];
const revAr = (array) => {
  let len = array.length - 1;
  let temp = 0;
  for (let i = 0; i < len; i++) {
    temp = array[i];
    array[i] = array[len];
    array[len] = temp;
    len--;
  }
  console.log(array);
  return array;
};
revAr(array);
