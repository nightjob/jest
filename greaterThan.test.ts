import greaterThan from "./greaterThan";

describe("greaterThan function", () => {
  test("returns true for x > y", () => {
    expect(greaterThan(5, 3)).toBe(true);
  });

  test("returns false for x <= y", () => {
    expect(greaterThan(3, 3)).toBe(false);
    expect(greaterThan(3, 5)).toBe(false);
  });
});
