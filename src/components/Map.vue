<template>
    <GmapMap ref="mapRef"
             class="map"
             :center="{lat: 52.236619, lng: 21.005948}"
             :zoom="11"
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
</template>

<script>
    export default {
        name: "Map",

    }
</script>

<style scoped>
    .map {
        width: 100%;
        height: 100%;
    }
</style>