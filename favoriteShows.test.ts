import { User, isFavorite } from "./favoriteShows";

describe("isFavorite function", () => {
  const user: User = { favoriteShows: ["show1", "show2", "show3"] };

  test("returns true for a show that is in the user's favorite shows", () => {
    expect(isFavorite(user, "show1")).toBe(true);
  });

  test("returns false for a show that is not in the user's favorite shows", () => {
    expect(isFavorite(user, "show4")).toBe(false);
  });

  test("throws an error if the user has more than 10 favorite shows", () => {
    const userWithTooManyFavorites: User = {
      favoriteShows: new Array(11).fill("show"),
    };
    expect(() => isFavorite(userWithTooManyFavorites, "show1")).toThrow(
      "Too many favorite shows, I'm not checking, fml."
    );
  });

  test("throws an error if the user has 2 or less favorite shows", () => {
    const userWithTooFewFavorites: User = { favoriteShows: ["show1", "show2"] };
    expect(() => isFavorite(userWithTooFewFavorites, "show1")).toThrow(
      "Not worth my time to check."
    );
  });
});
