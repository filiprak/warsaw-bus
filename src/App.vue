<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                clipped
                app
        >
            <Controls></Controls>
        </v-navigation-drawer>

        <v-toolbar
                dark
                dense
                fixed
                clipped-left
                app
                flat
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="mr-5 align-center">
                <span class="title">Warsaw Bus</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="onRefreshClick" :loading="loading_positions">
                <v-icon>refresh</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content>
            <v-container fill-height class="ma-0 pa-0 max-width-full">
                <v-layout>
                    <v-flex class="fill-height" grow>
                        <Map></Map>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Map from './components/Map'
    import Controls from "./components/Controls"
    import store from './store'

    export default {
        name: 'App',
        components: {
            Controls,
            Map
        },
        computed: {
            selected_lines() {
                return this.$store.state.selected_lines;
            },
            loading_positions() {
                return this.$store.state.loading_positions;
            },
        },
        data() {
            return {
                drawer: false,
            }
        },
        methods: {
            async onRefreshClick() {
                await store.dispatch('fetchPositions');
            }
        },
        async mounted() {
            await store.dispatch('fetchLines');
            await store.dispatch('fetchPositions');
            setInterval(async () => {
                await store.dispatch('fetchPositions');
            }, 5000);
        }
    }
</script>

<style>
    :root {
        --bus-marker-color: #ff0000;
        --tram-marker-color: #ff0000;
    }
    body, html {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        overflow-y: auto !important;
        overflow-x: hidden;
    }

    .max-height-full {
        max-height: 100%;
    }

    .max-width-full {
        max-width: 100%;
    }
</style>
