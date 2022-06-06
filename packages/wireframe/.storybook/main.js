// const { mergeConfig } = require('vite');
// const vue = require('@vitejs/plugin-vue').default;
// const { quasar, transformAssetUrls } = require('@quasar/vite-plugin');
// const vue = require('@vitejs/plugin-vue').default;
// import vue from '@vitejs/plugin-vue'
// const { quasar, transformAssetUrls } = require('@quasar/vite-plugin');
// import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-notes/register-panel'
    // '@storybook/addon-notes/register'
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    interactionsDebugger: true,
    storyStoreV7: true
  },
  // async viteFinal(config, { configType }) {
  //   // return the customized config
  //   console.log(config.plugins);
  //   return mergeConfig(config, {
  //     // customize the Vite config here
  //     // resolve: {
  //     //   alias: { foo: 'bar' },
  //     // },
  //     plugins: [
  //       vue({
  //         template: {
  //           transformAssetUrls
  //         },
  //         script: {
  //           refSugar: true,
  //           refTransform: true
  //         }
  //       })
  //     ],
  //   });
  // },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    // reactDocgen: 'react-docgen',
    reactDocgenTypescriptOptions: {
      check: false,
      checkOptions: {},
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  }
}