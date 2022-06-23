<template>
    <div class="header-main is-sticky" :class="isTransparent">
        <div class="container">
            <div class="header-wrap">
                <!-- logo -->
                <Logo></Logo>
                <!-- mobile action -->
                <MobileAction></MobileAction>
                <!-- heder search -->
                <HeaderSearch></HeaderSearch>
                <!-- Menu -->
                <Menu classname="btn-dark"></Menu>
                <div class="header-overlay"></div>
            </div><!-- .header-warp-->
        </div><!-- .container-->
    </div><!-- .header-main-->
</template>
<script>
// @ is an alias to /src
import Logo from './Logo.vue'
import MobileAction from './MobileAction.vue'
import HeaderSearch from './HeaderSearch.vue'
import Menu from './Menu.vue'

export default {
  name: 'HeaderMain',
  props: ['isTransparent'],
  components: {
    Logo,
    MobileAction,
    HeaderSearch,
    Menu
  }
}
</script>
