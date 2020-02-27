<template>
    <div>
      <BannerComponent/>
      <ListCartComponent/>
      <SubcribeComponent/>
    </div>
</template>

<script>
  import BannerComponent from '../BannerComponent/BannerComponent';
  import SubcribeComponent from '../SubcribeComponent/SubcribeComponent';
  import ListCartComponent from '../ListCartComponent/ListCartComponent';
    export default {
      components:{
        BannerComponent,
        SubcribeComponent,
        ListCartComponent,
      },
        name: "CartComponent"
    }
</script>

<style scoped>

</style>
