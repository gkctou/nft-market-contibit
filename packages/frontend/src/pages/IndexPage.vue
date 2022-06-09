<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <MountedTeleport to="#LeftDrawer">
    <h5>Mount from home</h5>
  </MountedTeleport>
</template>

<script setup lang="ts">
import MountedTeleport from 'components/MountedTeleport.vue';
// import Landing from './Landing.vue';
</script>
