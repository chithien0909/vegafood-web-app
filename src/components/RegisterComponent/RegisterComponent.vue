<template>
  <section class="ftco-section img" style="background-image: url('/static/images/bg_3.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Register Account</h5>
              <div v-if="status" class="alert alert-success">
                {{status}}
              </div>
              <div v-if="error" class="alert alert-danger">
                {{error}}
              </div>
              <form @submit.prevent="submit" class="form-signin">
                <div class="form-label-group" >
                  <input
                    @blur="$v.username.$touch()"
                    v-model="username"
                    type="text" id="inputName"
                    class="form-control"
                    :class="{invalid: $v.username.$error}"
                    placeholder="Username"
                    >
                  <p class="text-error" v-if="$v.username.$error" for="inputEmail">* Username is required</p>
                </div>
                <div class="form-label-group">
                  <input
                    v-model="email"
                    type="email"
                    id="inputEmail"
                    @blur="$v.email.$touch()"
                    class="form-control"
                    :class="{invalid: $v.email.$error}"
                    placeholder="Email address"
                    >
                    <p class="text-error" v-if="$v.email.$error" for="inputEmail">* Email is required</p>
                </div>

                <div class="form-label-group">
                  <input :type="passwordType" v-model="password" id="inputPassword" class="form-control position-relative" placeholder="Password" required>
                  <img @click="show" class="hide" id="hidden" src="/static/images/hide.png">
                  <p class="text-error" v-if="!matchPassword" for="inputEmail">* Password is not matched</p>
                </div>
                <div class="form-label-group">
                  <input v-model="password_confirmation" type="password" id="re-inputPassword" class="form-control" placeholder="Repeat Password" required>
                  <!--<label for="inputPassword">Password</label>-->
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">i accept terms and conditions</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" @click.prevent="register()">Register</button>
                <hr class="my-4">
              </form>
              <p class="loginhere">
                Have already an account ? <a href="#" class="loginhere-link">Login here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { required, minLength, maxLength, between } from 'vuelidate/dist/validators.min';

  export default {
      name: "RegisterComponent",
      data(){
          return{
            password:'',
            passwordType:'password',
            password_confirmation: '',
            username:'',
            email:'',
          };
      },

      validations: {
        username: {
          required
        },
        email: {
          required
        }
      },
      computed:{
          status(){
            return this.$store.getters.status;
          },
          error(){
            return this.$store.getters.error;
          },
          matchPassword() {
            return this.password === this.password_confirmation;
          }
      },
      methods:{
        show(){
          this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
        },
        register(){
            this.$store.dispatch('register', {
            username: this.username,
            email:this.email,
            password: this.password
          });
        }
      },

    }

</script>

<style lang="css">
  @import "./register.css";
  .invalid {
    border: 1px solid red;
  }
  .text-error {
    color: red;
    padding-left: 15px;
  }
</style>
