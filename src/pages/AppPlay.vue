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
    mounted(){
        this.$nextTick(() => {
            store.decorationText();
        });
    }
}


</script>
<template>

    <header>
        <AppHeader :title="'Adventures'" />
    </header>

    <main>
        <section class="container-fluid">
            <div class="row">
                <div class="col-12 mx-auto">

                    <!-- img -->
                    <div class="contenitore-img col-12 col-lg-6 mx-auto" :style="{ backgroundImage: `url(${store.imgUrl})` }"></div>

                    <!-- text -->
                    <div class="contenitore-testo col-12 col-lg-6 mx-auto">
                        <p id="typed-text" v-if="store.description && store.description.length > 0" >
                            <!-- {{ store.description }} -->
                        </p>
                    </div>

                    <!-- button -->
                    <div class="contenitore-bottoni col-12 col-lg-6 mx-auto d-flex flex-wrap">
                        <template v-if="store.action && store.action.length > 0">
                            <button v-for="(action, index) in store.action" :key="index" @click="store.get(action ,this.$router)" class="col-11 col-xl-3 mx-auto">
                            {{ action }} 
                            </button>
                        </template>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
@use '../style/style.scss' as*;


.row {
    justify-content: center;
    align-items: center;
    height: $h_page;
    overflow-y: auto;

    .col-12 {
        padding-top: $px_10;
        padding-bottom: $zero;
        .contenitore-img {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: $px_400;
            
        }

        .contenitore-testo {
        
            margin: $zero auto;
            padding-top: $px_20;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, rgb(0, 0, 0) 100%);
            text-align: center;
            position: relative;
            top: -50px;
            color: $bianco;
        }

        .contenitore-bottoni {
            padding-top: $rem_1;
            margin-top: -50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            button {
                border: $px3 solid $black;
                color: $bianco;
                padding: $px_5 $px_5;
                background-color: transparent;
                margin: $rem_05;

                &:hover {
                    background-color: $black;
                }
            }
        }
    }
}
/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  //border-radius: 5px;
  background-color: $black;
}

*::-webkit-scrollbar-track:hover {
  background-color: $black;
}

*::-webkit-scrollbar-track:active {
  background-color: $black;
}

*::-webkit-scrollbar-thumb {
  //border-radius: 5px;
  background-color: $scroll_sopra;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: $scroll_sopra;
}

*::-webkit-scrollbar-thumb:active {
  background-color: $scroll_sopra;
}

</style>