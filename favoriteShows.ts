interface User {
  favoriteShows: string[];
}

function isFavorite(user: User, show: string): boolean {
  if (user.favoriteShows.length > 10) {
    throw new Error("Too many favorite shows, I'm not checking, fml.");
  } else if (user.favoriteShows.length <= 2) {
    throw new Error("Not worth my time to check.");
  } else {
    return user.favoriteShows.includes(show);
  }
}

export { User, isFavorite };
