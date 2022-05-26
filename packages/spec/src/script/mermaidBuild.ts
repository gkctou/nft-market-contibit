// https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1kctOwkAUhl-FzFpeoCYmJvAE6q6bhg5CQgup7cIQEjRBgQLtQsqtsQSRi0gQQ7yA8jScmfYtnAYwMcLu5Pzff65pFEmKGHHoXBFSscBp6JCXwdbpXYdaI1evBYNHq3mJ2I7bf6CtV5I3oejAyzR8dryD_CgwkoxNuqyQQYPMLVIogzFZw_vqMCNpXJNqnsyWPra_iE8OGm7PWJO_Lpb37Czknj1L97IGqVf-q97NiFZLkJu64_oOtW3SVtfrDLzm01-VbbXw28NVcz2ZO-x5w5oPbUdhDCzeYFmCchE-Z9QZ0685tNrktuDvs8vuW4yJ--6wC0LXgm4f7nW39giLNpj51be96YIOkIQVSYiL7EVpXg4EeKTGsIR5xLFQxFFBS6g84uUMQ7WUKKg4LMbVpIK4qJC4wAdI0NTkyaUcQZyqaHgLheIC-7i0oTI_eBgjqw
// https://mermaid.ink/
// [![](https://mermaid.ink/svg/pako:eNp1kctOwkAUhl-FzFpeoCYmJvAE6q6bhg5CQgup7cIQEjRBgQLtQsqtsQSRi0gQQ7yA8jScmfYtnAYwMcLu5Pzff65pFEmKGHHoXBFSscBp6JCXwdbpXYdaI1evBYNHq3mJ2I7bf6CtV5I3oejAyzR8dryD_CgwkoxNuqyQQYPMLVIogzFZw_vqMCNpXJNqnsyWPra_iE8OGm7PWJO_Lpb37Czknj1L97IGqVf-q97NiFZLkJu64_oOtW3SVtfrDLzm01-VbbXw28NVcz2ZO-x5w5oPbUdhDCzeYFmCchE-Z9QZ0685tNrktuDvs8vuW4yJ--6wC0LXgm4f7nW39giLNpj51be96YIOkIQVSYiL7EVpXg4EeKTGsIR5xLFQxFFBS6g84uUMQ7WUKKg4LMbVpIK4qJC4wAdI0NTkyaUcQZyqaHgLheIC-7i0oTI_eBgjqw?bgColor=!white)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1kctOwkAUhl-FzFpeoCYmJvAE6q6bhg5CQgup7cIQEjRBgQLtQsqtsQSRi0gQQ7yA8jScmfYtnAYwMcLu5Pzff65pFEmKGHHoXBFSscBp6JCXwdbpXYdaI1evBYNHq3mJ2I7bf6CtV5I3oejAyzR8dryD_CgwkoxNuqyQQYPMLVIogzFZw_vqMCNpXJNqnsyWPra_iE8OGm7PWJO_Lpb37Czknj1L97IGqVf-q97NiFZLkJu64_oOtW3SVtfrDLzm01-VbbXw28NVcz2ZO-x5w5oPbUdhDCzeYFmCchE-Z9QZ0685tNrktuDvs8vuW4yJ--6wC0LXgm4f7nW39giLNpj51be96YIOkIQVSYiL7EVpXg4EeKTGsIR5xLFQxFFBS6g84uUMQ7WUKKg4LMbVpIK4qJC4wAdI0NTkyaUcQZyqaHgLheIC-7i0oTI_eBgjqw)
// https://github.com/superj80820/mermaid-js-converter/blob/master/converter.js

const Base64 = require("js-base64");

function mdToSVG(data) {
  const matchData = data.match(/```mermaid(.|\n)*?```/gm);

  const jsonStrings = matchData
    .map((item) => item.replace("```mermaid", "").replace("```", ""))
    // Workaround for classdiagram
    .map((item) =>
      item.startsWith("\nclass") ||
      item.startsWith("\ngantt") ||
      item.startsWith("\nerDiagram") ||
      item.startsWith("\njourney")
        ? item.substr(1, item.length - 1)
        : item
    )
    .map((item) =>
      JSON.stringify({
        code: item,
        mermaid: {
          theme: "default",
        },
      })
    )
    .map((item) => {
      const jsonString = Base64.encodeURI(item);
      return `[![](https://mermaid.ink/img/${jsonString})](https://mermaid-js.github.io/mermaid-live-editor/#/edit/${jsonString})`;
    });

  let changeMd = data;
  matchData.forEach((item, index) => {
    changeMd = changeMd.replace(item, jsonStrings[index]);
  });

  return changeMd;
}

function SVGToMd(data) {
  const matchData = data.match(
    /\[\!\[\]\(https:\/\/mermaid\.ink\/img\/(.|\n)*?\)\n/gm
  );

  const encodedURIs = matchData.map((item) => {
    item = item.replace("[![](https://mermaid.ink/img/", "");
    return item.substr(
      0,
      item.indexOf(")](https://mermaid-js.github.io/mermaid-live-editor/#/")
    );
  });

  let originMd = data;

  matchData.forEach((item, index) => {
    // Workaround for classdiagram about assignment let
    let { code } = JSON.parse(Base64.decode(encodedURIs[index]));
    // Workaround for classdiagram
    if (
      code.startsWith("class") ||
      code.startsWith("gantt") ||
      code.startsWith("erDiagram") ||
      code.startsWith("journey")
    )
      code = `\n${code}`;
    originMd = originMd.replace(item, "```mermaid" + code + "```\n");
  });

  return originMd;
}

module.exports = {
  mdToSVG,
  SVGToMd,
};
