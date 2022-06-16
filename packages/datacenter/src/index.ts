import path from 'path';
import fs from 'fs';
import ObjHash from 'node-object-hash';
import LRU from 'lru-cache';

const hasher = ObjHash({ coerce: { set: true, symbol: true } });
const cachPath = path.resolve(__dirname, '../tmp/cache/');
const storagePath = path.resolve(__dirname, '../tmp/storage/');
if (!fs.existsSync(path.resolve(__dirname, '../tmp/')))
    fs.mkdirSync(path.resolve(__dirname, '../tmp/'));
if (!fs.existsSync(cachPath))
    fs.mkdirSync(cachPath);
if (!fs.existsSync(storagePath))
    fs.mkdirSync(storagePath);
const lruOptions = {
    max: 5000,
    // for use with tracking overall storage size
    maxSize: 5000,
    sizeCalculation: (value, key) => {
        return 1
    },
    // for use when you need to clean up something when objects
    // are evicted from the cache
    // dispose: (value, key) => {
    //     freeFromMemoryOrWhatever(value)
    // },
    // how long to live in ms
    ttl: 1000 * 60 * 60,
    // return stale items before removing from cache?
    allowStale: false,
    updateAgeOnGet: false,
    updateAgeOnHas: false,
    // async method to use for cache.fetch(), for
    // stale-while-revalidate type of behavior
    // fetch: async (key, staleValue, { options, signal }) => { }
}
const Lru = new LRU(lruOptions);
export async function cacheSet<T = any>(key: string, value: T): Promise<void> {

}
export async function cacheGet<T = any>(key: string): Promise<T> {
    return { a: 'b' };
}
export async function lruSet<T = any>(key: string, value: T): Promise<void> {

}
export async function lruGet<T = any>(key: string): Promise<T> {
    return { a: 'b' };
}
export async function storageSet<T = any>(key: string, value: T): Promise<void> {

}
export async function storageQuery<T = any>(key: string,): Promise<T> {
    return { a: 'b' };
}