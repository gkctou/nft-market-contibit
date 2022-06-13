<template>
  <h4 class="text-h4 q-ma-lg">{{ cate.title }}</h4>
  <q-infinite-scroll ref="qInfiScroll" @load="onLoad" :offset="250" class="flex">

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
      <div class="row justify-center items-center q-ma-xs" style="width: 250px;height: 401px;">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
  <!-- place QPageScroller at end of page -->
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="primary" />
  </q-page-scroller>
  <MountedTeleport to="#LeftDrawer">
    <q-list bordered>
      <q-item-label header class="text-h6">Categories</q-item-label>
      <q-item v-for="cate in Categories" :key="cate.id" clickable v-ripple :to="{ name: 'category', params: { id: cate.id, title: cate.title } }">
        <q-item-section avatar>
          <q-avatar>
            <img :src="`http://localhost:4567/meta-image.png?w=250&h=250&s=${encodeURIComponent(cate.list[17].metadata_image)}`">
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ cate.title }}</q-item-section>
      </q-item>
    </q-list>
  </MountedTeleport>
</template>

<script setup lang="ts">
import MountedTeleport from 'components/MountedTeleport.vue';
import Categories from '../mockup/categories.json';
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useLayoutStore } from 'stores/layout';
import { onMounted, onUnmounted, ref } from 'vue';
import { $ref } from 'vue/macros'
import { useQuasar, scroll } from 'quasar';

defineExpose({ $q: useQuasar() });
const router = useRouter();
const route = useRoute();
const layoutStore = useLayoutStore();
let cate = $ref(Categories.filter(v => v.id === route.params.id)[0]);
// if (!cate)
//   router.push({ name: 'notFound' });
const pageSize = 30;
let items = $ref(cate.list.slice(0, pageSize));

function onLoad(index, done) {
  console.log(index);
  setTimeout(() => {
    let added = cate.list.slice(index * pageSize, (index + 1) * pageSize);
    if (added.length)
      items.push(...added);
    done(!added.length)
  }, 1200)
}
layoutStore.setLeftDrawer(true);
// onMounted(() => {
// });
// onUnmounted(() => {
//   layoutStore.setLeftDrawer(false);
// });
const qInfiScroll = $ref<any>(null);
onBeforeRouteUpdate((to, from, next) => {
  next();
  setTimeout(() => router.push({ name: 'goback' }), 0);
});
// onMounted(() => {
//   window.scrollTo(0, 0);
// });
</script>

<style module>
</style>
