<template>
  <div class="section__content section__content--p30">
    <div class="row">
      <div class="col-md-12">
        <!-- USER DATA-->
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>user data</h3>
          <div class="filters m-b-45">
            <div class="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
              <select class="js-select2" name="property">
                <option selected="selected">All Properties</option>
                <option value="">Products</option>
                <option value="">Services</option>
              </select>
              <div class="dropDownSelect2"></div>
            </div>
            <div class="rs-select2--dark rs-select2--sm rs-select2--border">
              <select class="js-select2 au-select-dark" name="time">
                <option selected="selected">All Time</option>
                <option value="">By Month</option>
                <option value="">By Day</option>
              </select>
              <div class="dropDownSelect2"></div>
            </div>
          </div>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>
                  <label class="au-checkbox">
                    <input type="checkbox">
                    <span class="au-checkmark"></span>
                  </label>
                </td>
                <td>name</td>
                <td>role</td>
                <td>type</td>
                <td></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <label class="au-checkbox">
                    <input type="checkbox">
                    <span class="au-checkmark"></span>
                  </label>
                </td>
                <td>
                  <div class="table-data__info">
                    <h6>lori lynch</h6>
                    <span>
                                                                <a href="#">johndoe@gmail.com</a>
                                                            </span>
                  </div>
                </td>
                <td>
                  <span class="role admin">admin</span>
                </td>
                <td>
                  <div class="rs-select2--trans rs-select2--sm">
                    <select class="js-select2" name="property">
                      <option selected="selected">Full Control</option>
                      <option value="">Post</option>
                      <option value="">Watch</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                  </div>
                </td>
                <td>
                                                        <span class="more">
                                                            <i class="zmdi zmdi-more"></i>
                                                        </span>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="au-checkbox">
                    <input type="checkbox">
                    <span class="au-checkmark"></span>
                  </label>
                </td>
                <td>
                  <div class="table-data__info">
                    <h6>lori lynch</h6>
                    <span>
                                                                <a href="#">johndoe@gmail.com</a>
                                                            </span>
                  </div>
                </td>
                <td>
                  <span class="role user">user</span>
                </td>
                <td>
                  <div class="rs-select2--trans rs-select2--sm">
                    <select class="js-select2" name="property">
                      <option value="">Full Control</option>
                      <option value="" selected="selected">Post</option>
                      <option value="">Watch</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                  </div>
                </td>
                <td>
                                                        <span class="more">
                                                            <i class="zmdi zmdi-more"></i>
                                                        </span>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="au-checkbox">
                    <input type="checkbox">
                    <span class="au-checkmark"></span>
                  </label>
                </td>
                <td>
                  <div class="table-data__info">
                    <h6>lori lynch</h6>
                    <span>
                                                                <a href="#">johndoe@gmail.com</a>
                                                            </span>
                  </div>
                </td>
                <td>
                  <span class="role user">user</span>
                </td>
                <td>
                  <div class="rs-select2--trans rs-select2--sm">
                    <select class="js-select2" name="property">
                      <option value="">Full Control</option>
                      <option value="" selected="selected">Post</option>
                      <option value="">Watch</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                  </div>
                </td>
                <td>
                                                        <span class="more">
                                                            <i class="zmdi zmdi-more"></i>
                                                        </span>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="au-checkbox">
                    <input type="checkbox">
                    <span class="au-checkmark"></span>
                  </label>
                </td>
                <td>
                  <div class="table-data__info">
                    <h6>lori lynch</h6>
                    <span>
                                                                <a href="#">johndoe@gmail.com</a>
                                                            </span>
                  </div>
                </td>
                <td>
                  <span class="role member">member</span>
                </td>
                <td>
                  <div class="rs-select2--trans rs-select2--sm">
                    <select class="js-select2" name="property">
                      <option selected="selected">Full Control</option>
                      <option value="">Post</option>
                      <option value="">Watch</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                  </div>
                </td>
                <td>
                                                        <span class="more">
                                                            <i class="zmdi zmdi-more"></i>
                                                        </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- END USER DATA-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UsersTableComponent"
  }
</script>

<style>

</style>
