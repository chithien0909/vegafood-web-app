<template>
    <div>
      <BannerComponent/>
      <ProductDetailComponent/>
      <ProductsRelatedComponent/>
      <SubcribeComponent/>
    </div>
</template>

<script>
  import BannerComponent from '../BannerComponent/BannerComponent';
  import ProductDetailComponent from '../ProductDetailComponent/ProductDetailComponent';
  import SubcribeComponent from '../SubcribeComponent/SubcribeComponent';
  import ProductsRelatedComponent from '../ProductsRelatedComponent/ProductsRelatedComponent';
    export default {
      components:{
        BannerComponent,
        ProductDetailComponent,
        SubcribeComponent,
        ProductsRelatedComponent
      },
        name: "ProductSingleComponent"
    }
</script>

<style scoped>

</style>
