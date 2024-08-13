import batchArray from "./batchArray";
test("Batch Array", () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let batchSize = 3;
  expect(batchArray(arr, batchSize)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});
