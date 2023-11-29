<script>
import AppHeader from '../components/AppHeader.vue';
import store from '../store';
export default{
    name:'AppHome',
    components:{
        AppHeader
    },
    data(){
        return{
            store,
            plays:[
                {
                    img:'/horror.png' ,
                    text:'horror'
                },
                {
                    img:'/spionaggio.png',
                    text:'film di spionaggio'
                },
                {
                    img:'/super.png',
                    text:'supereroi marvel'
                },
                {
                    img:'/avventura.png',
                    text:'film avventura'
                },
                {
                    img:'/azione.png',
                    text:'film azione'
                },
                {
                    img:'/fantasy.png',
                    text:'fantasy'
                },


            ]
        }
    },
    methods:{
       
    }
}

</script>

<template>
    <header>
        
        <AppHeader :title="'Adventure'" :content='"Ciao GIOCATORE, benvenuto nel gioco d`avventura testuale in cui la storia è inventate da ChatGPT :)"'/>

    </header>
    <main>
        <div class="container-img ">
            <div class="row mx-auto justify-content-center">

                <!-- <img src="/bg1.png" alt="sfondo"> -->

            </div>
        </div>
        <div class="container d-flex align-items-center mx-auto p-2">
            <div class="row justify-content-around align-items-center">
                <template v-for="item in plays">
                    <div class="col-2 p-3 d-flex align-items-center justify-content-center" @click="store.selezionaGenere(item.text, this.$router)">
                        <img :src="item.img" alt="img">
                        <!-- <p class="m-0 p-0">{{ item.img }}</p> -->
                    </div>
    
                </template>
    
            </div>
        </div>

    </main>
    


</template>

<style lang="scss" scoped>
@use '../style/style.scss' as*;
main{
    
    height: 83vh;
    .container-img{
        //background-color: aqua;
        position: absolute;
        width: 100%;
        height: 83vh;
        
        // height: 100%;
        z-index: -2;
        
        .row{
            height: 100%;
            img{
                width: 90%;
                height: 100%;
            }
        }
    
    }
    .container{
   
    min-height: 500px;
    .row{
        width: 100%;
        height: 100%;
    }
    .col-2{
        width: 100px;
        height: 100px;
        border: 3px solid $black;
        background-color: $orange;
        &:hover{
            background-color: rgba($color: #ffff, $alpha: 0.7);
            cursor: pointer;
        }
        img{
            width: 90%;

        }
        p{
            font-size: 40px;
    
        }
    }
}
}


</style>