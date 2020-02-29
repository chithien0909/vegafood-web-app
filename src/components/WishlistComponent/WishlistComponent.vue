<template>
   <div>
     <BannerComponent/>
     <ProductListComponent/>
     <SubcribeComponent/>
   </div>
</template>

<script>
  import ProductListComponent from '../ProductListComponent/ProductListComponent.vue';
  import BannerComponent from '../BannerComponent/BannerComponent.vue';
  import SubcribeComponent from '../SubcribeComponent/SubcribeComponent.vue';
    export default {
        name: "WishlistComponent",
        components:{
          BannerComponent,
          ProductListComponent,
          SubcribeComponent,
        }
    }
</script>

<style scoped>

</style>
