<script>

export default{
  name:"AppHeader",
  props:{
    title: String,
    content: String
  },
  data(){
    return{
      
    }
  }
}



</script>

<template>
  <section class="container-fluid">
    <div class="row p-2 align-items-center">
      <div class="col-10 text-center mx-auto">
        <h1 class="py-2 m-0">{{title}}</h1>
        <p class="mb-0 p-1">{{ content }}</p>
      </div>
    </div>
  </section>
  
</template>

<style lang="scss" scoped>
@use '../style/style.scss' as*;
.container-fluid{
  background-color: $black;
  color: $orange;
  h1{
    text-decoration: underline overline;
    
  }
}


</style>
