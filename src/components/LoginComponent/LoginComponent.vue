<template>
  <section class="ftco-section img" style="background-image: url('/static/images/bg_3.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <form class="form-signin ">
                <div class="form-label-group">
                  <input
                    v-model="email"
                    @blur="$v.email.$touch()"
                    type="email" id="inputEmail"
                    class="form-control" placeholder="Email address">
                  <p class="text-error" v-if="$v.email.$error">* Email is required</p>
                </div>
                <div class="form-label-group">
                  <input
                    @blur="$v.password.$touch()"
                    v-model="password"
                    type="password"
                    id="inputPassword"
                    class="form-control" placeholder="Password" required>
                  <p class="text-error" v-if="$v.password.$error" for="inputPassword">* Password is required</p>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" @click.prevent="login">Sign in</button>
                <hr class="my-4">
                <!--<button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>-->
                <!--<button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>-->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import { required , minLength, maxLength, between } from 'vuelidate/dist/validators.min';
  export default {
    name: "LoginComponent",
    data(){
      return{
        email:'',
        password:'',
      }
    },
    validations: {
      password: {
        required
      },
      email: {
        required
      }
    },
    methods:{
       login(){
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        });
      }
    },

  }
</script>

<style lang="css" scoped>
  @import "./login.css";
</style>
