<template>
  <div>
    <BannerComponent/>
    <ProductComponent/>
    <SubcribeComponent/>
  </div>

</template>

<script>
  import BannerComponent from '../BannerComponent/BannerComponent.vue';
  import SubcribeComponent from '../SubcribeComponent/SubcribeComponent.vue';
  import ProductComponent from '../ProductComponent/ProductComponent.vue';
    export default {
      components:{
        BannerComponent,
        SubcribeComponent,
        ProductComponent,

      },
        name: "ShopComponent"
    }
</script>

<style scoped>

</style>
