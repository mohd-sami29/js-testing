// Find number of duplicates, in given array.

let arr = [1, 2, 3, 2, 3, 2, 4, 5, 4, 3];
const findDuplicateMap = (arr) => {
  let myMap = new Map();
  let freq = 1;
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) {
      let temp = myMap.get(arr[i]);
      myMap.set(arr[i], temp + 1);
    } else {
      myMap.set(arr[i], freq);
    }
    if (myMap.get(arr[i]) === 2) {
      duplicate.push(arr[i]);
    }
  }
  console.log(myMap);
  return console.log(duplicate);
};

findDuplicateMap(arr);
