<template>
    <div>
      <BannerComponent/>
      <IntroComponent/>
      <SubcribeComponent/>
      <WayPointComponent/>
      <CustomerSays/>
      <InfoPageComponent class="bg-light"/>
    </div>
</template>

<script>
  import BannerComponent from '../BannerComponent/BannerComponent';
  import SubcribeComponent from '../SubcribeComponent/SubcribeComponent';
  import CustomerSays from '../CustomerSays/CustomerSays';
  import InfoPageComponent from '../InfoPageComponent/InfoPageComponent';
  import IntroComponent from '../IntroComponent/IntroComponent';
  import WayPointComponent from '../WayPointComponent/WayPointComponent';
    export default {
      components:{
        BannerComponent,
        SubcribeComponent,
        CustomerSays,
        InfoPageComponent,
        IntroComponent,
        WayPointComponent
      },
        name: "AboutComponent"
    }
</script>

<style scoped>

</style>
