import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
// import mdx from 'vite-plugin-mdx';
import nodePolyfills from 'rollup-plugin-polyfill-node';
const production = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    // ↓ Needed for development mode
    !production && nodePolyfills({
      include: ['node_modules/**/*.js', new RegExp('node_modules/.vite/.*js')]
    }),
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
    // mdx({
    //   // `options` are passed to `@mdx-js/mdx`
    //   // See https://mdxjs.com/advanced/plugins
    //   remarkPlugins: [
    //     // E.g. `remark-frontmatter`
    //   ],
    //   rehypePlugins: [],
    // })
  ],
  build: {
    rollupOptions: {
      plugins: [
        // ↓ Needed for build
        nodePolyfills()
      ]
    },
    // ↓ Needed for build if using WalletConnect and other providers
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
