<template>
  <q-header class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <!-- <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        Title
      </q-toolbar-title> -->
      <q-toolbar-title class="cursor-pointer" @click="() => router.push('/')"> NFT Market</q-toolbar-title>

      <q-btn flat dense no-wrap color="white" icon="storefront" no-caps label="Category" class="q-mx-sm q-px-md" />
      <q-input style="width:350px;" outlined dense v-model="search" bg-color="white" color="bg-grey-7 shadow-1" placeholder="Search for topics, locations & sources">
        <template v-slot:prepend>
          <q-icon v-if="search === ''" name="search" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
        </template>
        <!-- <template v-slot:append>
          <q-btn flat dense round aria-label="Menu" icon="arrow_drop_down">
            <q-menu anchor="bottom end" self="top end">
              <div class="q-pa-md" style="width: 400px">
                <div class="text-body2 text-grey q-mb-md">
                  Narrow your search results
                </div>

                <div class="row items-center">
                  <div class="col-3 text-subtitle2 text-grey">
                    Exact phrase
                  </div>
                  <div class="col-9 q-pl-md">
                    <q-input dense v-model="exactPhrase" />
                  </div>

                  <div class="col-3 text-subtitle2 text-grey">
                    Has words
                  </div>
                  <div class="col-9 q-pl-md">
                    <q-input dense v-model="hasWords" />
                  </div>

                  <div class="col-3 text-subtitle2 text-grey">
                    Exclude words
                  </div>
                  <div class="col-9 q-pl-md">
                    <q-input dense v-model="excludeWords" />
                  </div>

                  <div class="col-3 text-subtitle2 text-grey">
                    Website
                  </div>
                  <div class="col-9 q-pl-md">
                    <q-input dense v-model="byWebsite" />
                  </div>

                  <div class="col-12 q-pt-lg row justify-end">
                    <q-btn flat dense no-caps color="grey-7" size="md" style="min-width: 68px;" label="Search" v-close-popup />
                    <q-btn flat dense no-caps color="grey-7" size="md" style="min-width: 68px;" @click="onClear" label="Clear" v-close-popup />
                  </div>
                </div>
              </div>
            </q-menu>
          </q-btn>
        </template> -->
      </q-input>

      <q-btn flat dense no-wrap color="white" no-caps label="My NFT" class="q-ml-sm q-px-md" />
      <q-btn flat dense no-wrap color="white" no-caps label="My Selling" class="q-ml-sm q-px-md" />
      <q-btn flat dense no-wrap color="white" no-caps label="My Create" class="q-ml-sm q-px-md" />

      <q-space />
      <q-btn v-if="true" flat dense no-wrap color="white" no-caps icon="login" label="Login / Register" class="q-ml-sm q-px-md" />
      <q-btn v-if="false" flat dense no-wrap color="white" icon="account_circle" no-caps label="jason@" class="q-ml-sm q-px-md">
        <q-menu anchor="top end" self="top end">
          <q-list class="text-grey-8" style="min-width: 100px">
            <q-item aria-hidden="true">
              <q-item-section class="text-uppercase text-grey-7" style="font-size: 0.7rem">Member</q-item-section>
            </q-item>
            <q-item v-for="menu in createMenu" :key="menu.text" clickable v-close-popup aria-hidden="true">
              <q-item-section avatar>
                <q-icon :name="menu.icon" />
              </q-item-section>
              <q-item-section>{{ menu.text }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn dense flat round icon="shopping_cart" @click="toggleRightDrawer" />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useLayoutStore } from 'stores/layout';
const router = useRouter();
const layoutStore = useLayoutStore();
function toggleLeftDrawer() {
  layoutStore.setLeftDrawer(!layoutStore.leftDrawerOpen);
}
function toggleRightDrawer() {
  layoutStore.setRightDrawer(!layoutStore.rightDrawerOpen);
}
const search = ref('');
// const [exactPhrase,hasWords,excludeWords,byWebsite]
const createMenu = [
  { icon: 'savings', text: 'Wallet' },
  { icon: 'contact_phone', text: 'Setting' },
  { icon: 'receipt', text: 'History' },
  { icon: 'logout', text: 'Logout' }
];
</script>

<!-- <style lang="scss">
.searchBar {
  .__toolbar-input {
    width: 55%
  }
}
</style> -->
<!-- <style lang="sass">
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style> -->
