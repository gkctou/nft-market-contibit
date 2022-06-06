import { Quasar } from 'quasar';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
// Import Quasar css
import 'quasar/src/css/index.sass';
import { app } from '@storybook/vue3'

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const decorators = [(story) => ({
//   components: { story },
//   template: `
//       <div style="background: linear-gradient(#333 , #EEE);height: calc(100vh - 32px);display: flex;align-items: center;justify-content: center;">
//         <div style="padding:1em;background-color:white;"><story /></div>
//       </div>
// `
// })];
