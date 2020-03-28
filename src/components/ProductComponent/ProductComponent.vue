<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 mb-5 text-center">
          <ul class="product-category">
            <li><a href="#" class="active">All</a></li>
            <li><a href="#">Vegetables</a></li>
            <li><a href="#">Fruits</a></li>
            <li><a href="#">Juice</a></li>
            <li><a href="#">Dried</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div v-for="pr in product" :key="pr._id" class="col-md-6 col-lg-3 ftco-animate">
          <div class="product">
            <a href="#" class="img-prod"><img class="img-fluid" :src="bashUrlServer + pr.images[0]" alt="Colorlib Template">
              <div v-if="pr.discount">
                <span class="status">{{calDiscount(pr)}}%</span>
                <div class="overlay"></div>
              </div>
            </a>
            <div class="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">{{pr.name}}</a></h3>
              <div class="d-flex">
                <div v-if="pr.discount" class="pricing">
                  <p class="price">
                    <span class="mr-2 price-dc">${{pr.price}}</span>
                    <span class="price-sale">${{pr.discount.price}}/{{pr.unit}}</span>
                  </p>
                </div>
                <div v-if="!pr.discount" class="pricing">
                  <p class="price">
                    <span class="price-sale">${{pr.price}}/{{pr.unit}}</span>
                  </p>
                </div>
              </div>
              <div class="bottom-area d-flex px-3">
                <div class="m-auto d-flex">
                  <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i class="ion-ios-menu"></i></span>
                  </a>
                  <a style="cursor: pointer" @click="addToCart()" class="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i class="ion-ios-cart"></i></span>
                  </a>
                  <a href="#" class="heart d-flex justify-content-center align-items-center ">
                    <span><i class="ion-ios-heart"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <div class="block-27">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li class="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "ProductComponent",
      data(){
        return{
          items:{
            productName: this.name,
            productPrice:this.price,
            product_id: this._id,
          },
        }
      },
      mounted() {
          return this.$store.dispatch('showProducts');
      },
     methods:{
       addToCart(){
         this.$store.commit('addToCart', this.items);
       },
       calDiscount(item){
         return Number.parseInt((1 - item.discount.price/item.price) * 100)
       }
     },
      computed:{
        product(){
          const products  = this.$store.getters.product;
          console.log(products);
          return products;
        },
        bashUrlServer(){
          return this.$store.getters.bashUrlServer;
        },
      }
    }
</script>

<style scoped>

</style>
