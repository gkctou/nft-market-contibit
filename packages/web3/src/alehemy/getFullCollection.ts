import axios from 'axios';
import path from 'path';
import fs from 'fs';

// replace with your Alchemy api key
const apiKey = "hGDB9QCdmR3OWlysIhIyHqWkyDkUsSrZ";
const baseURL = `https://eth-goerli.alchemyapi.io/nft/v2/${apiKey}/getNFTsForCollection`;
// const contractAddr = "0xcf26d81bcbafec9bcc5bab1c484f1b32e4000b67";
// const contractAddr = "0x61fce80d72363b731425c3a2a46a1a5fed9814b2";
const contractAddr = '0x1745ebc6f71eefd36c7aac6e648071b7ffbdb298'; // angrypenguins
// const contractAddr = '0x692fB8f12F60d40bcA40Bd7e173C3C0Fc5CCc20B'; // SGC

async function callGetNFTsForCollectionOnce(startToken = "") {
    const url = `${baseURL}/?withMetadata=true&contractAddress=${contractAddr}&startToken=${startToken}`;
    const response = await axios.get(url);
    return response.data;
}
(async () => {
    let startToken = "";
    let hasNextPage = true;
    let totalNftsFound = 0;
    let result: any[] = [];
    while (hasNextPage) {
        try {
            const { nfts, nextToken } = await callGetNFTsForCollectionOnce(startToken);
            if (!nextToken) {
                // When nextToken is not present, then there are no more NFTs to fetch.
                hasNextPage = false;
            }
            startToken = nextToken;
            totalNftsFound += nfts.length;
            result = result.concat(nfts);
            console.log(nfts.length);
        } catch (error) {
            console.log(error);
        }
    }
    fs.writeFileSync(path.resolve(__dirname, `../../../frontend/src/mockup/nftCollection-${contractAddr}.alchemy.json`), JSON.stringify(result, null, 4), 'utf8');
})();
