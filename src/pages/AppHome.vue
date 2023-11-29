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
    },
    methods: {

    }
}

</script>

<template>
    <header>

        <AppHeader :title="'Adventure'"
            :content='"Ciao GIOCATORE, benvenuto nel gioco d`avventura testuale in cui la storia è inventate da ChatGPT :)"' />

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

    // min-height: calc( 100vh - 11rem );

    .container-fluid {

        .row {

            padding: 2rem 0;
            margin-top: 1rem;
        }

        .col-2 {
            padding: 0;
            width: 200px;
            height: 200px;
            border: 3px solid $black;
            background-color: $orange;
            margin: 0.5rem;

            &:hover {
                background-color: rgba($color: #ffff, $alpha: 0.7);
                cursor: pointer;
            }

            .card-header {
                width: 100%;
                height: 3.5rem;
                //text-align: center;
                padding: 0.75rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: darkorange;

                p {
                    margin: 0;
                    padding: 0;

                }
            }

            .card-body {
                max-height: calc(200px - 3.5rem);
                width: 90%;
                margin: 0.5rem;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }
}
</style>