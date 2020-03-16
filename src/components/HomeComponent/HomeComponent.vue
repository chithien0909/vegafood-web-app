<template>
  <div>
    <SliderComponent/>
    <InfoPageComponent/>
    <TypeVegetablesComponent/>
    <OurProductsComponent/>
    <BestPriceComponent/>
    <CustomerSays/>
    <hr>
    <LogoComponent/>
    <SubcribeComponent/>
  </div>
</template>
<script>
  import SliderComponent from '../SliderComponent/SliderComponent.vue';
  import CustomerSays from '../CustomerSays/CustomerSays.vue';
  import SubcribeComponent from '../SubcribeComponent/SubcribeComponent.vue';
  import LogoComponent from '../LogoComponent/LogoComponent.vue';
  import InfoPageComponent from '../InfoPageComponent/InfoPageComponent.vue';
  import TypeVegetablesComponent from '../TypeVegetablesComponent/TypeVegetablesComponent.vue';
  import OurProductsComponent from '../OurProductsComponent/OurProductsComponent.vue';
  import BestPriceComponent from '../BestPriceComponent/BestPriceComponent.vue';
  import HeaderComponent from '../HeaderComponent/HeaderComponent.vue';
  export default {
    components:{
      SliderComponent,
      CustomerSays,
      SubcribeComponent,
      LogoComponent,
      InfoPageComponent,
      TypeVegetablesComponent,
      OurProductsComponent,
      BestPriceComponent,
      HeaderComponent,
    },
  }
</script>
<style>

</style>
