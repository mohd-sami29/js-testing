import rotateElement from "./rotateElement";
test("Rotation of elements", () => {
  let arr = [1, 2, 3];
  let n = 1;
  expect(rotateElement(arr, n)).toStrictEqual([2, 3, 1]);
});
