<script>
import AppHero from "../AppHero.vue/";
import AppCategory from "../AppCategory.vue";
import AppNav from "../AppNav.vue";
import AppProduct from "../AppProduct.vue";
import AppBlog from "../AppBlog.vue";
import AppCta from "../AppCta.vue";
import AppService from "../AppService.vue"
import AppFooter from "../AppFooter.vue";

export default {
    name: 'AppHome',
    data() {
        return {

        }
    },
    components: {
        AppNav,
        AppHero,
        AppCategory,
        AppProduct,
        AppBlog,
        AppCta,
        AppService,
        AppFooter,
    }
}
</script>

<template>
    <section>
        <AppNav/>
        <AppHero />
        <AppCategory />
        <AppProduct />
        <AppBlog />
        <AppCta />
        <AppService />
        <AppFooter />
    </section>
</template>

<style lang="scss" scoped>

</style>