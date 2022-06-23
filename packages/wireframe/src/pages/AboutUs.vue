<template>
  <div class="page-wrap">
      <!-- header  -->
      <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
      </header>
      <!-- About section  -->
      <AboutSection class="pt-5 mt-3" :img="SectionData.aboutData.img" isClassThree="col-sm-9 ps-xl-5" isRound="ps-xl-4" isReverse="flex-lg-row-reverse" isClassTwo="pe-lg-5" :title="SectionData.aboutData.title" :content="SectionData.aboutData.content" :contenttwo="SectionData.aboutData.contentTwo" :contentthree="SectionData.aboutData.contentThree"></AboutSection>
      <!-- funFact  -->
      <funFactSection classname="col-xl-2 col-sm-4 col-6" :items="SectionData.funfactData.funfactListTwo"></funFactSection>
      <!-- About section  -->
      <AboutSection class="section-space-b" :img="SectionData.aboutDataTwo.img" isRound="rounded-3" :title="SectionData.aboutDataTwo.title" isClassTwo="ps-xl-5" :content="SectionData.aboutDataTwo.content" isClass="lead" :contenttwo="SectionData.aboutDataTwo.contentTwo" :contentthree="SectionData.aboutDataTwo.contentThree" :contentfour="SectionData.aboutDataTwo.contentFour"></AboutSection>
      <!-- Brand section  -->
      <BrandSection isBg="bg-gray"></BrandSection>
      <!-- Team section  -->
      <TeamSection></TeamSection>
      <!-- Cta  -->
      <Cta class="section-space-b bg-pattern" :title="SectionData.ctaDataTwo.title" :content="SectionData.ctaDataTwo.content" :btntext="SectionData.ctaDataTwo.btnText" :btnlink="SectionData.ctaDataTwo.btnLink"></Cta>
      <!-- Footer  -->
      <Footer classname="bg-dark on-dark"></Footer>
  </div><!-- end page-wrap -->
</template>

<script setup lang="ts">
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '../store/store';
import AboutSection from '../components/section/AboutSection.vue';
import HeaderMain from '../components/common/HeaderMain.vue';
import funFactSection from '../components/section/FunFactSection.vue';
import BrandSection from '../components/section/BrandSectionTwo.vue';
import TeamSection from '../components/section/TeamSection.vue';
import SectionHeading from '../components/common/SectionHeading.vue';
import BlogSectionSlider from '../components/section/BlogSectionSlider.vue';
import ButtonLink from '../components/common/ButtonLink.vue';
import Cta from './Cta.vue';
import Footer from '../components/section/FooterSection.vue';

// export default {
//   name: 'AboutUs',
//   data () {
//     return {
//       SectionData
//     }
//   },
// }
</script>
