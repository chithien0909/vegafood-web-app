<template>
    <div>
      <BannerComponent/>
      <BillingDetailsComponent/>
      <SubcribeComponent/>
    </div>
</template>

<script>
  import BannerComponent from '../BannerComponent/BannerComponent';
  import SubcribeComponent from '../SubcribeComponent/SubcribeComponent';
  import BillingDetailsComponent from '../BillingDetailsComponent/BillingDetailsComponent';
    export default {
      components:{
        BannerComponent,
        SubcribeComponent,
        BillingDetailsComponent,
      },
        name: "CheckoutComponent"
    }
</script>

<style scoped>

</style>
