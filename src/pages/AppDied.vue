<script>
import AppHeader from '../components/AppHeader.vue';
import store from '../store';
export default {
    name: "Died",
    components: {
        AppHeader
    },
    data() {
        return {
            store
        }
    },
    mounted() {
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
        <div class="container-fluid">
            <div class="row">

                <div class="col-11 col-lg-6 mx-auto p-2">

                    <h2>Fine del gioco</h2>

                    <!-- text -->
                    <div class="contenitore-testo">
                        <p id="typed-text" v-if="store.description && store.description.length > 0">
                            <!-- {{ store.description }} -->
                           
                        </p>
                    </div>

                    <!-- button -->
                    <div class="contenitore-bottone col-12">
                        <a href="/home" class="col-12">Rigioca</a>
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

    .col-11 {
        text-align: center;

        h2 {
            font-size: $px_45;
            padding: $rem_2 $zero;
        }

        .contenitore-testo {

            padding: $rem_2 $zero;
        }

        .contenitore-bottone {
            margin: $rem_1-5 $zero;

            a {
                width: $w100;
                padding: $px_20 $px_45;
                border: $px3 solid $black;
                background-color: $black;
                color: $bianco;
                text-decoration: none;

                &:hover {

                    background-color: $bianco;
                    color: $black;

                }

            }
        }

    }
}
</style>