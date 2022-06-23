<template>
    <layout>
        <breadcrumb title="Explore Carousel" current="Explore Carousel"/>

        <div class="en-product-area rn-section-gap">
            <div class="container">
                <explore-carousel/>
            </div>
        </div>

        <div class="en-product-area rn-section-gapBottom">
            <div class="container">
                <explore-carousel title="Explore Carousel Dots" :arrow="false" :dots="true"/>
            </div>
        </div>

        <div class="en-product-area">
            <div class="container">
                <explore-carousel title="Explore Carousel Both" :dots="true"/>
            </div>
        </div>
    </layout>
</template>

<script>
    import Layout from "@/components/layouts/Layout.vue";
    import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
    import SalScrollAnimationMixin from "@/mixins/SalScrollAnimationMixin";
    import ExploreCarousel from "@/components/explore/ExploreCarousel.vue";

    export default {
        name: "ExploreThree",
        components: {ExploreCarousel, Breadcrumb, Layout},
        mixins: [SalScrollAnimationMixin]
    }
</script>