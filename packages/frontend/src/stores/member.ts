import { defineStore } from 'pinia';

export const useMemberStore = defineStore('counter', {
  state: () => ({
    userId: '',
    isLogined: false
  }),

  // getters: {
  //   doubleCount (state) {
  //     return state.counter * 2;
  //   }
  // },

  actions: {
    increment() {
      // this.counter++;
    }
  }
});
