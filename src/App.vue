<template>
  <div id="app">
    <!--<router-view/>-->
    <HeaderComponent/>
    <slider-component/>
  </div>
</template>
<script>
    import HeaderComponent from './components/HeaderComponent/HeaderComponent';
    import SliderComponent from './components/slider/slider';
  export default {
  components:{
    HeaderComponent,
    SliderComponent
  },
  name: 'App'
}
</script>
<style lang="css">
</style>
