<template>
  <template v-for="cate in categories" :key="cate.id">
    <router-link :to="{ name: 'category', params: { id: cate.id, title: cate.title } }">
      <h4 class="text-h4 q-ma-lg">{{ cate.title }} <span class="text-subtitle2 text-primary">more...</span></h4>
    </router-link>
    <q-virtual-scroll :items-size="cate.list.length" :items-fn="(from, size) => itemsFrom(cate.id, from, size)" virtual-scroll-horizontal v-slot="{ item, index }" virtual-scroll-item-size="250">
      <q-card class="cate-card q-ma-sm">
        <img style="width:250px;height:250px;" :src="`http://localhost:4567/meta-image.png?w=250&h=250&s=${encodeURIComponent(item.metadata_image)}`">

        <q-card-section :key="item.token_address" style="width:250px;">
          <div class="text-h6 text-no-wrap ellipsis">{{ item.metadata_name }}</div>
          <div class="text-subtitle2">{{ item.chain }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none ellipsis-3-lines overflow-hidden" style="width:250px;height:65px;">
          {{ item.metadata_description }}
        </q-card-section>
      </q-card>
    </q-virtual-scroll>
    <hr class="q-mt-lg q-mb-md" />
  </template>
  <!-- <MountedTeleport to="#LeftDrawer">
    <h3 class="text-h3">Mount from home</h3>
  </MountedTeleport> -->
</template>

<script setup lang="ts">
// import MountedTeleport from 'components/MountedTeleport.vue';
// import Landing from './Landing.vue';
import categories from '../mockup/categories.json';
function itemsFrom(id, from, size): any[] {
  // console.log(id, from, size);
  return categories[+id - 1].list.slice(from, from + size);
}
</script>

