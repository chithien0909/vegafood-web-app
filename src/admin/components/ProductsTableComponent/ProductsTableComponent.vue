<template>
  <div class="section__content section__content--p30">
    <div class="row">
      <div class="col-md-12">
        <!-- DATA TABLE -->
        <h3 class="title-5 m-b-35">data table</h3>
        <div class="table-data__tool">
          <div class="table-data__tool-left">
            <div class="rs-select2--light rs-select2--md">
              <select class="js-select2" name="property">
                <option selected="selected">All Properties</option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
              </select>
              <div class="dropDownSelect2"></div>
            </div>
            <div class="rs-select2--light rs-select2--sm">
              <select class="js-select2" name="time">
                <option selected="selected">Today</option>
                <option value="">3 Days</option>
                <option value="">1 Week</option>
              </select>
              <div class="dropDownSelect2"></div>
            </div>
            <button class="au-btn-filter">
              <i class="zmdi zmdi-filter-list"></i>filters</button>
          </div>
          <div class="table-data__tool-right">
            <button class="au-btn au-btn-icon au-btn--green au-btn--small">
              <i class="zmdi zmdi-plus"></i>add item</button>
            <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
              <select class="js-select2" name="type">
                <option selected="selected">Export</option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
              </select>
              <div class="dropDownSelect2"></div>
            </div>
          </div>
        </div>
        <div class="table-responsive table-responsive-data2">
          <table class="table table-data2 table-responsive">
            <thead>
            <tr>
              <th>
                <label class="au-checkbox">
                  <input type="checkbox">
                  <span class="au-checkmark"></span>
                </label>
              </th>
              <th>name</th>
              <th>type</th>
              <th>image</th>
              <th>description</th>
              <th>stock status</th>
              <th>price</th>
              <th>discount</th>
              <th>action</th>
            </tr>
            </thead>
            <tbody>
            <tr class="tr-shadow">
              <td>
                <label class="au-checkbox">
                  <input type="checkbox">
                  <span class="au-checkmark"></span>
                </label>
              </td>
              <td>Vegetable banana</td>
              <td>vegetable</td>
              <td>
                <img style="width: 60px;height: 60px;" src="/static/static_admin/images/bg-title-01.jpg">
              </td>
              <td class="desc">Samsung S8 Black</td>
              <!--<td>2018-09-27 02:12</td>-->
              <td>
                <span class="status--process">in stock</span>
              </td>
              <td>$679.00</td>
              <td class="text-danger">-5%</td>
              <td class="px-5">
                <div class="table-data-feature">
                  <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                    <i class="zmdi zmdi-edit"></i>
                  </button>
                  <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                    <i class="zmdi zmdi-delete"></i>
                  </button>
                  <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                    <i class="zmdi zmdi-more"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="spacer"></tr>
            </tbody>
          </table>
        </div>
        <!-- END DATA TABLE -->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProductsTableComponent"
    }
</script>

<style>

</style>
