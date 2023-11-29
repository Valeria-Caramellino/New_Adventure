<script>
import AppHeader from '../components/AppHeader.vue';
import store from '../store';
export default{
    name:"Died",
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
        <AppHeader :title="'Adventure'" />
    </header>
    <main>
        <div class="container">
            <div class="row">

                <div class="col-8 mx-auto p-2">

                    <!-- <h1>☠️</h1> -->
                    <h2>Fine del gioco</h2>
                    <div class="">
                        <p v-if="store.description && store.description.length > 0">
                            {{ store.description }}
                        </p>
                    </div>
                    
                    <button><a href="/home">Rigioca</a></button>
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
@use '../style/style.scss' as*;
.row{
    min-height: 500px;
    justify-content: center;
    align-items: center;
    .col-8{
        text-align: center;
        h1{
            font-size: 60px;
        }
        h2{
            font-size: 35px;
        }
        button{
            width: 80%;
            padding: 10px;
            border: 2px solid $black;
            color: $bianco;
            background-color: transparent;
            &:hover{
                background-color: $black;
            }
            a{
                color: $bianco;
                text-decoration: none;
            }
        }
    }
}
</style>