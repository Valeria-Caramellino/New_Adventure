<script>
import AppHeader from '../components/AppHeader.vue';
import store from '../store';

export default {
    name: 'AppHome',
    components: {
        AppHeader
    },
    data() {
        return {
            store,
            plays: [
                {
                    img: '/horror.png',
                    text: 'horror'
                },
                {
                    img: '/spionaggio.png',
                    text: 'film di spionaggio'
                },
                {
                    img: '/super.png',
                    text: 'supereroi marvel'
                },
                {
                    img: '/avventura.png',
                    text: 'film avventura'
                },
                {
                    img: '/azione.png',
                    text: 'film azione'
                },
                {
                    img: '/fantasy.png',
                    text: 'fantasy'
                },


            ]
        }
    }
}

</script>

<template>
    <header>

        <AppHeader :title="'Adventures'"
            :content="`Benvenuto nel gioco d'avventura testuale in cui la storia è inventata da ChatGPT`" />

    </header>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-10 mx-auto text-center">
                    <h2>Scegli il tema per la tua storia</h2>
                </div>
            </div>
        </div>

        <div class="container-fluid mx-auto">
            <div class="row justify-content-center align-items-center">
                <template v-for="item in plays">
                    <div class="col-2 card d-flex align-items-center justify-content-center"
                        @click="store.selezionaGenere(item.text, this.$router)">
                        <div class="card-header">
                            <p>{{ item.text }}</p>

                        </div>
                        <div class="card-body" :style="{ backgroundImage: `url(${item.img})` }">

                        </div>

                    </div>

                </template>

            </div>
        </div>
        
    </main>
</template>

<style lang="scss" scoped>
@use '../style/style.scss' as*;

main {

    height: $h_page;
    overflow-y: auto;

    .container-fluid {

        .row {

            padding: $rem_2 $zero;
            margin-top: $rem_1;
        }

        .col-2 {
            padding: $zero;
            width: $px200;
            height: $px200;
            border: $px3 solid $black;
            background-color: $orange;
            margin: $rem_05;

            &:hover {
                background-color: rgba($color: $bianco, $alpha: 0.7);
                cursor: pointer;
            }

            .card-header {
                width: $w100;
                height: $h_header_card;
                //text-align: center;
                padding: $p_075;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $darkorange;

                p {
                    margin: $zero;
                    padding: $zero;

                }
            }

            .card-body {
                max-height: $h_body_card;
                width: $w90;
                margin: $rem_05;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }
}
</style>