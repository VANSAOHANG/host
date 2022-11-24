<template>
  <section>
    <div class=" main container">
        <div class="main-ing w-50 " >
            <img class="w-50" src="../../assets/images/logo/logo1.png" alt="">
        </div>
        <div class="col-lg-6 col-md-12 sub-form py-3">
          <form class="row w-100 ">
              <div class="col-12  ">
                <label for="inputAddress" class="form-label">Email Address</label>
                <div class="d-flex sub-fill mb-4">
                  <img class="img-fluid lock ml-2" src="../../assets/images/icon/icon1.png" alt="">
                  <input type="email" class="form-control p-4 " id="inputAddress" placeholder="Your Email Address">
                </div>
                </div>

              <div class="col-12 ">
                <label for="inputAddress" class="form-label">Password</label>
                <div class="d-flex sub-fill ">
                  <img class="img-fluid lock ml-2" src="../../assets/images/icon/icon2.png" alt="">
                  <input type="password" class="form-control p-4 w-100 outline-0" id="inputAddress" placeholder="Your Password">
                  <img class="img-fluid lock mr-2" src="../../assets/images/icon/icon3.png" alt="">
                </div>
              </div>

          
          </form>
        </div>

    </div>
  </section>
</template>

<script>
export default {
    name: "loginPage",

}
</script>

<style lang="scss" scoped>
@import "~assets/sass/pages/_login.scss";

</style>