import divide from "./divide";

it("divides x/y and returns the result", function () {
  const x: number = 6;
  const y: number = 3;
  expect(divide(x, y)).toBe(2);
});
