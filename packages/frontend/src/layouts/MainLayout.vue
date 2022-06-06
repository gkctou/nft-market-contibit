<template>
    <q-layout view="hHh lpR fFf">

        <q-header class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    Title
                </q-toolbar-title>

                <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
            <!-- drawer content -->
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
import {ref} from 'vue'
let leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

let rightDrawerOpen = ref(false)
function toggleRightDrawer() {
    rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>