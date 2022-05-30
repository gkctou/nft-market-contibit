// googleSheet.js
import { GoogleSpreadsheet } from 'google-spreadsheet';
import path from 'path';

// const = require('google-spreadsheet');
/*
 * @param  {String} docID the document ID
 * @param  {String} sheetID the google sheet table ID
 * @param  {String} credentialsPath the credentials path defalt is './credentials.json'
 */
export async function getData(docID, sheetID, credentialsPath = path.resolve(__dirname, '../../gkctou-cb15dece4ad3.json')) {
    const result = [];
    const doc = new GoogleSpreadsheet(docID);
    const creds = require(credentialsPath);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById[sheetID];
    const rows = await sheet.getRows();
    for (let row of rows) {
        result.push(row._rawData);
    }
    return result;
};
