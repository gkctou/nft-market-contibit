// file vue.d.ts
import Vue from 'vue';
import { QVueGlobals } from 'quasar';


/* eslint-disable */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module 'vue/types/vue' {
  interface Vue {
    $q: QVueGlobals
  }
}
