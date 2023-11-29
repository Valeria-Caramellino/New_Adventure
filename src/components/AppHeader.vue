<script>

export default {
  name: "AppHeader",
  props: {
    title: String,
    content: String
  }
}

</script>

<template>
  <section class="container-fluid">

    <div class="row p-2 align-items-center">

      <div class="col-11 col-md-9 text-center mx-auto">
        <h1 class="py-2 m-0">{{ title }}</h1>
      </div>

      <div class="col-11 col-md-6 mx-auto text-center">
        <p class="mb-0 p-1">{{ content }}</p>
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


  h1 {
    text-decoration: underline overline;

  }
}
</style>
