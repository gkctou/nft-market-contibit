<template>
    <router-link to="/" class="logo-link" :class="classname">
        <img class="logo-dark logo-img" :src="'files/images/logo-black.png'" alt="logo">
        <img class="logo-light logo-img" :src="'files/images/logo-white.png'" alt="logo">
    </router-link>
</template>
<script>

export default {
  name: 'LogoLink',
  props: ['classname']
}
</script>
