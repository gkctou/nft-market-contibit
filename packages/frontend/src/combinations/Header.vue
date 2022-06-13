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

      <q-btn to="/categories" flat dense no-wrap color="white" icon="storefront" no-caps label="Category" class="q-mx-sm q-px-md" />
      <q-input :class="{ wLogin: memberStore.isLogin, wLogout: !memberStore.isLogin }" outlined dense v-model="search" bg-color="white" color="bg-grey-7 shadow-1" placeholder="Search for NFT collection.">
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

      <q-btn v-if="memberStore.isLogin" flat dense no-wrap color="white" no-caps label="My NFT" class="q-ml-sm q-px-md" />
      <q-btn v-if="memberStore.isLogin" flat dense no-wrap color="white" no-caps label="My Selling" class="q-ml-sm q-px-md" />
      <q-btn v-if="memberStore.isLogin" flat dense no-wrap color="white" no-caps label="My Create" class="q-ml-sm q-px-md" />

      <q-space />
      <q-btn v-if="!memberStore.isLogin" to="/login" flat dense no-wrap color="white" no-caps icon="login" label="Login / Register" class="q-ml-sm q-px-md" />
      <q-btn v-if="memberStore.isLogin" flat dense no-wrap color="white" icon="account_circle" no-caps :label="memberStore.userId" class="q-ml-sm q-px-md">
        <q-menu anchor="top end" self="bottom end">
          <q-list class="text-grey-8" style="min-width: 100px">
            <!-- <q-item aria-hidden="true">
              <q-item-section class="text-uppercase text-grey-7" style="font-size: 0.7rem">Member</q-item-section>
            </q-item> -->
            <q-item v-for="menu in createMenu" :key="menu.text" clickable v-close-popup aria-hidden="true" @click="menuClick(menu.text)">
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
import { $ref } from 'vue/macros';
import { useRouter, useRoute } from 'vue-router';
import { useLayoutStore } from 'stores/layout';
import { useMemberStore } from 'stores/member';

const router = useRouter();
const layoutStore = useLayoutStore();
const memberStore = useMemberStore();

function toggleLeftDrawer() {
  layoutStore.setLeftDrawer(!layoutStore.leftDrawerOpen);
}
function toggleRightDrawer() {
  layoutStore.setRightDrawer(!layoutStore.rightDrawerOpen);
}
const search = $ref('');
// const searchWidth = $computed(() => memberStore.isLogin ? '25%;' : '40%');

const createMenu = [
  { icon: 'savings', text: 'Wallet' },
  { icon: 'contact_phone', text: 'Setting' },
  { icon: 'receipt', text: 'History' },
  { icon: 'logout', text: 'Logout' }
];
async function menuClick(text) {
  if (text === 'Logout') {
    await memberStore.logout();
    router.push('/');
  } else {
    console.log(`member menu click: not implements ${text} page!`);
  }
}
</script>

<style lang="scss" scoped>
.wLogin {
  width: 25%;
}

.wLogout {
  width: 40%;
}
</style>
