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
        <div class="container-fluid">
            <div class="row">

                <div class="col-11 col-lg-6 mx-auto p-2">

                    <h2>Fine del gioco</h2>
                    <div class="contenitore-testo">
                        <p v-if="store.description && store.description.length > 0">
                            {{ store.description }}
                        </p>
                    </div>
                    <div class="contenitore-bottone">
                        <button><a href="/home">Rigioca</a></button>

                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
@use '../style/style.scss' as*;
.row{
    justify-content: center;
    align-items: center;
    .col-11{
        text-align: center;
        h2{
            font-size: 45px;
            padding: 2rem 0;
        }
        .contenitore-testo{
           
            padding: 2rem 0 ;
        }
        .contenitore-bottone{
            margin: 1.5rem 0;
           
            button{
            
            width: 100%;
            padding: 10px;
            border: 2px solid $black;
            //color: white;
            background-color: black;
                
                &:hover{
                    background-color: white;
                    a{
                        color: black;
                    }
                }
                a{
                    color: white;
                    text-decoration: none;
                }
            } 
        }
        
    }
}
</style>