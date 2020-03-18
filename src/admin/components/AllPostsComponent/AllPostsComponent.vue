<template>
  <div class="section__content section__content--p30">
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive table--no-card m-b-30">
          <table class="table table-borderless table-striped table-earning">
            <thead>
            <tr>
              <th>date</th>
              <th>Posts ID</th>
              <th>Title</th>
              <th>email</th>
              <th class="text-right">categories</th>
              <th class="text-right">author</th>
              <th class="text-center">action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>2018-09-29 05:57</td>
              <td>100398</td>
              <td>Benefit when eat vegetable</td>
              <td>test@gmail.com</td>
              <td class="text-right">1</td>
              <td class="text-right">Test</td>
              <td class="px-5">
                <div class="table-data-feature">
                  <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                    <i class="zmdi zmdi-edit"></i>
                  </button>
                  <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                    <i class="zmdi zmdi-delete"></i>
                  </button>
                  <button class="item" data-toggle="tooltip" data-placement="top" title="detail">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
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
</template>

<script>
    export default {
        name: "AllPostsComponent"
    }
</script>

<style scoped>

</style>
