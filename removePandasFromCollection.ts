interface NFT {
  name: string;
  imageURL: string;
}

function removePandasFromCollection(collection: NFT[]): NFT[] {
  return collection.filter((nft) => !nft.name.includes("Panda"));
}

export { removePandasFromCollection, NFT };
