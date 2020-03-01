<template>
  <div class="app">
    <router-view/>
  </div>
</template>
<script>
  import HeaderComponent from './components/HeaderComponent/HeaderComponent';
  import FooterComponent from  './components/FooterComponent/FooterComponent';
  import '../static/js/jquery-3.2.1.min';
  import '../static/js/bootstrap.min.js';
  // import '../static/js/jquery-migrate-3.0.1.min.js';
  import '../static/js/bootstrap-datepicker.js';
  import '../static/js/jquery.animateNumber.min.js';
  import '../static/js/jquery.easing.1.3.js';
  import '../static/js/jquery.magnific-popup.min.js';
  import '../static/js/jquery.waypoints.min.js';
  import '../static/js/scrollax.min.js';
  import '../static/js/main.js';
  export default {
    components:{
      HeaderComponent,
      FooterComponent,
    },
  }
</script>
<style lang="css">
</style>
