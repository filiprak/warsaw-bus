<template>
    <v-app>
        <v-container class="controls">
            <v-flex offset-xs-0 xs12 offset-md6 md6>
                <Controls></Controls>
            </v-flex>
        </v-container>
        <Map></Map>
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
        data() {
            return {}
        },
        mounted() {
            //store.dispatch('fetchLines');
        }
    }
</script>

<style>
    body, html {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-y: auto !important;
        overflow-x: hidden;
    }

    .controls {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 9999;
    }
</style>
