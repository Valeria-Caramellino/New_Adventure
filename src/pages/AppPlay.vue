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
        <div class="container">
            <div class="row">
                <div class="col-10 mx-auto">

                    <div class="contenitore-img">
                        <img :src="store.imgUrl" alt="img">
                    </div>

                    <div class="contenitore-testo">
                        <p v-if="store.description && store.description.length > 0">
                            {{ store.description }}
                        </p>
                    </div>

                    <div class="contenitore-bottoni">
                        <!-- @click="LocalStore.get(action) -->
                        <template v-if="store.action && store.action.length > 0">
                            <button v-for="(action, index) in store.action" :key="index" @click="store.get(action ,this.$router)">
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

    .col-10 {
        padding: 10px;

        .contenitore-img {
            max-width: 100%;
            max-height: 400px;
            display: flex;
            justify-content: center;

            img {
                max-width: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        .contenitore-testo {
            max-width: 512px;
            margin: 0 auto;
            padding-top: 20px;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, rgb(0, 0, 0) 100%);
            text-align: center;
            position: relative;
            top: -50px;
        }

        .contenitore-bottoni {
            padding: 1rem;
            margin-top: -50px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            button {
                border: 2px solid $black;
                color: $bianco;
                padding: 5px 5px;
                background-color: transparent;

                &:hover {
                    background-color: $black;
                }
            }
        }
    }
}
</style>