<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container>
            <q-page class="window-height window-width row justify-center items-center" style="background: linear-gradient(#333333, #999999);">
                <Suspense>
                    <template #default>
                        <router-view />
                    </template>
                    <template #fallback>
                        <span>Loading...</span>
                    </template>
                </Suspense>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
</script>

<style>
</style>