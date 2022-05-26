// 以base.openapi.yaml 為基底 合併 tags openapi

import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from "path";

let srcPath = path.resolve(__dirname, '../../src/openapi/');
let baseOpenapi: any = yaml.load(fs.readFileSync(path.join(srcPath, 'base.openapi.yaml'), 'utf8'));

// let schemaPath = path.resolve(__dirname, '../../src/schema/');
// let schemaFiles = (fs.readdirSync(schemaPath) || []).filter(f => f.endsWith('.schema.yaml'));
// for (const s of schemaFiles) {
//     let name = s.split('.')[0];
//     let { description, type, properties } = yaml.load(path.join(schemaPath, s)) as any;
//     baseOpenapi.components.schemas[name] = { description, type, properties, additionalProperties: false };
// }

let tagPath = path.resolve(__dirname, '../openapi/tag/');
let tagFiles = (fs.readdirSync(tagPath) || []).filter(f => f.endsWith('openapi.yaml'));
for (const tagFile of tagFiles) {
    let tagApi: any = yaml.load(fs.readFileSync(path.join(tagPath, tagFile), 'utf8'));
    if (!tagApi || !tagApi.paths)
        continue;
    for (const pat of Object.keys(tagApi.paths)) {
        let pa = tagApi.paths[pat];
        baseOpenapi.paths[pat] = baseOpenapi.paths[pat] || {};
        for (const act in pa) {
            let ac = pa[act];
            baseOpenapi.paths[pat][act] = ac;
            // check security
            if (typeof ac.security === 'undefined' && tagApi.security && tagApi.security.length) {
                baseOpenapi.paths[pat][act]['security'] = JSON.parse(JSON.stringify(tagApi.security));
            }
        }
    }
    if (tagApi.tags && tagApi.tags.length)
        baseOpenapi.tags = [...baseOpenapi.tags, ...tagApi.tags];
    for (const component of ['schemas', 'requestBodies', 'responses', 'securitySchemes']) {
        if (tagApi.components && tagApi.components[component] && Object.keys(tagApi.components[component]).length)
            baseOpenapi.components[component] = { ...baseOpenapi.components[component], ...tagApi.components[component] };
    }
    // if (tagApi.components && tagApi.components.requestBodies && Object.keys(tagApi.components.requestBodies).length)
    //     baseOpenapi.components.requestBodies = { ...baseOpenapi.components.requestBodies, ...tagApi.components.requestBodies };
    // if (tagApi.components && tagApi.components.responses && Object.keys(tagApi.components.responses).length)
    //     baseOpenapi.components.responses = { ...baseOpenapi.components.responses, ...tagApi.components.responses };
    // if (tagApi.components && tagApi.components.securitySchemes && Object.keys(tagApi.components.securitySchemes).length)
    //     baseOpenapi.components.securitySchemes = { ...baseOpenapi.components.securitySchemes, ...tagApi.components.securitySchemes };

}
let saveFile = path.resolve(__dirname, '../../openapi/openapi.yaml');
fs.writeFileSync(saveFile, yaml.dump(baseOpenapi), 'utf8')
console.log('done.');
