import { removePandasFromCollection, NFT } from "./removePandasFromCollection";

describe("removePandasFromCollection function", () => {
  test('removes NFTs with "Panda" in their name', () => {
    const myCollection: NFT[] = [
      { name: "Panda NFT", imageURL: "url1" },
      { name: "NFT2", imageURL: "url2" },
      { name: "Panda NFT 2", imageURL: "url3" },
    ];
    const expectedCollection: NFT[] = [{ name: "NFT2", imageURL: "url2" }];
    expect(removePandasFromCollection(myCollection)).toEqual(
      expectedCollection
    );
  });

  test('returns the same array if no NFTs with "Panda" in their name is present', () => {
    const myCollection: NFT[] = [
      { name: "NFT1", imageURL: "url1" },
      { name: "NFT2", imageURL: "url2" },
    ];
    expect(removePandasFromCollection(myCollection)).toEqual(myCollection);
  });
});
