import path from 'path';
import fs from 'fs';
import ObjHash from 'node-object-hash';
const hasher = ObjHash({coerce: {set: true, symbol: true}});
const cachPath = path.resolve(__dirname, '../tmp/cache/');
const storagePath = path.resolve(__dirname, '../tmp/storage/');
if (!fs.existsSync(path.resolve(__dirname, '../tmp/')))
    fs.mkdirSync(path.resolve(__dirname, '../tmp/'));
if (!fs.existsSync(cachPath))
    fs.mkdirSync(cachPath);
if (!fs.existsSync(storagePath))
    fs.mkdirSync(storagePath);
