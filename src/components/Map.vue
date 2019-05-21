<template>
    <div class="fill-height">
        <div class="lines-preview">
            <v-chip small dark v-for="(data, line) in selected_lines" :key="line">
                <small><b>{{line}}</b></small>
            </v-chip>
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
               disableDefaultUi: true,
               gestureHandling: 'greedy',
             }"
                 map-type-id="roadmap">
            <gmap-custom-marker
                    :key="index"
                    v-for="(p, index) in positions"
                    :marker="{ lat: p.lat, lng: p.lng }"
                    :clickable="true"
                    @click="center={ lat: p.lat, lng: p.lng }"
                    alignment="topleft"
            >
                <div :class="['custom-marker', 'bus']">
                    <div :style="getHeadingRotateStyle(p)">
                        <svg viewBox="0 0 100 100">
                            <polygon points="50,75 90,100 50,0 10,100" id="nav"></polygon>
                        </svg>
                    </div>
                    <b>{{p.lines}}</b>
                </div>
            </gmap-custom-marker>
        </GmapMap>
    </div>
</template>

<script>
    import GmapCustomMarker from "vue2-gmap-custom-marker";

    export default {
        name: "Map",
        components: {GmapCustomMarker},
        computed: {
            positions() {
                return this.$store.state.positions;
            },
            selected_lines() {
                return this.$store.state.selected_lines;
            },
        },
        methods: {
            getHeadingRotateStyle(p) {
                return typeof p.heading === 'number' ? 'transform: rotate(' + p.heading + 'deg)' : 'display: none';
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
    .custom-marker {
        cursor: pointer;
        position: relative;
        background: #f7fff6;
        border: 1px solid #585858;
        border-radius: 20px 20px 0 20px;
        padding: 4px 7px;
    }
    .custom-marker.bus {
        border-color: var(--bus-marker-color);
    }
    .custom-marker.tram {
        border-color: var(--tram-marker-color);
    }
    .custom-marker svg polygon {
        fill: black;
    }
    .custom-marker.bus svg polygon {
        fill: var(--bus-marker-color);
    }
    .custom-marker.tram svg polygon {
        fill: var(--tram-marker-color);
    }
    .custom-marker:hover {
        background: #d6d6d6;
    }
    .custom-marker > div {
        position: absolute;
        bottom: -8px;
        right: -8px;
        width: 15px;
        height: 15px;
        background: transparent;
        border-radius: 50%;
    }
</style>