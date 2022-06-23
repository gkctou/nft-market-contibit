<template>
  <nav class="header-menu menu nav">
    <!-- menu list -->
    <MenuList></MenuList>
    <!-- header btn -->
    <ul class="menu-btns">
      <li>
        <ButtonLink :text="SectionData.headerData.btnText" link="/wallet" classname="btn" :class="classname"></ButtonLink>
      </li>
      <li>
        <ThemeSwitcher></ThemeSwitcher>
      </li>
    </ul>
  </nav><!-- .header-menu -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '../../store/store'

// @ is an alias to /src
import MenuList from './MenuList.vue';
import ButtonLink from '../common/ButtonLink.vue';
import ThemeSwitcher from '../common/ThemeSwitcher.vue';
export default {
  name: 'Menu',
  props: ['classname'],
  components: {
    MenuList, ButtonLink, ThemeSwitcher
  },
  data() {
    return {
      SectionData
    }
  }
}
</script>
