<template>
  <h4 class="text-h4 q-ma-lg">{{ cate.title }}</h4>
  <div :class="$style.gridWrapper">
    <Grid :class="[$style.grid, $style[scrollMode]]" :length="cate.list.length" :pageProvider="async (pageNumber, pageSize) => Array(pageSize).fill('x')" :pageSize="30" :scrollTo="scrollTo">
      <!-- ...slots -->
      <template v-slot:default="{ item, style, index }">
        <div :style="style">{{ item }} {{ index }}</div>
      </template>
      <template v-slot:placeholder="{ index, style }">
        <div :style="style">Placeholder {{ index }}</div>
      </template>
      <template v-slot:probe>
        <div class="item">Probe</div>
      </template>
    </Grid>
  </div>
  <MountedTeleport to="#LeftDrawer">
    <h4 class="text-h4">Mount from home</h4>
  </MountedTeleport>
</template>

<script setup lang="ts">
import MountedTeleport from 'components/MountedTeleport.vue';
import Categories from '../mockup/categories.json';
import { useRouter, useRoute } from 'vue-router';
import { useLayoutStore } from 'stores/layout';
import { onUnmounted } from 'vue';
import Grid from 'vue-virtual-scroll-grid';
import { $ref } from 'vue/macros'
const router = useRouter();
const route = useRoute();
const layoutStore = useLayoutStore();
const cate = Categories.filter(v => v.id === route.params.id)[0];
let scrollTo = $ref<number>(undefined);
if (!cate)
  router.push({ name: 'notFound' });
layoutStore.setLeftDrawer(true);
onUnmounted(() => {
  layoutStore.setLeftDrawer(false);
});
async function gridPageProvider(pageNumber: number, pageSize: number): Promise<any[]> {
  return [];
}
const scrollMode = "vertical";
</script>

<style module>
.gridWrapper {
  grid-area: gridWrapper;
  height: 100%;
  overflow: auto;
}

.grid {
  display: grid;
  padding: 0 1rem;
  grid-gap: 2rem;
  place-items: start stretch;
  box-sizing: content-box;
}

.grid.vertical {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 760px) {
  .grid {
    padding: 1.5rem;
    grid-gap: 3rem;
  }

  .grid.vertical {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1140px) {
  .grid.vertical {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1520px) {
  .grid.vertical {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1900px) {
  .grid.vertical {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 2280px) {
  .grid.vertical {
    grid-template-columns: repeat(7, 1fr);
  }
}

@media (min-width: 2660px) {
  .grid.vertical {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (min-width: 3040px) {
  .grid.vertical {
    grid-template-columns: repeat(9, 1fr);
  }
}

@media (min-width: 3420px) {
  .grid.vertical {
    grid-template-columns: repeat(10, 1fr);
  }
}

@media (min-height: 721px) {
  .grid.horizontal {
    grid-template-rows: repeat(3, 1fr);
  }
}

@media (min-height: 1081px) {
  .grid.horizontal {
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>
