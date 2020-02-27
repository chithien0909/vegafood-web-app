<template>
  <section class="ftco-section img" style="background-image: url('/static/images/bg_3.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Register Account</h5>
              <form class="form-signin">
                <div class="form-label-group">
                  <input type="text" id="inputName" class="form-control" placeholder="Name" required autofocus>
                  <!--<label for="inputEmail">Email address</label>-->
                </div>
                <div class="form-label-group">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                  <!--<label for="inputEmail">Email address</label>-->
                </div>

                <div class="form-label-group">
                  <input :type="passwordType" v-model="password" id="inputPassword" class="form-control position-relative" placeholder="Password" required>
                  <img @click="show" class="hide" id="hidden" src="/static/images/hide.png">
                  <!--<label for="inputPassword">Password</label>-->
                </div>
                <div class="form-label-group">
                  <input type="password" id="re-inputPassword" class="form-control" placeholder="Repeat Password" required>
                  <!--<label for="inputPassword">Password</label>-->
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">i accept terms and conditions</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
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
    export default {
        name: "RegisterComponent",
        data(){
          return{
            password:'',
            passwordType:'password'
          };
        },
      methods:{
        show(){
          let type = (this.passwordType === 'password') ? 'text' : 'password';
          this.passwordType = type;
        }
      }
    }

</script>

<style lang="css">
  @import "./register.css";
</style>
