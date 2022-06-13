import apes from '../../../frontend/src/mockup/categorySearch_ape.json';
import angries from '../../../frontend/src/mockup/categorySearch_angry.json';
import fs from 'fs';
import path from 'path';
let map = new Map([...apes.map(v => [v.token_address, v]), ...angries.map(v => [v.token_address, v])] as any);
console.log(apes.length, angries.length, apes.length + angries.length, map.size);
let items: any[] = Array.from(map.values());
let categories: {
    id: string;
    title: string;
    sort: number;
    list: {
        chain: string;
        token_address: string;
        createdAt_time: number;
        metadata_name: string;
        contract_type: string;
        metadata_image: string;
    }[]
}[] = [];
let titles = [
    'Explore the latest collections',
    'Top 7 day selling collections',
    'Other blockchain collections',
    'Hot collections',
    'Poor collections',
    'Boring collections',
    'Best choice collections'
];
for (const [i, v] of titles.entries()) {
    categories.push({
        id: `${i + 1}`,
        title: v,
        sort: i,
        list: []
    });
}
let index = 0;
for (const item of items.filter(v => typeof v.metadata.image === 'string' && (v.metadata.image.startsWith('ipfs') || v.metadata.image.startsWith('http')))) {
    index = index >= titles.length ? 0 : index;
    categories[index++].list.push({
        chain: 'rinkeby',
        token_address: item.token_address,
        createdAt_time: item.createdAt_time,
        metadata_name: item.metadata_name,
        metadata_description: item.metadata_description,
        contract_type: item.contract_type,
        metadata_image: item.metadata.image
    } as any);
}
fs.writeFileSync(path.resolve(__dirname, '../../../frontend/src/mockup/categories.json'), JSON.stringify(categories), 'utf8');
console.log('done');
