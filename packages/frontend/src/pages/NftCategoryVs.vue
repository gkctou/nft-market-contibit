<template>
  <h4 class="text-h4 q-ma-lg">{{ cate.title }}</h4>
  <q-infinite-scroll @load="onLoad" :offset="250" class="row" scroll-target="body">

    <q-card class="q-ma-xs" style="width: 250px;" v-for="(item, index) in items" :key="index">
      <img style="width:250px;height:250px;" :src="`http://localhost:4567/meta-image.png?w=250&h=250&s=${encodeURIComponent(item.metadata_image)}`">

      <q-card-section :key="item.token_address" style="width:250px;">
        <div class="text-h6 text-no-wrap ellipsis">{{ item.metadata_name }}</div>
        <div class="text-subtitle2">{{ item.chain }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none ellipsis-3-lines overflow-hidden" style="width:250px;height:65px;">
        {{ item.metadata_description }}
      </q-card-section>
    </q-card>

    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
  <MountedTeleport to="#LeftDrawer">
    <h4 class="text-h4">Mount from home</h4>
  </MountedTeleport>
</template>

<script setup lang="ts">
import MountedTeleport from 'components/MountedTeleport.vue';
import Categories from '../mockup/categories.json';
import { useRouter, useRoute } from 'vue-router';
import { useLayoutStore } from 'stores/layout';
import { onMounted, onUnmounted } from 'vue';
import { $ref } from 'vue/macros'
const router = useRouter();
const route = useRoute();
const layoutStore = useLayoutStore();
const cate = Categories.filter(v => v.id === route.params.id)[0];
// if (!cate)
//   router.push({ name: 'notFound' });
const items = $ref(cate?.list.slice(0, 30) || []);
function onLoad(index, done) {
  // console.log(index);
  setTimeout(() => {
    let added = cate.list.slice(index * 30, (index + 1) * 30)
    if (added.length)
      items.push(...added);
    done(!added.length)
  }, 1200)
}
layoutStore.setLeftDrawer(true);
onMounted(() => {
});
onUnmounted(() => {
  layoutStore.setLeftDrawer(false);
});
// onMounted(() => {
//   window.scrollTo(0, 0);
// });

</script>

<style module>
</style>
