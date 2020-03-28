<template>
  <div class="front">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>
<script>
  import HeaderComponent from './components/HeaderComponent/HeaderComponent';
  import FooterComponent from  './components/FooterComponent/FooterComponent';
  import HomeComponent from "./components/HomeComponent/HomeComponent";
  export default {
    components:{
      HomeComponent,
      HeaderComponent,
      FooterComponent,
    },
  }
</script>
<style lang="css">

</style>
