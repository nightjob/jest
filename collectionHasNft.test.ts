import { collectionHasNft, NFT } from "./collectionHasNft";

describe("collectionHasNft function", () => {
  test("returns true when nft is present in collection", () => {
    const myCollection: NFT[] = [
      { name: "NFT1", imageURL: "url1" },
      { name: "NFT2", imageURL: "url2" },
    ];
    const nftToCheck: NFT = { name: "NFT2", imageURL: "url2" };
    expect(collectionHasNft(myCollection, nftToCheck)).toBe(true);
  });

  test("returns false when nft is not present in collection", () => {
    const myCollection: NFT[] = [
      { name: "NFT1", imageURL: "url1" },
      { name: "NFT2", imageURL: "url2" },
    ];
    const nftToCheck: NFT = { name: "NFT3", imageURL: "url3" };
    expect(collectionHasNft(myCollection, nftToCheck)).toBe(false);
  });
});
