<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <hr/>
  <h1 class="text-h1">HELLO, World.</h1>
  <h2 class="text-h2">HELLO, World.</h2>
  <h3>HELLO, World.</h3>
  <h4>HELLO, World.</h4>
  <h5>HELLO, World.</h5>
  <MountedTeleport to="#LeftDrawer">
    <h1>Mount from home</h1>
  </MountedTeleport>
</template>

<script setup lang="ts">
import MountedTeleport from 'components/MountedTeleport.vue';
// import Landing from './Landing.vue';
</script>
