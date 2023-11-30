<script>

export default {
  name: "AppHeader",
  props: {
    title: String,
    content: String
  },
  mounted(){

    if (this.content){

      var options = {
        strings: [this.content],
        typeSpeed: 60,
        backSpeed: 0,
        startDelay: 500,
        showCursor: true,
      };
  
      var typed = new Typed("#typed-content", options);
    }

  }
}

</script>

<template>
  <section class="container-fluid">

    <div class="row p-2 align-items-center">

      <div class="col-11 col-md-9 text-center mx-auto my">
        <h1 class="py-2 m-0">{{ title }}</h1>
      </div>

      <div class="col-10 col-md-6 mx-auto text-center">
        <p class="mb-0 p-1" id="typed-content"></p>
      </div>

    </div>

  </section>
</template>

<style lang="scss" scoped>
@use '../style/style.scss' as*;

.container-fluid {
  background-color: $black;
  color: $orange;
  .row {
    height: $h_header;
  }


  .my {
    border-top: $px3 solid ;
    border-bottom: $px3 solid;
  }
  p{
    display: inline;
    font-size: 18px;
  }
}
</style>
