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
            <div class="row align-items-center justify-content-around">
                <!-- <img src="/camminata.gif" alt="loading"> -->
                <img src="/loading_robot.gif" alt="loading">
            </div>
        </div>
    </main>

</template>
<style lang="scss" scoped>
@use '../style/style.scss' as*;

.row{
    background-color: $orange;
    //background-image: url(../../public/1Lk1.gif);
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: contain;
    // min-height: 500px;
    min-height: calc(100vh - 90px) ;

    img{
        width: 400px;
        height: 400px;
    }
}

</style>