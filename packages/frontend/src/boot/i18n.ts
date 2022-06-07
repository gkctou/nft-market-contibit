import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';
type MessageSchema = typeof messages['en-US'];

export default boot(({ app }) => {
  const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'zh-TW', // set locale
    fallbackLocale: 'en-US', // set fallback locale
    messages, // set locale messages
  });

  // Set i18n instance on app
  app.use(i18n);
});
