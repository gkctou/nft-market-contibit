<template>
  <Teleport :to="to" :disabled="disabled" v-if="isMounted">
    <slot></slot>
  </Teleport>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const isMounted = ref(false);
const props = defineProps<{
  to: string,
  disabled?: boolean
}>();
onMounted(() => {
  isMounted.value = true;
});
</script>
