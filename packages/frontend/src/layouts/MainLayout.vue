<template>
  <q-layout view="hHh lpR fFf">

    <Header />

    <q-drawer show-if-above v-model="layoutStore.leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <template id="LeftDrawer"></template>
    </q-drawer>

    <q-drawer show-if-above v-model="layoutStore.rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <template id="RightDrawer"></template>
    </q-drawer>

    <q-page-container>
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <span>Loading...</span>
        </template>
      </Suspense>
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import Header from '../combinations/Header.vue';
import { useLayoutStore } from 'stores/layout';
const layoutStore = useLayoutStore();
</script>
