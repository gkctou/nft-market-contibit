import shapper from '../middleware/shapper';
import path from 'path';
const middle = shapper({
    srcPath: path.resolve(__dirname, './tmp/src'),
    cachPath: path.resolve(__dirname, './tmp/cache')
});
(async () => {
    for (const s of [
        'ipfs://bafybeihs3mjd3eyniy2v42alhuvh7f5aw3ngq3cgg5jhk7nzx5rhgxqtd4/images/Placeholder.gif',
        "ipfs://QmTAx4ffvMXBc42QpsA6CkWNTFNzi3T4tW95G8B9yYL8yC/130.gif",
        'https://nft.angryangler.io/images/621921899694c29099659ff63d4ee38f.png'
    ]) {
        try {
            await middle({
                params: {
                    s,
                    m: 'cover',
                    f: 'png',
                    w: 400,
                    h: 400
                },
            } as any, {
                status: (code) => console.log(`status:`, code),
                sendFile: (file) => console.log(`sendFile:`, file)
            } as any, (info) => console.log('next by:', info));
        } catch (error) {
            console.error(error);
        }
    }
})();

