// https://github.com/quasarframework/quasar/discussions/12539

import { createPinia, Pinia } from 'pinia';

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Pinia;
    }
}

export function createStore() {
    const pinia = createPinia();
    return pinia;
};
