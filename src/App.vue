<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>
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
  name: 'App'
}
</script>
<style lang="css">
</style>
