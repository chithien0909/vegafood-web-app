<template>
  <div class="app">
    <router-view/>
  </div>
</template>
<script>
  import HeaderComponent from './components/HeaderComponent/HeaderComponent';
  import FooterComponent from  './components/FooterComponent/FooterComponent';
  export default {
    components:{
      HeaderComponent,
      FooterComponent,
    },
  }
</script>
<style lang="css">
</style>
