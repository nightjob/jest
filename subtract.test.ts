import subtract from "./subtract";

it("subtracts 2 numbers and returns the result", function () {
  const x: number = 4;
  const y: number = 2;
  expect(subtract(x, y)).toBe(2);
});
