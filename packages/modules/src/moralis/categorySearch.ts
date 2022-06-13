//moralis Web3 API Key: bahK55RkK2br4ldaUNtlwJjazG535RlHG31qWRtBbRKa60mEA8rUXl9Iwbzb6fMv
// curl -X GET "https://deep-index.moralis.io/api/v2/nft/search?chain=rinkeby&format=decimal&q=angry&filter=name" -H "accept: application/json" -H "X-API-Key: bahK55RkK2br4ldaUNtlwJjazG535RlHG31qWRtBbRKa60mEA8rUXl9Iwbzb6fMv" -o ../categorySearch.json
// https://ipfs.moralis.io:2053/ipfs/
// https://gateway.moralisipfs.com/ipfs/
// https://gateway.pinata.cloud/ipfs
// https://ipfs.infura-ipfs.io
// import axios from 'axios';
// const axios = require('axios').default;
import path from 'path';
import fs from 'fs';
import axios from 'axios';
const req = axios.create({
  baseURL: 'https://deep-index.moralis.io/api/v2/',
  headers: {
    accept: 'application/json',
    'X-API-Key': 'bahK55RkK2br4ldaUNtlwJjazG535RlHG31qWRtBbRKa60mEA8rUXl9Iwbzb6fMv'
  }
});
(async () => {
  let lastCursor = null;
  const resultMap: Map<string, any> = new Map();
  let countPage = 1;
  let q = 'Angry Penguins'.toLowerCase();
  do {
    try {
      let { data: { result, cursor, total, page_size } } = await req({
        method: 'get',
        url: 'nft/search',
        params: {
          chain: 'rinkeby',
          format: 'decimal',
          q,
          filter: 'name',
          cursor: lastCursor
        }
      });
      lastCursor = cursor
      // const sample = {
      //   total: 19409,
      //   page: 0,
      //   page_size: 500,
      //   cursor: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxIjoiYW5ncnkiLCJkZXNjcmlwdGlvbiI6ZmFsc2UsImF0dHJpYnV0ZXMiOmZhbHNlLCJuYW1lIjp0cnVlLCJnbG9iYWwiOmZhbHNlLCJsaW1pdCI6IjUwMCIsInRva2VuX2FkZHJlc3NlcyI6bnVsbCwid2hlcmUiOnt9LCJwYWdlIjoxLCJvZmZzZXQiOjAsImtleSI6ImY5NDM3YTFiZTg5NjhlN2M3MmFmMjdkZTFhNDMzNmUzIiwidG90YWwiOjE5NDA5LCJpYXQiOjE2NTQ4NTUxMDR9.fAF2lp0M4A8GruvDouYmWuGuLCiXMeZFgCqdJWGhRds',
      //   result: []
      // };
      // console.log(data);
      // contract_type: 'ERC721',
      for (const v of result.filter(v => v.contract_type === 'ERC721')) {
        // let vSample = {
        //   token_id: '25',
        //   token_address: '0x78d94450dc96112fdb7335f5397990875fa2fd2a',
        //   token_uri: 'https://ipfs.moralis.io:2053/ipfs/QmQq8eagb4sjmbFmZo2hiMCsAdzqR4gPvgwXNeM28d92ZB/25.json',
        //   metadata: '{"name":"TEST Angry #25","description":"TEST","image":"ipfs://QmWiv6Gq7yU41Rwg2TzbBUqWPtuu7WS9rrwnEC919W2W6x/25.png","dna":"9b9aa0f1403dfbfb04493305597fcc7eea3b52d0","edition":25,"date":1652953712704,"attributes":[{"trait_type":"A","value":"IMG_2519"},{"trait_type":"B","value":"IMG_2404"},{"trait_type":"C","value":"IMG_2407"},{"trait_type":"D","value":"IMG_2415"},{"trait_type":"E","value":"IMG_2427"},{"trait_type":"F","value":"IMG_2455"},{"trait_type":"G","value":"IMG_2485"}],"compiler":"HashLips Art Engine"}',
        //   is_valid: 1,
        //   syncing: 2,
        //   frozen: 0,
        //   resyncing: 0,
        //   transfer_index: null,
        //   synced_at: '2022-05-19T11:13:43.835Z',
        //   last_metadata_sync: '2022-05-19T11:13:43.835Z',
        //   last_token_uri_sync: '2022-05-19T11:13:09.561Z',
        //   contract_type: 'ERC721',
        //   token_hash: 'f95d413eddc0e86bdf99b037b951905f',
        //   batch_id: '3892a7c6-a793-4569-853d-30eee41f0736',
        //   metadata_name: 'TEST Angry #25',
        //   metadata_description: 'TEST',
        //   metadata_attributes: '[{"trait_type":"A","value":"IMG_2519"},{"trait_type":"B","value":"IMG_2404"},{"trait_type":"C","value":"IMG_2407"},{"trait_type":"D","value":"IMG_2415"},{"trait_type":"E","value":"IMG_2427"},{"trait_type":"F","value":"IMG_2455"},{"trait_type":"G","value":"IMG_2485"}]',
        //   block_number_minted: '10702749',
        //   opensea_lookup: null,
        //   minter_address: '0xb61b13acb78bc69ba2de541c8638dd1a803f9b70',
        //   transaction_minted: '0x3b37bbe20b9c074be9035acd9b1d706dbe94b326ddf7f55208482fde422e33c6',
        //   frozen_log_index: null,
        //   imported: 0,
        //   createdAt: '2022-05-19T10:43:00.835Z',
        //   updatedAt: '2022-05-19T10:43:00.835Z'
        // }
        let tokenId = parseInt(v.token_id, 10);
        if (!resultMap.has(v.token_address) && !isNaN(tokenId) && v.token_id === ('' + tokenId)) {
          v.tokenId = tokenId;
          v.synced_at && (v.synced_at_time = Date.parse(v.synced_at));
          v.last_metadata_sync && (v.last_metadata_sync_time = Date.parse(v.last_metadata_sync));
          v.last_token_uri_sync && (v.last_token_uri_sync_time = Date.parse(v.last_token_uri_sync));
          v.createdAt && (v.createdAt_time = Date.parse(v.createdAt));
          v.updatedAt && (v.updatedAt_time = Date.parse(v.updatedAt));

          v.metadata = JSON.parse(v.metadata);
          v.metadata_attributes = JSON.parse(v.metadata_attributes);
          resultMap.set(v.token_address, v)
        }
      }
      console.log(countPage++);
    } catch (error) {
      console.error(error);
      break;
    }
  } while (lastCursor);
  console.log(resultMap, resultMap.size);
  fs.writeFileSync(path.resolve(__dirname, `../../../frontend/src/mockup/categorySearch_${q}.json`), JSON.stringify(Array.from(resultMap.values())), 'utf8');
  console.log('done');
})();

// export { };
