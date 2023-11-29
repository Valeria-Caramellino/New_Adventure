<script>
import AppHeader from '../components/AppHeader.vue';
import store from '../store';
export default {
    name: 'AppPlay',
    components: {
        AppHeader
    },
    data() {
        return {
            store
        }
    },
    methods: {
        // get(el){
        //     console.log(el)
        //     console.log(store.compleateChat);
        // }
    
    },


}

</script>
<template>
    <header>
        <AppHeader :title="'Adventure'" />
    </header>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mx-auto">

                    <div class="contenitore-img col-12 col-lg-6 mx-auto" :style="{ backgroundImage: `url(${store.imgUrl})` }">
                        <!-- <img :src="store.imgUrl" alt="img"> -->
                    </div>

                    <div class="contenitore-testo col-12 col-lg-6 mx-auto">
                        <p v-if="store.description && store.description.length > 0">
                            {{ store.description }}
                        </p>
                    </div>

                    <div class="contenitore-bottoni col-12 col-lg-6 mx-auto d-flex flex-wrap">
                        <!-- @click="LocalStore.get(action) -->
                        <template v-if="store.action && store.action.length > 0">
                            <button v-for="(action, index) in store.action" :key="index" @click="store.get(action ,this.$router)" class="col-11 col-xl-3 mx-auto">
                            {{ action }} 
                        </button>
                    </template>
                    
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
@use '../style/style.scss' as*;


.row {
    justify-content: center;
    align-items: center;
    height: calc( 100vh - 11rem );
    
    overflow-y: auto;

    .col-12 {
        padding-top: 10px;
        padding-bottom: 0;
        .contenitore-img {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 400px;
            
        }

        .contenitore-testo {
        
            margin: 0 auto;
            padding-top: 20px;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, rgb(0, 0, 0) 100%);
            text-align: center;
            position: relative;
            top: -50px;
            color: white;
        }

        .contenitore-bottoni {
            padding-top: 1rem;
            margin-top: -50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            button {
                border: 2px solid $black;
                color: $bianco;
                padding: 5px 5px;
                background-color: transparent;
                margin: 0.5rem;

                &:hover {
                    background-color: $black;
                }
            }
        }
    }
}
</style>