const mergeArr = require("./mergeArr");
test("merging of 2 array", () => {
  let arr1 = [1, 3, 5];
  let arr2 = [2, 4, 6];
  expect(mergeArr(arr1, arr2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
