import { writeFile } from "fs/promises"
import { mdxToMd } from "mdx-to-md"
import path from 'path';
// https://github.com/souporserious/mdx-to-md
(async () => {
    const markdown = await mdxToMd(path.resolve(__dirname, '../markdown/gantt.mdx'));
    const banner = `This README was auto-generated using "yarn build:readme"`
    const readme = `<!--- ${banner} --> \n\n ${markdown}`

    await writeFile(path.resolve(__dirname, '../markdown/gantt.md'), readme)

    console.log("📝 Converted README.mdx -> README.md")
})();
