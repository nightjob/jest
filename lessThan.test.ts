import lessThan from "./lessThan";

describe("lessThan function", () => {
  test("returns false for x < y", () => {
    expect(lessThan(5, 3)).toBe(false);
  });

  test("returns true for x < y", () => {
    expect(lessThan(3, 5)).toBe(true);
  });
});
