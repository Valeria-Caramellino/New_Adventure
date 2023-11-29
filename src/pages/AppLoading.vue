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
        <AppHeader :title="'Adventure'"/>
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
  height: calc( 100vh - 11rem );
  padding: 0;
  margin: 0;
  background-image: url(../../public/loading_robot.gif);
  background-repeat: no-repeat;
  background-position: center;  
}

</style>