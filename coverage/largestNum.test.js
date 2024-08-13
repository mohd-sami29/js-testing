const largestNum = require("./largestNum");
test("largest number", () => {
  expect(largestNum([3, 1, 5, 51, 2, 4, 9])).toBe(51);
});
