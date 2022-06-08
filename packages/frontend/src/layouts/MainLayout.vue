<template>
  <q-layout view="hHh lpR fFf">

    <Header />

    <q-drawer id="LeftDrawer" v-model="layoutStore.leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer id="RightDrawer" v-model="layoutStore.rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-page class="full-width row justify-center">
        <div :style="{ width: '100%', maxWidth: layoutStore.leftDrawerOpen || layoutStore.rightDrawerOpen ? undefined : '1080px' }">
          <Suspense>
            <template #default>
              <router-view />
            </template>
            <template #fallback>
              <span>Loading...</span>
            </template>
          </Suspense>
        </div>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import Header from '../combinations/Header.vue';
// import { computed } from 'vue';
import { useLayoutStore } from 'stores/layout';
const layoutStore = useLayoutStore();
// let maxWidth = computed(() => layoutStore.leftDrawerOpen || layoutStore.rightDrawerOpen ? undefined : '1080px');
</script>
