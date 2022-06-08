<template>
  <InputCountDown style="width:450px;" />
  <hr />
  <example-component title="Example component" active :todos="todos" :meta="meta"></example-component>
  <MountedTeleport to="#LeftDrawer">
    <InputCountDown style="width:250px;" />
  </MountedTeleport>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';
import InputCountDown from 'src/components/InputCountDown.vue';
import MountedTeleport from 'components/MountedTeleport.vue';

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);
const meta = ref<Meta>({
  totalCount: 1200
});

// export default defineComponent({
//   name: 'IndexPage',
//   components: { ExampleComponent },
//   setup () {
//     return { todos, meta };
//   }
// });
</script>
