<template>
    <el-container id="app">
        <div class="controls">
            <Controls></Controls>
        </div>
        <Map></Map>
    </el-container>
</template>

<script>
    import Map from './components/Map.vue'
    import Controls from "./components/Controls";

    export default {
        name: 'app',
        components: {
            Controls,
            Map
        }
    }
</script>

<style>
    html, body, #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .controls {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 99;
        margin: 15px;
    }
</style>
