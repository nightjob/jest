import truncateString from "./truncateString";

describe("truncateString function", () => {
  test('truncates the string to the given maxLength and adds "..."', () => {
    expect(truncateString("This is a very long text", 10)).toBe(
      "This is a ..."
    );
  });

  test("returns the same string if it is shorter than the maxLength", () => {
    expect(truncateString("This is a short text", 20)).toBe(
      "This is a short text"
    );
  });
});
