import isHorseman from "./isHorseman";

describe("isHorseman function", () => {
  test('returns true for input "Horseman"', () => {
    expect(isHorseman("Horseman")).toBe(true);
  });

  test('throws an error for input other than "horseman"', () => {
    expect(() => isHorseman("horseman")).toThrow(
      `Expected 'Horseman' but got 'horseman'`
    );
    expect(() => isHorseman("Horse")).toThrow(
      `Expected 'Horseman' but got 'Horse'`
    );
    expect(() => isHorseman("Man")).toThrow(
      `Expected 'Horseman' but got 'Man'`
    );
  });
});
