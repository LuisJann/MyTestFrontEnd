<script>
import AppHero from "./components/AppHero.vue";
import AppNav from "./components/AppNav.vue";
import AppCategory from "./components/AppCategory.vue"
import AppProduct from "./components/AppProduct.vue";
import AppDetailsProduct from "./components/AppDetailsProduct.vue";
import AppBlog from "./components/AppBlog.vue";

export default {
  data(){
    return{

    }
  },
  components:{
    AppNav,
    AppHero,
    AppCategory,
    AppProduct,
    AppDetailsProduct,
    AppBlog,
  }
}
</script>

<template>
  <section>
    <AppNav />
    <AppHero />
    <AppCategory />
    <AppProduct />
    <AppBlog />
  </section>
</template>

<style lang="scss">
@use "styles/general.scss"as*;

</style>