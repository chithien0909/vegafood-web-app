<template>
    <header class="header-desktop">
      <div class="section__content section__content--p30">
        <div class="container-fluid">
          <div class="header-wrap">
            <form class="form-header" action="" method="POST">
              <input class="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
              <button class="au-btn--submit" type="submit">
                <i class="zmdi zmdi-search"></i>
              </button>
            </form>
            <div class="header-button">
              <div class="noti-wrap">
                <div class="noti__item js-item-menu position-relative">
                  <i class="zmdi zmdi-comment-more"></i>
                  <span class="quantity">1</span>
                  <div class="sub__dropdown sub">
                    <div class="mess__item">
                      <div class="image img-cir img-40">
                        <img src="/static/images/icon/avatar-06.jpg" alt="Michelle Moreno">
                      </div>
                      <div class="content">
                        <h6>Michelle Moreno</h6>
                        <p>Have sent a photo</p>
                        <span class="time">3 min ago</span>
                      </div>
                    </div>
                    <div class="mess__footer">
                      <router-link :to="{ name: 'MessengerComponent' }"><a>View all messages</a></router-link>

                    </div>
                  </div>
                </div>
                <div class="noti__item js-item-menu position-relative">
                  <i class="zmdi zmdi-email"></i>
                  <span class="quantity">1</span>
                  <div class="sub__dropdown sub">
                    <div class="mess__item">
                      <div class="image img-cir img-40">
                        <img src="/static/images/icon/avatar-06.jpg" alt="Michelle Moreno">
                      </div>
                      <div class="content">
                        <h6>Michelle Moreno</h6>
                        <p>Have sent a photo</p>
                        <span class="time">3 min ago</span>
                      </div>
                    </div>
                    <div class="mess__footer">
                      <a href="#">View all mail</a>
                    </div>
                  </div>
                </div>
                <div class="noti__item js-item-menu position-relative">
                  <i class="zmdi zmdi-notifications"></i>
                  <span class="quantity">3</span>
                  <div class="sub__dropdown sub">
                    <div class="mess__item d-flex align-items-center justify-content-between">
                      <div class="bg-c1 img-cir img-40 d-flex justify-content-center align-items-center">
                        <i style="color: #fff;" class="zmdi zmdi-email-open"></i>
                      </div>
                      <div class="content">
                        <h6>You got a email notification</h6>
                        <p class="date"><small>April 12, 2018 06:50</small></p>
                        <p class="time">3 min ago</p>
                      </div>
                    </div>
                    <div class="mess__footer">
                      <a href="#">View all notification</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="account-wrap position-relative">
                <div class="account-item clearfix js-item-menu">
                  <div class="image">
                    <img style="border-radius: 100%;" src="/static/images/icon/avatar-01.jpg" alt="John Doe" />
                  </div>
                  <div  @click="show()" class="content">
                    <a class="js-acc-btn">john doe</a>
                  </div>
                  <div class="sub__profile shadow-sm p-3 mb-5 bg-white rounded" :class="{active : isActive}">
                    <ul class="list__profile">
                      <li>Profile</li>
                      <li>Setting</li>
                      <li>Logout</li>
                    </ul>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderAdminComponent",
      data(){
          return{
            isActive:false,
          }
      },
      methods:{
          show(){
            this.isActive = !this.isActive;
          },
      }
    }
</script>

<style>
  @import "./headeradmin.css";
</style>
