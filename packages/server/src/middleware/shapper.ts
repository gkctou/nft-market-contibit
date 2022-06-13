import { Request, Response, NextFunction } from 'express';
import { ipfsGet, httpGet } from '../lib/downloader';
import objHash from 'node-object-hash';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
const hasher = objHash({ coerce: { set: true, symbol: true } });
const dummyImage = path.resolve(__dirname, '../../public/exclamation.jpeg');
const dummyHash = hasher.hash({ s: 'exclamation.png' });
export interface IOptions {
    srcPath: string;
    cachPath: string;
}
export interface IImage {
    s: string;//src
    m?: 'contain' | 'cover' | 'fill';
    f?: 'png' | 'gif' | 'webp';
    w: number;
    h?: number;
}
let opts: IOptions;
async function middle(req: Request, res: Response, next: NextFunction) {
    if (!opts)
        return next();
    let { s, m = 'cover', f = 'png', w, h } = req.query as { [key: string]: string };
    console.log(req.query);
    let width = w && +w;
    let height = h && +h || 0;
    let srcHash = hasher.hash({ s });
    const cachHash = hasher.hash({ m, f, w, h });
    let cachFile = path.resolve(opts.cachPath, `${srcHash}-${cachHash}.png`);
    let srcFile = path.resolve(opts.srcPath, `${srcHash}`);
    if (!fs.existsSync(cachFile)) {
        try {
            if (!fs.existsSync(srcFile))
                try {
                    if (s.startsWith('http'))
                        await httpGet(s, srcFile);
                    else if (s.startsWith('ipfs'))
                        await ipfsGet(s, srcFile);
                } catch (error) {
                    throw `download error: ${s}!`;
                }
            if (!fs.existsSync(srcFile))
                throw `src file not found: ${s}!`;
            await sharp(srcFile).resize({ width, height: height || undefined, fit: m } as any).toFile(cachFile);
        } catch (error) {
            console.log(error);
            cachFile = path.resolve(opts.cachPath, `${dummyHash}-${cachHash}.png`);
            if (!fs.existsSync(cachFile))
                await sharp(dummyImage).resize({ width, height: height || undefined, fit: m } as any).toFile(cachFile);
        }
    }
    return res.sendFile(cachFile);
}
export default function scaler(options: IOptions): (req: Request, res: Response, next: NextFunction) => void {
    opts = options;
    return middle;
}