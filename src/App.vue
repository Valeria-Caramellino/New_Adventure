<script>
import AppMusic from './components/AppMusic.vue';

export default {
  name: "App",
  components:{
    AppMusic
  }
}
</script>

<template>
  <body>

    <router-view>

    </router-view>

    <AppMusic/>

  </body>
</template>

<style lang="scss" scoped>
@use './style/style.scss' as*;

</style>