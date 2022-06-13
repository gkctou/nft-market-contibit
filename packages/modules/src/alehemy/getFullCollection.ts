import axios from 'axios';

// replace with your Alchemy api key
const apiKey = "hGDB9QCdmR3OWlysIhIyHqWkyDkUsSrZ";
const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTsForCollection`;
// const contractAddr = "0xcf26d81bcbafec9bcc5bab1c484f1b32e4000b67";
const contractAddr = "0x61fce80d72363b731425c3a2a46a1a5fed9814b2";

async function callGetNFTsForCollectionOnce(startToken = "") {
    const url = `${baseURL}/?withMetadata=true&contractAddress=${contractAddr}&startToken=${startToken}`;
    const response = await axios.get(url);
    return response.data;
}
(async () => {
    let startToken = "";
    let hasNextPage = true;
    let totalNftsFound = 0;
    while (hasNextPage) {
        try {
            const { nfts, nextToken } = await callGetNFTsForCollectionOnce(startToken);
            if (!nextToken) {
                // When nextToken is not present, then there are no more NFTs to fetch.
                hasNextPage = false;
            }
            startToken = nextToken;
            totalNftsFound += nfts.length;
            console.log(nfts.length);
        } catch (error) {
            console.log(error);
        }
    }
})();
