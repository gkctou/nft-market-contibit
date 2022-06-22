// curl -X 'GET' \
//   'https://deep-index.moralis.io/api/v2/0x75e3e9c92162e62000425c98769965a76c2e387a/nft/0x2953399124F0cBB46d2CbACD8A89cF0599974963?chain=polygon&format=decimal' \
//   -H 'accept: application/json' \
//   -H 'X-API-Key: My-API-KEY'

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
const contract = '0x1745ebc6f71eefd36c7aac6e648071b7ffbdb298'; // AngryPenguins
const name = 'AngryPenguins';

// const contract = '0x692fB8f12F60d40bcA40Bd7e173C3C0Fc5CCc20B'; // SGC
// const name = 'SGC';

const chain = 'rinkeby';
(async () => {
    let lastCursor = null;
    let results: any[] = [];
    let countPage = 1;
    do {
        try {
            let { data: { result, cursor, total, page_size } } = await req({
                method: 'get',
                url: `nft/${contract}`,
                params: {
                    chain,
                    format: 'decimal',
                    cursor: lastCursor
                }
            });
            lastCursor = cursor;
            results = results.concat(result.map(v => {
                try {
                    v.metadata = JSON.parse(v.metadata);
                } catch (error) {
                    console.log(`parse metadata error! ${v.token_id}`);
                }
                return v;
            }));
            console.log(countPage++);
        } catch (error) {
            console.error(error);
            break;
        }
    } while (lastCursor);
    console.log(results, results.length);
    fs.writeFileSync(path.resolve(__dirname, `../../../frontend/src/mockup/nfts-${name}-${chain}-${contract}.json`), JSON.stringify(results, null, 4), 'utf8');
    console.log('done');
})();
