interface NFT {
  name: string;
  imageURL: string;
}

function collectionHasNft(collection: NFT[], nft: NFT): boolean {
  return collection.some(
    (c) => c.name === nft.name && c.imageURL === nft.imageURL
  );
}

export { collectionHasNft, NFT };
