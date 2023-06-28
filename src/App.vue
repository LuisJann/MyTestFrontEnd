<script>
import AppNav from "./components/AppNav.vue"

export default {
  name:'App',
  data(){
    return{

    }
  },
  components:{
   AppNav,
  }
}
</script>

<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<style lang="scss">
@use "./styles/general.scss"as*;

</style>