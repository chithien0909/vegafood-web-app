<template>
  <aside class="menu-sidebar d-none d-lg-block">
    <div class="logo">
      <a href="#">
        <h3>Admin</h3>
      </a>
    </div>
    <div class="menu-sidebar__content js-scrollbar1">
      <nav class="navbar-sidebar">
        <ul class="list-unstyled navbar__list">
          <li>
            <router-link :to="{ name: 'DashboardComponent' }"><a class="nav-link"><i class="fas fa-tachometer-alt"></i>Dashboard</a></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'ChartComponent' }"><a class="nav-link"><i class="fas fa-chart-bar"></i>Charts</a></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'ProductsTableComponent' }"><a class="nav-link"><i class="fa fa-archive"></i>Products</a></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'UsersTableComponent' }"><a class="nav-link"><i class="fa fa-user"></i>Users</a></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'OrderTableComponent' }"><a class="nav-link"><i class="fa fa-shopping-bag"></i>Orders</a></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'MessengerComponent' }"><a class="nav-link"><i class="fa fa-comments"></i>Messenger</a></router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
    export default {
        name: "SideBarComponent"
    }
</script>

<style>

</style>
