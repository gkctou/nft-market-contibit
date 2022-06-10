//moralis Web3 API Key: bahK55RkK2br4ldaUNtlwJjazG535RlHG31qWRtBbRKa60mEA8rUXl9Iwbzb6fMv
// curl -X GET "https://deep-index.moralis.io/api/v2/nft/search?chain=rinkeby&format=decimal&q=angry&filter=name" -H "accept: application/json" -H "X-API-Key: bahK55RkK2br4ldaUNtlwJjazG535RlHG31qWRtBbRKa60mEA8rUXl9Iwbzb6fMv" -o ../categorySearch.json
// import axios from 'axios';
const axios = require('axios').default;
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
  do {
    try {
      let { data: { result, cursor, total, page_size } } = await req({
        method: 'get',
        url: 'nft/search',
        params: {
          chain: 'rinkeby',
          format: 'decimal',
          q: 'angry',
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
        resultMap.set(v.token_address, v)
      }
      console.log(countPage++);
    } catch (error) {
      console.error(error);
      break;
    }
  } while (lastCursor);
  console.log(resultMap, resultMap.size);
})();

// export { };
