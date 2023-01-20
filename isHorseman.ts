function isHorseman(word: string): true {
  if (word !== "Horseman") {
    throw new Error(`Expected 'Horseman' but got '${word}'`);
  }
  return true;
}

export default isHorseman;
