<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import "bootstrap"
import "vue-select/dist/vue-select.css";
// template custom css
import 'assets/scss/bundles.scss'
import 'assets/scss/style.scss'

export default defineComponent({
  name: 'App'
});
</script>
