import { boot } from 'quasar/wrappers';
// bootstrap
// import "bootstrap"

// vue select
import vSelect from 'vue-select';
// import "vue-select/dist/vue-select.css";

// clipboard
import VueClipboard from 'vue3-clipboard';

// template custom css
// import 'assets/scss/bundles.scss'
// import 'assets/scss/style.scss'

export default boot(({ app }) => {
  app.component('v-select', vSelect)
  app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
  });
});
