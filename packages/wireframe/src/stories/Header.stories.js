import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
    notes: { 'Components MD': `## HELLO MD` }
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
});

const specMd = `
---

tags: Contibit

---

Contibit NFT Market(POC Spec.)
===

---

## 專案核心
- 提供 NFT 項目方 法幣 鑄造按鈕
    - 透過項目方吸引新用戶進入平臺
- 中心化 NFT 交易所
    - 使用中心化交易所無 gas 費用優勢留住使用者
    - 促進低價 NFT 流通
    - 支援除原生幣以外的金流購買
    - 買得到：導入大型平臺已上架物件一鍵代買
    - ~~賣得掉：支援各大型平臺一鍵代上架（未定）~~

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

![](https://hackmd.io/_uploads/rkkmpaxPq.png)<br/>![](https://hackmd.io/_uploads/SkAS6alP5.png)

`;

export const LoggedIn = Template.bind({});
LoggedIn.story = {
  parameters: {
    notes: { 'SPEC. MD': specMd },
  }
};
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};

