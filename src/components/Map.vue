<template>
    <div class="fill-height">
        <div class="lines-preview">
            <v-chip small color="orange" v-for="(flag, line) in selected_lines" :key="line">{{line}}</v-chip>
        </div>
        <GmapMap ref="mapRef"
                 class="map"
                 :center="{lat: 52.236619, lng: 21.005948}"
                 :zoom="12"
                 :options="{
               zoomControl: true,
               mapTypeControl: false,
               scaleControl: false,
               streetViewControl: false,
               rotateControl: false,
               fullscreenControl: false,
               disableDefaultUi: true
             }"
                 map-type-id="terrain">

        </GmapMap>
    </div>
</template>

<script>
    export default {
        name: "Map",
        computed: {
            selected_lines() {
                return this.$store.state.selected_lines;
            }
        },
        data() {
            return {
                max_display_line_chips: 5
            }
        }
    }
</script>

<style scoped>
    .map {
        width: 100%;
        height: 100%;
    }
    .lines-preview {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }
</style>