<template>
  <template v-for="cate in categories" :key="cate.id">
    <h4 class="text-h4 q-ma-md">{{ cate.title }}</h4>
    <q-virtual-scroll :items-size="cate.list.length" :items-fn="(from, size) => itemsFrom(cate.id, from, size)" virtual-scroll-horizontal v-slot="{ item, index }">
      <q-card class="cate-card">
        <img :src="`http://localhost:4567/meta-image.png?w=250&h=250&s=${encodeURIComponent(item.metadata_image)}`">

        <q-card-section :key="item.token_address">
          <div class="text-h6">{{ item.metadata_name }}</div>
          <div class="text-subtitle2">{{ item.chain }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none" style="max-height:5em;overflow: hidden;">
          {{ item.metadata_description }}
        </q-card-section>
      </q-card>
    </q-virtual-scroll>
    <hr />
  </template>
  <MountedTeleport to="#LeftDrawer">
    <h3 class="text-h3">Mount from home</h3>
  </MountedTeleport>
</template>

<script setup lang="ts">
import MountedTeleport from 'components/MountedTeleport.vue';
// import Landing from './Landing.vue';
import categories from '../mockup/categories.json';
function itemsFrom(id, from, size): any[] {
  console.log(id, from, size);
  return categories[+id - 1].list.slice(from, from + size);
}
</script>

<style lang="scss" scoped>
.cate-card {
  width: 100%;
  max-width: 250px;
  margin: 3px 10px;
}
</style>
