import express from 'express'
import sharp from './middleware/shapper'
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
app.use(cors())
// app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Fetch original images via HTTP
app.get(
    '/meta-image.png',
    sharp({
        srcPath: path.resolve(__dirname, '../tmp/images/src'),
        cachPath: path.resolve(__dirname, '../tmp/images/cache')
    })
);

const port = 4567;
app.listen(port, () => {
    console.log(`express listen at prot: ${port}`);
});
