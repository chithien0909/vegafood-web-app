<template>
    <div class="container-fluid">
      <AllPostsComponent/>
    </div>
</template>

<script>
  import AllPostsComponent from '../AllPostsComponent/AllPostsComponent';
    export default {
        components:{
          AllPostsComponent,
        },
        name: "PostComponent"
    }
</script>

<style>
  @import "./post.css";
</style>
