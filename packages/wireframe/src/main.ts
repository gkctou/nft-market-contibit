import { createApp } from 'vue';
import { Quasar } from 'quasar';
import router from './router';
// import { createPinia } from 'pinia';
import { createStore } from './stores';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
// Import Quasar css
import 'quasar/src/css/index.sass';
import App from './App.vue';

const app = createApp(App);
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
});
app.use(createStore());
app.use(router());
app.mount('#app');
