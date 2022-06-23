<template>
    <div>
        <Header/>
        <mobile-menu/>
        <main>
            <slot></slot>
        </main>
        <Footer/>
        <back-to-top/>
    </div>
</template>

<script>
    import Header from './header/Header.vue'
    import Footer from './footer/Footer.vue'
    import MobileMenu from './header/MobileMenu.vue'
    import BackToTop from '@/components/layouts/footer/BackToTop.vue'

    export default {
        name: 'Layout',
        components: {BackToTop, MobileMenu, Footer, Header}
    }
</script>