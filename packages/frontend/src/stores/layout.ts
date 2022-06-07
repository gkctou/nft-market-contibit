import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    leftDrawerOpen: false,
    rightDrawerOpen: false
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    setLeftDrawer(isOpen: boolean) {
      this.leftDrawerOpen = isOpen;
    },
    setRightDrawer(isOpen: boolean) {
      this.rightDrawerOpen = isOpen;
    },
  },
});
