<template>
<div>
  <div class="w-100">
    <carousel :items="1" :loop="true" :autoplay="true" :dots="false" :nav="false" :autoplayHoverPause="true">
      <div class="slider-item position-relative">
        <img src="/static/images/bg_1.jpg">
        <div class="overlay"></div>
        <div class="container position-absolute text__slider">
          <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

            <div class="col-md-12 ftco-animate text-center">
              <h1 class="mb-2 text__fortmat">We serve Fresh Vegestables &amp; Fruits</h1>
              <h2 class="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
              <p><a href="#" class="btn btn-primary">View Details</a></p>
            </div>

          </div>
        </div>
      </div>
      <div class="slider-item position-relative">
        <img src="/static/images/bg_2.jpg">
        <div class="overlay"></div>
        <div class="container text__slider">
          <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

            <div class="col-sm-12 ftco-animate text-center">
              <h1 class="mb-2 text__fortmat">100% Fresh &amp; Organic Foods</h1>
              <h2 class="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
              <p><a href="#" class="btn btn-primary">View Details</a></p>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </div>

</div>


</template>
<script>
  import carousel from 'vue-owl-carousel';
  export default {
   components:{
     carousel,
   },
  }
</script>
<style lang="css" scoped>
  @import "./slider.css";
</style>
