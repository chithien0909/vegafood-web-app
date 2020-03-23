<template>
    <div class="wrapper">
      <div class="py-1 bg-primary">
        <div class="container">
          <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div class="col-lg-12 d-block">
              <div class="row d-flex">
                <div class="col-md pr-4 d-flex topper align-items-center">
                  <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                  <span class="text">+ 1235 2355 98</span>
                </div>
                <div class="col-md pr-4 d-flex topper align-items-center">
                  <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                  <span class="text">youremail@email.com</span>
                </div>
                <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span class="text">3-5 Business days delivery &amp; Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <router-link class="navbar-brand" :to="{ name: 'HomeComponent' }">Vegefoods</router-link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><router-link class="nav-link" :to="{ name: 'HomeComponent' }">Home</router-link></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <router-link class="dropdown-item" :to="{ name: 'ShopComponent' }">Shop</router-link>
                  <router-link class="dropdown-item" :to="{ name: 'WishlistComponent' }">Wishlist</router-link>
                  <router-link class="dropdown-item" :to="{ name: 'ProductSingleComponent' }">Single Product</router-link>
                  <router-link class="dropdown-item" :to="{ name: 'CartComponent' }">Cart</router-link>
                  <router-link class="dropdown-item" :to="{ name: 'CheckoutComponent' }">Checkout</router-link>
                </div>
              </li>
              <li class="nav-item"><router-link class="nav-link" :to="{ name: 'AboutComponent' }">About</router-link></li>
              <li class="nav-item"><router-link class="nav-link" :to="{ name: 'BlogComponent' }">Blog</router-link></li>
              <li class="nav-item"><router-link class="nav-link" :to="{ name: 'ContactComponent' }">Contact</router-link></li>
              <li class="nav-item cta cta-colored"><a class="nav-link"><span class="icon-shopping_cart"></span>[0]<router-link :to="{ name: 'CartComponent' }">Cart</router-link></a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img style="width: 12px; height: 12px" src="/static/images/user.png"></a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <div  v-if="hasPermission">
                    <router-link class="dropdown-item" :to="{ name: 'Admin' }" >User: {{user.username}}</router-link>
                    <div style="cursor: pointer" class="dropdown-item" @click="logout">Logout</div>
                  </div>
                  <div v-else>
                    <router-link class="dropdown-item" :to="{ name: 'LoginComponent' }">Login</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'RegisterComponent' }">Register</router-link>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>
<script>
  export default {
    computed:{
      hasPermission(){
        return Object.keys(this.$store.getters.user).length > 0;
      },
      user() {
        return this.$store.getters.user;
      }
    },
    methods:{
      logout(){
        this.$store.dispatch("logout")
          .then(()=> {
            this.$router.push("/login");
          })
      }
    }
  }
</script>
