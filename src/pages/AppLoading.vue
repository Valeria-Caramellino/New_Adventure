<script>
import AppHeader from '../components/AppHeader.vue';
import store from '../store';
export default{
    name:'AppLoading',
    components:{
        AppHeader
    },
    data(){
        return{
            store
        }
    }
}


</script>

<template>
    <header>
        <AppHeader :title="'Adventures'"/>
    </header>

    <main>
        <div class="container-fluid">
            <div class="row">
               
            </div>
        </div>
    </main>

</template>
<style lang="scss" scoped>
@use '../style/style.scss' as*;

.row{
  height: $h_page;
  padding: $zero;
  margin: $zero;
  background-image: url(/loading_robot.gif);
  background-repeat: no-repeat;
  background-position: center;  
}

</style>