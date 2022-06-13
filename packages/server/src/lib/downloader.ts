import * as stream from 'stream';
import { promisify } from 'util';
import axios from 'axios';
import { createWriteStream } from 'fs';
import https from 'https';

const finished = promisify(stream.finished);
export async function httpGet(httpUrl: string, outputLocationPath: string): Promise<void> {
    const writer = createWriteStream(outputLocationPath);
    return axios({
        method: 'get',
        url: httpUrl,
        responseType: 'stream',
        headers: { 'Cache-Control': 'no-cache' },
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    }).then(response => {
        response.data.pipe(writer);
        return finished(writer); //this is a Promise
    }).catch(err => console.error(err));
};

// https://ipfs.moralis.io:2053/
// https://gateway.moralisipfs.com/
// https://gateway.pinata.cloud/
// https://ipfs.infura-ipfs.io
export async function ipfsGet(ipfsUrl: string, outputLocationPath: string): Promise<void> {
    let file = ipfsUrl.split('://').join('/');
    console.log(file)
    return httpGet('https://ipfs.infura-ipfs.io/' + file, outputLocationPath);
};
